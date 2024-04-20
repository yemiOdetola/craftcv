import { Container } from '@/components/Container';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className=''>
      <Container className='mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 md:flex-row md:py-16 lg:items-center'>
          <div className='w-full md:w-1/2'>
            <div className='flex items-center text-gray-900'>
              <Image
                src='/images/logo-icon.svg'
                width={60}
                height={60}
                alt='cr'
              />
              <div className='ml-4'>
                <p className='text-base font-semibold'>craftCV</p>
                <p className='mt-1 text-sm'>Ultimate resume makeover</p>
              </div>
            </div>
            <form className='mt-12 w-full justify-center md:w-10/12'>
              <span className='text-md mb-1 font-semibold'>Subscribe</span>
              <input
                type='email'
                aria-label='Email address'
                placeholder='Email address'
                className='block w-full appearance-none rounded border border-gray-200 bg-white px-2 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
              />
            </form>
          </div>
          <div className='group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl md:mx-0 md:self-auto md:p-6'>
            <div className='relative flex h-24 w-24 flex-none items-center justify-center'>
              <svg
                viewBox='0 0 96 96'
                fill='none'
                aria-hidden='true'
                className='absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500'
              >
                <path
                  d='M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8'
                  stroke-width='2'
                  strokeLinecap='round'
                ></path>
              </svg>
            </div>
            <div className='ml-8 lg:w-64'>
              <p className='text-base font-semibold text-gray-900'>
                <span>
                  <span className='absolute inset-0 sm:rounded-2xl'></span>
                  Download the app
                </span>
              </p>
              <p className='mt-1 text-sm text-gray-700'>
                Scan the QR code to download the app from the App Store.
              </p>
            </div>
          </div>
        </div>
        <div className='mt-5 text-center'>
          <p className='text-sm '>All rights not reserved</p>
        </div>
      </Container>
    </footer>
  );
}
