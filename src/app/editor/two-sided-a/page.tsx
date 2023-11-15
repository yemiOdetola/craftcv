import React from 'react'
import Image from 'next/image'
import placeholder from '@/images/placeholder/neil-sims.png'


export default function TwoSidedCv() {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="bg-blue-900 w-1/8 p-10 h-auto">
        <div className="flex items-center justify-center mb-10">
          <Image src={placeholder} alt="Profile" className="rounded" width={300} height={300} />
        </div>
        <h1 className="text-gray-400 uppercase tracking-widest text-lg font-bold">Contact</h1>
        <hr className="w-1/6 mb-5" />
        <h1 className="text-gray-400 text-sm">loremipsum@gmail.com</h1>
        <h1 className="text-gray-400 text-sm">+12 456 455 7885</h1>
        <h1 className="text-gray-400 text-sm">Seoul, Korea</h1>
        <h1 className="text-gray-400 text-sm">www.loremipsum.com</h1>
        <hr className="my-5" />
        <h1 className="text-gray-400 mt-2 uppercase tracking-widest text-lg font-bold">EDUCATION</h1>
        <hr className="w-1/6 mb-5" />
        <h1 className="text-gray-400 text-sm uppercase font-semibold tracking-wider">Master of Science</h1>
        <h1 className="text-gray-500 text-sm"><span className="italic">University Name</span>, <span
          className="text-gray-400 font-semibold italic">New York</span> / 2012-2013</h1>
        <br />
        <h1 className="text-gray-400 text-sm uppercase font-semibold tracking-wider">Bachelor of Arts</h1>
        <h1 className="text-gray-500 text-sm"><span className="italic">College Name Here</span>, <span
          className="text-gray-400 font-semibold italic">London</span> / 2011-2012</h1>
        <hr className="my-5" />
        <h1 className="text-gray-400 mt-2 uppercase tracking-widest text-lg font-bold">SKILLS</h1>
        <hr className="w-1/6 mb-5" />
        <ul>
          <li className="text-gray-500 text-sm list-disc ml-4">Adobe Photoshop</li>
          <li className="text-gray-500 text-sm list-disc ml-4">Adobe Illustrator</li>
          <li className="text-gray-500 text-sm list-disc ml-4">Adobe After Effects</li>
          <li className="text-gray-500 text-sm list-disc ml-4">Microsoft Power Point</li>
          <li className="text-gray-500 text-sm list-disc ml-4">Microsoft Word</li>
          <li className="text-gray-500 text-sm list-disc ml-4 mb-1">Adobe InDesign</li>
        </ul>
      </div>





      <div className="bg-white w-7/12 p-10 h-auto">
        <h1 className="text-gray-500">A resourceful individual with a proven track record in implementing successful
          marketing strategies, boosting organic traffic, and improving search rankings seeks a position of Marketing
          Associate at ABC company to maximize brand awareness and revenue through integrated marketing
          communications.</h1>
        <h1 className="font-semibold uppercase tracking-wider my-6 text-gray-500">Experience</h1>
        <h1 className="text-gray-600 font-semibold">FullStack Developer (2018 - Present)</h1>
        <ul className="list-disc ml-5 text-gray-500">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <h1 className="text-gray-600 font-semibold mt-3">Sr Developer (2016 - 2-18)</h1>
        <ul className="list-disc ml-5 text-gray-500">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <h1 className="text-gray-600 font-semibold mt-3">Sr Developer (2016 - 2-18)</h1>
        <ul className="list-disc ml-5 text-gray-500">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <h1 className="text-gray-600 font-semibold mt-3">Sr Developer (2016 - 2-18)</h1>
        <ul className="list-disc ml-5 text-gray-500">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <h1 className="text-gray-600 font-semibold mt-3">Sr Developer (2016 - 2-18)</h1>
        <ul className="list-disc ml-5 text-gray-500">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </div>
  )
}
