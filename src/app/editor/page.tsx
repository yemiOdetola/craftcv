'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { Container, Navbar } from '@/components/common';
import placeholder from '@/images/placeholder/neil-sims.png'

export default function Craft() {
  const [primaryColor, setPrimarycolor] = useState<string>('#')
  return (
    <main className="bg-white">
      <Navbar />
      <Container className="max-w-5xl">
        <div className="w-full min-h-screen shadow-xl my-16">
          <div className="w-full max-w-6xl mx-auto px-4 py-8 flex justify-between md:flex-no-wrap flex-wrap">
            <div className="md:w-1/3 w-full">
              <header>
                <Image src={placeholder} alt="Profile" className="rounded" width={300} height={300} />
                <h1 className="uppercase text-green font-bold text-3xl mt-4 font-mono">Meredith Smith</h1>
                <p className="text-medium text-gray-600 font-mono">Android Engineer</p>
              </header>
              <section className="mt-16">
                <h3 className="uppercase text-green font-bold text-xl font-mono">Career Objectives</h3>
                <p className="">I am a motivated team player and aspiring web developer with great design and branding knowledge. My ultimate goal is to grow my knowledge of the industry and use my conversational skills to help fast-paced startup design UI/UX charismas.</p>
              </section>

              <section className="mt-16">
                <h3 className="uppercase text-green font-bold text-xl font-mono">Specializations</h3>
                <div className="h-0.5 bg-green w-48 mt-1 mb-4" />
                <ul className=" list-disc list-inside">
                  <li>Front End Design (HTML, CSS, Figma, Sass)</li>
                  <li><a href="https://tailwindcss.com" className="hover:underline">TailwindCSS (♥)</a></li>
                  <li>Javascript ES6/*7 (Data Modelling, Debugging, Async Performance)</li>
                  <li>Front End Development (Vue.js, React.js, Svelte)</li>
                  <li>User Interface/User Experience</li>
                  <li>Design Thinking & Problem Solving </li>
                  <li>Can develop high-performant front-end interfaces which interacts with backend API</li>
                </ul>
              </section>

              <section className="mt-16">
                <h3 className="uppercase text-green font-bold text-xl font-mono">Contact Info:</h3>
                <div className="h-0.5 bg-green w-48 mt-1 mb-4" />
                <div className="">
                  <a href="https://linkedin.com/in/justaashir" className="hover:underline flex items-center">
                    LinkedIn
                  </a>
                  <a href="https://twitter.com/justaashir" className="hover:underline flex items-center mt-1">
                    Twitter
                  </a>
                  <a href="mailto:hello@justaashir.com" className="hover:underline flex items-center mt-1">
                    hello@justaashir.com
                  </a>
                  <a href="https://justaashir.com" className="hover:underline flex items-center mt-1">
                    www.justaashir.com
                  </a>
                </div>
              </section>
            </div>
            <div className="md:w-2/4 w-full">
              <section className="mt-16 md:mt-0">
                <h3 className="uppercase text-green font-bold text-xl font-mono">Work Summary</h3>
                <div className="h-0.5 bg-green w-48 mt-1 mb-4" />
                <div className="mt-8">
                  <h4 className="font-bold text-gray-500 text-lg">Junior Front-end engineer</h4>
                  <h5 className="text-md text-green font-mono"><a href="https://renetal.com" className="hover:underline">Renetal</a> | 2019 - JULY 2020</h5>
                  <ul className=" list-disc list-inside mt-4">
                    <li> Designed high-performant UI Components </li>
                    <li> Complete SaaS app redesign using VueJs </li>
                    <li> Worked with an amazing remote-team from SIngapore in an agile environment.</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-gray-500 text-lg">Founder &lt; CEO</h4>
                  <h5 className="text-md text-green font-mono"><a href="https://justifyagency.com" className="hover:underline">Justify Agency</a> | 2020 - Present</h5>
                  <ul className=" list-disc list-inside mt-4">
                    <li> Meeting with clients to discuss project requirements and workflow. (Includes Startups & Products) </li>
                    <li> Working with distributed network of freelancers </li>
                    <li>Complete Branding & Design System (Email, Social Media, Website, Print) </li>
                  </ul>
                </div>
              </section>
              <section className="mt-16">
                <h3 className="uppercase text-green font-bold text-xl font-mono">Freelance</h3>
                <div className="h-0.5 bg-green w-48 mt-1 mb-4" />

                <div className="mt-5">
                  <h4 className="font-bold text-gray-500 text-lg"><a href="https://dev.to/justaashir" className="hover:underline">DEV Community</a> (Volunteer & Technical Writer)</h4>
                  <ul className=" list-disc list-inside mt-4">
                    <li>Have written about Vuejs, career advice and resources...</li>
                    <li> Top 500 Author (Award)</li>
                    <li> 16,000+ Followers +  150K+ Views</li>
                    <li> 5 Badges</li>
                  </ul>
                </div>
                <div className="mt-5">
                  <h4 className="font-bold text-gray-500 text-lg"><a href="https://dev.to/justaashir" className="hover:underline">DEV Community</a> (Volunteer & Technical Writer)</h4>
                  <ul className=" list-disc list-inside mt-4">
                    <li>Have written about Vuejs, career advice and resources...</li>
                    <li> Top 500 Author (Award)</li>
                    <li> 16,000+ Followers +  150K+ Views</li>
                    <li> 5 Badges</li>
                  </ul>
                </div>
              </section>
              <section className="mt-16">
                <h3 className="uppercase text-green font-bold text-xl font-mono">Passion Projects</h3>
                <div className="h-0.5 bg-green w-48 mt-1 mb-4" />
                <div className="mt-8">
                  <h4 className="font-medium text-xl">Tailwind CSS Ui Kit</h4>
                  <p className=" mt-2">
                    Building this, in my free time. Making modern design systems and kits possible with TailwindCSS
                  </p>
                </div>
                <div className="mt-8">
                  <h4 className="font-medium text-xl"><a href="https://remoteworkjar.com" className="hover:underline">RemoteWorkJar</a></h4>
                  <p className=" mt-2">Remote Job Board, where the main focus is to manually screen every job posted and help candidates get high-quality remote-only job postings.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
