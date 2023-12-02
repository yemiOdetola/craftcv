'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Container, Navbar } from '@/components/common';
import placeholder from '@/images/placeholder/neil-sims.png';

export default function Craft() {
  return (
    <main className='bg-white'>
      <Navbar />
      <Container className='max-w-5xl'>
        <div className='my-16 min-h-screen w-full shadow-xl'>
          <div className='md:flex-no-wrap mx-auto flex w-full max-w-6xl flex-wrap justify-between px-4 py-8'>
            <div className='w-full md:w-1/3'>
              <header>
                <Image
                  src={placeholder}
                  alt='Profile'
                  className='rounded'
                  width={300}
                  height={300}
                />
                <h1 className='text-green mt-4 font-mono text-3xl font-bold uppercase'>
                  Meredith Smith
                </h1>
                <p className='text-medium font-mono text-gray-600'>
                  Android Engineer
                </p>
              </header>
              <section className='mt-16'>
                <h3 className='text-green font-mono text-xl font-bold uppercase'>
                  Career Objectives
                </h3>
                <p className=''>
                  I am a motivated team player and aspiring web developer with
                  great design and branding knowledge. My ultimate goal is to
                  grow my knowledge of the industry and use my conversational
                  skills to help fast-paced startup design UI/UX charismas.
                </p>
              </section>

              <section className='mt-16'>
                <h3 className='text-green font-mono text-xl font-bold uppercase'>
                  Specializations
                </h3>
                <div className='bg-green mb-4 mt-1 h-0.5 w-48' />
                <ul className=' list-inside list-disc'>
                  <li>Front End Design (HTML, CSS, Figma, Sass)</li>
                  <li>
                    <a
                      href='https://tailwindcss.com'
                      className='hover:underline'
                    >
                      TailwindCSS (♥)
                    </a>
                  </li>
                  <li>
                    Javascript ES6/*7 (Data Modelling, Debugging, Async
                    Performance)
                  </li>
                  <li>Front End Development (Vue.js, React.js, Svelte)</li>
                  <li>User Interface/User Experience</li>
                  <li>Design Thinking & Problem Solving </li>
                  <li>
                    Can develop high-performant front-end interfaces which
                    interacts with backend API
                  </li>
                </ul>
              </section>

              <section className='mt-16'>
                <h3 className='text-green font-mono text-xl font-bold uppercase'>
                  Contact Info:
                </h3>
                <div className='bg-green mb-4 mt-1 h-0.5 w-48' />
                <div className=''>
                  <a
                    href='https://linkedin.com/in/justaashir'
                    className='flex items-center hover:underline'
                  >
                    LinkedIn
                  </a>
                  <a
                    href='https://twitter.com/justaashir'
                    className='mt-1 flex items-center hover:underline'
                  >
                    Twitter
                  </a>
                  <a
                    href='mailto:hello@justaashir.com'
                    className='mt-1 flex items-center hover:underline'
                  >
                    hello@justaashir.com
                  </a>
                  <a
                    href='https://justaashir.com'
                    className='mt-1 flex items-center hover:underline'
                  >
                    www.justaashir.com
                  </a>
                </div>
              </section>
            </div>
            <div className='w-full md:w-2/4'>
              <section className='mt-16 md:mt-0'>
                <h3 className='text-green font-mono text-xl font-bold uppercase'>
                  Work Summary
                </h3>
                <div className='bg-green mb-4 mt-1 h-0.5 w-48' />
                <div className='mt-8'>
                  <h4 className='text-lg font-bold text-gray-500'>
                    Junior Front-end engineer
                  </h4>
                  <h5 className='text-md text-green font-mono'>
                    <a href='https://renetal.com' className='hover:underline'>
                      Renetal
                    </a>{' '}
                    | 2019 - JULY 2020
                  </h5>
                  <ul className=' mt-4 list-inside list-disc'>
                    <li> Designed high-performant UI Components </li>
                    <li> Complete SaaS app redesign using VueJs </li>
                    <li>
                      {' '}
                      Worked with an amazing remote-team from SIngapore in an
                      agile environment.
                    </li>
                  </ul>
                </div>

                <div className='mt-8'>
                  <h4 className='text-lg font-bold text-gray-500'>
                    Founder &lt; CEO
                  </h4>
                  <h5 className='text-md text-green font-mono'>
                    <a
                      href='https://justifyagency.com'
                      className='hover:underline'
                    >
                      Justify Agency
                    </a>{' '}
                    | 2020 - Present
                  </h5>
                  <ul className=' mt-4 list-inside list-disc'>
                    <li>
                      {' '}
                      Meeting with clients to discuss project requirements and
                      workflow. (Includes Startups & Products){' '}
                    </li>
                    <li> Working with distributed network of freelancers </li>
                    <li>
                      Complete Branding & Design System (Email, Social Media,
                      Website, Print){' '}
                    </li>
                  </ul>
                </div>
              </section>
              <section className='mt-16'>
                <h3 className='text-green font-mono text-xl font-bold uppercase'>
                  Freelance
                </h3>
                <div className='bg-green mb-4 mt-1 h-0.5 w-48' />

                <div className='mt-5'>
                  <h4 className='text-lg font-bold text-gray-500'>
                    <a
                      href='https://dev.to/justaashir'
                      className='hover:underline'
                    >
                      DEV Community
                    </a>{' '}
                    (Volunteer & Technical Writer)
                  </h4>
                  <ul className=' mt-4 list-inside list-disc'>
                    <li>
                      Have written about Vuejs, career advice and resources...
                    </li>
                    <li> Top 500 Author (Award)</li>
                    <li> 16,000+ Followers + 150K+ Views</li>
                    <li> 5 Badges</li>
                  </ul>
                </div>
                <div className='mt-5'>
                  <h4 className='text-lg font-bold text-gray-500'>
                    <a
                      href='https://dev.to/justaashir'
                      className='hover:underline'
                    >
                      DEV Community
                    </a>{' '}
                    (Volunteer & Technical Writer)
                  </h4>
                  <ul className=' mt-4 list-inside list-disc'>
                    <li>
                      Have written about Vuejs, career advice and resources...
                    </li>
                    <li> Top 500 Author (Award)</li>
                    <li> 16,000+ Followers + 150K+ Views</li>
                    <li> 5 Badges</li>
                  </ul>
                </div>
              </section>
              <section className='mt-16'>
                <h3 className='text-green font-mono text-xl font-bold uppercase'>
                  Passion Projects
                </h3>
                <div className='bg-green mb-4 mt-1 h-0.5 w-48' />
                <div className='mt-8'>
                  <h4 className='text-xl font-medium'>Tailwind CSS Ui Kit</h4>
                  <p className=' mt-2'>
                    Building this, in my free time. Making modern design systems
                    and kits possible with TailwindCSS
                  </p>
                </div>
                <div className='mt-8'>
                  <h4 className='text-xl font-medium'>
                    <a
                      href='https://remoteworkjar.com'
                      className='hover:underline'
                    >
                      RemoteWorkJar
                    </a>
                  </h4>
                  <p className=' mt-2'>
                    Remote Job Board, where the main focus is to manually screen
                    every job posted and help candidates get high-quality
                    remote-only job postings.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
