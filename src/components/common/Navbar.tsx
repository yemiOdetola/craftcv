'use client';
import { MutableRefObject, useRef, useState } from 'react';
import { Popover } from '@headlessui/react';

const sections = [
  {
    id: 'table-of-contents',
    title: (
      <>
        <span className='hidden lg:inline'>Table of contents</span>
        <span className='lg:hidden'>Contents</span>
      </>
    ),
  },
  { id: 'screencasts', title: 'Screencasts' },
  { id: 'resources', title: 'Resources' },
  { id: 'pricing', title: 'Pricing' },
  { id: 'author', title: 'Author' },
];

function MenuIcon({ open, ...props }: any) {
  return (
    <svg
      aria-hidden='true'
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d={open ? 'M17 7 7 17M7 7l10 10' : 'm15 16-3 3-3-3M15 8l-3-3-3 3'}
      />
    </svg>
  );
}

export function Navbar() {
  let navBarRef: MutableRefObject<any> = useRef();
  let [activeIndex, setActiveIndex] = useState<any | number>(0);
  let mobileActiveIndex = activeIndex === null ? 0 : activeIndex;

  return (
    <div ref={navBarRef} className='sticky top-0 z-50'>
      <Popover className='sm:hidden'>
        {({ open }) => (
          <>
            <div
              className={`'relative py-3' flex items-center
                ${
                  !open &&
                  'bg-white/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur'
                }`}
            >
              {!open && (
                <>
                  <span
                    aria-hidden='true'
                    className='font-mono text-sm text-blue-600'
                  >
                    {(mobileActiveIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className='ml-4 text-base font-medium text-slate-900'>
                    {sections[mobileActiveIndex].title}
                  </span>
                </>
              )}
              <Popover.Button
                className={`-mr-1 ml-auto flex h-8 w-8 items-center justify-center ${
                  open && 'relative z-10'
                }`}
                aria-label='Toggle navigation menu'
              >
                {!open && (
                  <>
                    {/* Increase hit area */}
                    <span className='absolute inset-0' />
                  </>
                )}
                <MenuIcon open={open} className='h-6 w-6 stroke-slate-700' />
              </Popover.Button>
            </div>
            <Popover.Panel className='absolute inset-x-0 top-0 bg-white/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur'>
              {sections.map((section, sectionIndex) => (
                <Popover.Button
                  key={section.id}
                  className='flex items-center px-4 py-1.5'
                >
                  <span
                    aria-hidden='true'
                    className='font-mono text-sm text-blue-600'
                  >
                    {(sectionIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className='ml-4 text-base font-medium text-slate-900'>
                    {section.title}
                  </span>
                </Popover.Button>
              ))}
            </Popover.Panel>
            <div className='absolute inset-x-0 bottom-full z-10 h-4 bg-white' />
          </>
        )}
      </Popover>
      <div className='hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-slate-200 sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:bg-white/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur'>
        <ol
          role='list'
          className='mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-slate-900 [counter-reset:section]'
        >
          {sections.map((section, sectionIndex) => (
            <li key={section.id} className='flex [counter-increment:section]'>
              <div
                className={`flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]
                  ${
                    sectionIndex === activeIndex
                      ? 'border-blue-600 bg-blue-50 text-blue-600 before:text-blue-600'
                      : 'border-transparent before:text-slate-500 hover:bg-blue-50/40 hover:before:text-slate-900'
                  }
                `}
              >
                {section.title}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
