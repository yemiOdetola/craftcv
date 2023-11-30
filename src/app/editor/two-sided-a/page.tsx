import React from 'react';
import Image from 'next/image';
import placeholder from '@/images/placeholder/neil-sims.png';

export default function TwoSidedCv() {
  return (
    <div className='mt-5 flex items-center justify-center'>
      <div className='w-1/8 h-auto bg-blue-900 p-10'>
        <div className='mb-10 flex items-center justify-center'>
          <Image
            src={placeholder}
            alt='Profile'
            className='rounded'
            width={300}
            height={300}
          />
        </div>
        <h1 className='text-lg font-bold uppercase tracking-widest text-gray-400'>
          Contact
        </h1>
        <hr className='mb-5 w-1/6' />
        <h1 className='text-sm text-gray-400'>loremipsum@gmail.com</h1>
        <h1 className='text-sm text-gray-400'>+12 456 455 7885</h1>
        <h1 className='text-sm text-gray-400'>Seoul, Korea</h1>
        <h1 className='text-sm text-gray-400'>www.loremipsum.com</h1>
        <hr className='my-5' />
        <h1 className='mt-2 text-lg font-bold uppercase tracking-widest text-gray-400'>
          EDUCATION
        </h1>
        <hr className='mb-5 w-1/6' />
        <h1 className='text-sm font-semibold uppercase tracking-wider text-gray-400'>
          Master of Science
        </h1>
        <h1 className='text-sm text-gray-500'>
          <span className='italic'>University Name</span>,{' '}
          <span className='font-semibold italic text-gray-400'>New York</span> /
          2012-2013
        </h1>
        <br />
        <h1 className='text-sm font-semibold uppercase tracking-wider text-gray-400'>
          Bachelor of Arts
        </h1>
        <h1 className='text-sm text-gray-500'>
          <span className='italic'>College Name Here</span>,{' '}
          <span className='font-semibold italic text-gray-400'>London</span> /
          2011-2012
        </h1>
        <hr className='my-5' />
        <h1 className='mt-2 text-lg font-bold uppercase tracking-widest text-gray-400'>
          SKILLS
        </h1>
        <hr className='mb-5 w-1/6' />
        <ul>
          <li className='ml-4 list-disc text-sm text-gray-500'>
            Adobe Photoshop
          </li>
          <li className='ml-4 list-disc text-sm text-gray-500'>
            Adobe Illustrator
          </li>
          <li className='ml-4 list-disc text-sm text-gray-500'>
            Adobe After Effects
          </li>
          <li className='ml-4 list-disc text-sm text-gray-500'>
            Microsoft Power Point
          </li>
          <li className='ml-4 list-disc text-sm text-gray-500'>
            Microsoft Word
          </li>
          <li className='mb-1 ml-4 list-disc text-sm text-gray-500'>
            Adobe InDesign
          </li>
        </ul>
      </div>

      <div className='h-auto w-7/12 bg-white p-10'>
        <h1 className='text-gray-500'>
          A resourceful individual with a proven track record in implementing
          successful marketing strategies, boosting organic traffic, and
          improving search rankings seeks a position of Marketing Associate at
          ABC company to maximize brand awareness and revenue through integrated
          marketing communications.
        </h1>
        <h1 className='my-6 font-semibold uppercase tracking-wider text-gray-500'>
          Experience
        </h1>
        <h1 className='font-semibold text-gray-600'>
          FullStack Developer (2018 - Present)
        </h1>
        <ul className='ml-5 list-disc text-gray-500'>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <h1 className='mt-3 font-semibold text-gray-600'>
          Sr Developer (2016 - 2-18)
        </h1>
        <ul className='ml-5 list-disc text-gray-500'>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <h1 className='mt-3 font-semibold text-gray-600'>
          Sr Developer (2016 - 2-18)
        </h1>
        <ul className='ml-5 list-disc text-gray-500'>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <h1 className='mt-3 font-semibold text-gray-600'>
          Sr Developer (2016 - 2-18)
        </h1>
        <ul className='ml-5 list-disc text-gray-500'>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <h1 className='mt-3 font-semibold text-gray-600'>
          Sr Developer (2016 - 2-18)
        </h1>
        <ul className='ml-5 list-disc text-gray-500'>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </div>
  );
}
