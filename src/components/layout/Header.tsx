import { Container } from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <nav className='fixed top-0 z-10 w-full border-b border-slate-900/5 bg-gray-50/20 backdrop-blur-xl backdrop-filter'>
      <Container>
        <div className='mx-auto max-w-screen-2xl px-2 sm:px-4 lg:px-8'>
          <div className='md:h-18 flex h-16 justify-between'>
            <div className='flex px-2 lg:px-0'>
              <div className='mr-1 flex flex-shrink-0 items-center'>
                <a
                  className='font-display text-cool-indigo-800 inline-flex items-center text-xl font-black'
                  href='/'
                >
                  <Image
                    src='/images/logo-full.svg'
                    alt='cr'
                    height={32}
                    width={56}
                  />
                </a>
              </div>
              <div
                className='hidden lg:ml-6 lg:flex lg:space-x-8 xl:ml-8'
                data-turbo='false'
              >
                <a
                  className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  href='/'
                >
                  Home
                </a>
                <a
                  className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  href='/?type=template'
                >
                  Templates
                </a>
                <Link
                  className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  href='/parser'
                >
                  Parser
                </Link>
              </div>
            </div>
            <div className='flex flex-1 items-center justify-end px-2 sm:justify-center lg:ml-6 lg:justify-end'>
              <Link
                href='/templates'
                className='inline-block rounded-md border bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 
                hover:border-white hover:bg-blue-500 hover:text-gray-100'
              >
                Start now
              </Link>
            </div>

            <div className='flex items-center'>
              <button
                type='button'
                className='focus:ring-cool-indigo-500 ml-3 inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset lg:hidden'
                aria-controls='mobile-menu'
                aria-expanded='false'
                data-controller='toggle'
                data-toggle-remote='#mobile-menu'
                data-action='click->toggle#toggleRemote'
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                  data-toggle-target='toggleable'
                >
                  <path
                    strokeLinecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
                <svg
                  className='hidden h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                  data-toggle-target='toggleable'
                >
                  <path
                    strokeLinecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className='hidden bg-white/90 backdrop-blur-xl backdrop-filter'
          id='mobile-menu'
          data-controller='toggle'
          data-toggle-target='toggleable'
        >
          <div className='px-2 pb-3 pt-2'>
            <a
              className='rounded-2lg block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              href='/'
            >
              Home
            </a>
            <a
              className='rounded-2lg block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              href='/?type=template'
            >
              Templates
            </a>
            <a
              className='rounded-2lg block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              href='/?price=free'
            >
              Profile
            </a>
          </div>
          <Link
            href='/templates'
            className='text-cool-indigo-600 inline-flex w-full items-center
          justify-center bg-gray-50 px-5 py-3 text-center font-medium
          hover:bg-gray-100'
          >
            Start now
          </Link>
        </div>
      </Container>
    </nav>
  );
}
