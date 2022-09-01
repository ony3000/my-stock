import { Dialog } from '@headlessui/react';
import { useRecoilState } from 'recoil';
import { errorState } from '~/store/atoms';

export default function ErrorDialog() {
  const [error, setError] = useRecoilState(errorState);

  return error ? (
    <Dialog
      open
      onClose={() => {}}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex justify-center items-center px-10">
        <Dialog.Panel className="overflow-hidden w-full max-w-sm rounded-[10px]">
          <div className="p-7.5 bg-white text-center">
            <Dialog.Title className="text-lg leading-6">
              {error.title}
            </Dialog.Title>
            <Dialog.Description className="mt-2.5 text-gray-400 text-sm">
              [
              {error.code}
              ]
              {' '}
              {error.message}
            </Dialog.Description>
          </div>
          <button
            type="button"
            className="flex justify-center items-center w-full h-13.75 rounded-b-[10px] text-white bg-blue-400"
            onClick={() => setError(null)}
          >
            확인
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  ) : null;
}
