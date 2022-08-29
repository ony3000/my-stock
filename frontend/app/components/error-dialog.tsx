import { Dialog } from '@headlessui/react';
import { useRecoilState } from 'recoil';
import type { Dict } from '~/types/common';
import { errorState } from '~/store/atoms';

export default function ErrorDialog() {
  const [error, setError] = useRecoilState(errorState);

  const titlePerStatus: Dict<string> = {
    default: 'Unknown Error',
    0: 'Network Error',
    400: '400 Bad Request',
    401: '401 Unauthorized',
    403: '403 Forbidden',
    404: '404 Not Found',
    406: '406 Not Acceptable',
    500: '500 Internal Server Error',
    502: '502 Bad Gateway',
    503: '503 Service Unavailable',
    504: '504 Gateway Timeout',
  };
  const descriptionPerStatus: Dict<string> = {
    default: '잠시 후 다시 시도해 주세요.',
  };
  const dialogTitle = titlePerStatus[error?.status ?? 'default'] ?? titlePerStatus.default;
  const dialogDescription = descriptionPerStatus[error?.status ?? 'default'] ?? descriptionPerStatus.default;

  return (
    <Dialog
      open={error !== null}
      onClose={() => {}}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex justify-center items-center px-10">
        <Dialog.Panel className="overflow-hidden w-full max-w-sm rounded-[10px]">
          <div className="p-7.5 bg-white text-center">
            <Dialog.Title className="text-lg leading-6">
              {dialogTitle.split('\n').map((line) => {
                const trimmedLine = line.trim();

                return (
                  <span key={trimmedLine} className="whitespace-nowrap">
                    {trimmedLine}
                  </span>
                );
              })}
            </Dialog.Title>
            <Dialog.Description className="mt-2.5 text-gray-400 text-sm">
              {dialogDescription}
            </Dialog.Description>
          </div>
          <button
            type="button"
            className="flex justify-center items-center w-full h-13.75 text-white bg-blue-400"
            onClick={() => setError(null)}
          >
            확인
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
