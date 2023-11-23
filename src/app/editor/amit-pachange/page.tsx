'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { EditorCover, InlineEdit } from '@/components/editor'
import { Modal } from '@/components/common'
import placeholder from '@/images/placeholder/neil-sims.png'
import { getIconByType } from '../Icons'



export default function AmitPachange() {
  const [isOpen, setIsOpen] = useState(false);
  const [resume, setResume] = useState<any>({
    fullname: 'John \'Junior\' Doe',
    title: 'Web Developer',
    contact: {
      email: 'john.doe@example.com',
      phone: '+123 456 7890',
      website: 'www.johndoe.com',
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe',
    },
    summary: 'Passionate and detail-oriented Web Developer with hands-on experience in designing and implementing web applications. Adept at collaborating with cross-functional teams to drive project success.',
    education: [
      {
        degree: 'Computer Science',
        award: 'Bachelor of Science',
        school: 'University XYZ',
        graduationYear: '2020',
        gp: 4.33,
      },
      {
        degree: 'Computer Science',
        award: 'Bachelor of Science',
        school: 'University XYZ',
        graduationYear: '2020',
        gp: 4.33,
      },
      {
        degree: 'Computer Science',
        award: 'Bachelor of Science',
        school: 'University XYZ',
        graduationYear: '2020',
        gp: 4.33,
      },
    ],
    experience: [
      {
        position: 'Frontend Developer',
        company: 'Tech Solutions Inc.',
        startDate: 'June 2020',
        endDate: 'Present',
        responsibilities: [
          'Develop and maintain responsive user interfaces for web applications.',
          'Collaborate with backend developers to integrate user-facing elements with server-side logic.',
          'Optimize application performance and troubleshoot issues.',
        ],
      },
      {
        position: 'Junior Web Developer',
        company: 'CodeCrafters LLC',
        startDate: 'January 2019',
        endDate: 'May 2020',
        responsibilities: [
          'Assisted in the development of new features for client websites.',
          'Collaborated with the design team to implement user-friendly interfaces.',
          'Participated in code reviews and testing processes.',
        ],
      },
      {
        position: 'Junior Web Developer',
        company: 'CodeCrafters LLC',
        startDate: 'January 2019',
        endDate: 'May 2020',
        responsibilities: [
          'Assisted in the development of new features for client websites.',
          'Collaborated with the design team to implement user-friendly interfaces.',
          'Participated in code reviews and testing processes.',
        ],
      },
    ],
    projects: [
      {
        title: 'Used Books mobile app',
        description: 'A platform to sell as well as to buy used books only for PCCoE College due to this reuse of books will be there beneficial for environment also indirectly helps increase communication between juniors and seniors',
        url: 'https://google.com',
        tech: ['Javascript', 'HTML', 'SCSS', 'Browsify']
      },
      {
        title: 'Parking Automation System',
        description: 'A web application which helps you to book your slot for your car just like booking a movie ticket from home.',
        url: 'https://google.com',
        tech: ['Javascript', 'HTML', 'SCSS', 'Browsify']
      },
    ],
    skills: ['React', 'HTML, CSS, Javascript', 'Tailwind CSS', 'Git'],
  })

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <EditorCover>
        <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
          <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <Image src={placeholder} alt="Profile" className="h-32 w-32 rounded-full mx-auto" width={220} height={220} />
          </div>
          <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
            <InlineEdit text={resume?.fullname} onSave={(e) => console.log('CHANGE: ', e)} className="font-poppins font-bold text-heading sm:text-4xl text-2xl" />
            <p className="text-heading">{resume.title}</p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            <div className="flex flex-col sm:w-1/3">
              <div className="py-3 sm:order-none order-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">My Contact</h2>
                <div className="border-2 w-20 border-top-color my-3" />
                <div className="my-1">
                  {resume.contact && Object.keys(resume.contact).map((key, index) => (
                    <div className="flex items-center cursor-pointer mb-2 hover:underline" key={`resume-contact-${index}`}>
                      <a className="w-6 text-gray-700 font-sm">
                        {getIconByType(key)}
                      </a>
                      <div className="ml-2 truncate">{resume.contact[key]}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-3 sm:order-none order-2">
                <h2 className="text-lg font-poppins font-bold text-top-color">Skills</h2>
                <div className="border-2 w-20 border-top-color my-3"></div>
                <div className="my-1">
                  {resume.skills && resume.skills.map((skill: string, index: number) => (
                    <div className="flex items-center cursor-pointer mb-2 hover:underline" key={`resume-contact-${index}`}>
                      <a className="w-6 text-gray-700 font-sm">
                        {getIconByType(skill)}
                      </a>
                      <div className="ml-2 truncate">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-3 sm:order-none order-1">
                <h2 className="text-lg font-poppins font-bold text-top-color">Education Background</h2>
                <div className="border-2 w-20 border-top-color my-3"></div>
                <div className="flex flex-col space-y-1">
                  {resume.education && resume.education.map((education: any, index: number) => (
                    <div className="flex flex-col" key={index}>
                      <p className="font-semibold text-xs text-gray-700">{education?.graduationYear}</p>
                      <p className="text-sm font-medium">
                        <span className="text-green-700">{education?.award} ({education.degree})</span>, {education?.school}
                      </p>
                      <p className="font-bold text-xs text-gray-700 mb-2">Percentage: {education.gp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">About Me</h2>
                <div className="border-2 w-20 border-top-color my-3"></div>
                <p>{resume.summary}</p>
              </div>
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">Professional Experience</h2>
                <div className="border-2 w-20 border-top-color my-3"></div>
                <div className="flex flex-col">
                  {resume.experience && resume.experience.map((experience: any, index: number) => (
                    <div className="flex flex-col mb-6" key={`experience-${index}`}>
                      <p className="text-lg font-bold text-gray-700">{`${experience.company} | ${experience.position}`}</p>
                      <p className="font-semibold text-sm text-green-700 font-mono my-1"> {`${experience.startDate} - ${experience.endDate}`}</p>
                      <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        {experience?.responsibilities.map((responsibility: string, index: number) => (
                          <li key={`responsibility-${index}`}>{responsibility}</li>
                        ))}
                        <li>Deliverying highly efficient solutions</li>
                        <li>Solving critical bugs</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">Projects</h2>
                <div className="border-2 w-20 border-top-color my-3"></div>
                <div className="flex flex-col">
                  {resume?.projects.map((project: any, index: number) => (
                    <div className="flex flex-col mb-4" key={`project-${index}`}>
                      <p className="text-lg font-semibold text-gray-700">{project.title}</p>
                      <p className="text-sm my-2 font-semibold text-green-700 font-mono">{project?.tech.join(', ')}</p>
                      <p className="font-normal text-sm text-gray-700 mb-1 pl-2">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </EditorCover >
      <Modal {...{ isOpen, toggleModal }} />
    </>
  )
}
