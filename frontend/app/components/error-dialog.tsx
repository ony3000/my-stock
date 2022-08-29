import { useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function ErrorDialog() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {}}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex justify-center items-center px-10">
        <Dialog.Panel className="overflow-hidden w-full max-w-sm rounded-[10px]">
          <div className="p-7.5 bg-white text-center">
            <Dialog.Title className="text-lg leading-6">
              <span className="whitespace-nowrap">중요한 보안 정보를</span>
              <span className="whitespace-nowrap">로드하지 못했습니다.</span>
            </Dialog.Title>
            <Dialog.Description className="mt-2.5 text-gray-400 text-sm">
              잠시 후 다시 시도해 주세요.
            </Dialog.Description>
          </div>
          <button
            type="button"
            className="flex justify-center items-center w-full h-13.75 text-white bg-blue-400"
            onClick={() => setIsOpen(false)}
          >
            확인
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
