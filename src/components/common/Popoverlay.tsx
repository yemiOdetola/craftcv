'use client';
import { Fragment, ReactNode } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MdExpandMore } from 'react-icons/md';

interface PopoverlayProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Popoverlay({ children, title, className }: PopoverlayProps) {
  return (
    <>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-gray-900' : 'text-gray-400'}
                group inline-flex items-center rounded px-3 py-2 text-base font-medium hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600`}
            >
              <span>{title}</span>
              <MdExpandMore
                className={`${open ? 'text-blue-600' : 'text-gray-400'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-blue-600/80`}
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel
                className={`absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-lg ${className}`}
              >
                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5'>
                  {children}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}
