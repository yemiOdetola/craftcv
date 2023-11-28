'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { EditorCover, InlineEdit } from '@/components/editor'
import { Modal } from '@/components/common'
import placeholder from '@/assets/images/placeholder/generator.png'
import { getIconByType } from '../Icons'
import { useFontFamily } from '@/store'
import { getFontFamilyStyle } from '@/utils/helper'
interface Experience {
  id: string;
  title: string;
  achievements: string;
  duration: string;
}

interface Resume {
  experiences: Experience[];
}

export default function AmitPachange() {
  const fontFamily = useFontFamily();
  const [isOpen, setIsOpen] = useState(false);
  const [editableSection, setEditableSectionId] = useState<string | null>(null);
  const [resume, setResume] = useState<any>({
    user: {
      id: 'user',
      fullname: 'John \'Junior\' Doe',
      title: 'Web Developer',
    },
    about: {
      id: 'about',
      title: 'About me',
      summary: 'Passionate and detail-oriented Web Developer with hands-on experience in designing and implementing web applications. Adept at collaborating with cross-functional teams to drive project success.',
    },
    contact: {
      id: 'contact',
      email: 'john.doe@example.com',
      phone: '+123 456 7890',
      website: 'www.johndoe.com',
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe',
    },
    education: [
      {
        id: 'education-1',
        degree: 'Computer Science',
        award: 'Bachelor of Science',
        school: 'University XYZ',
        graduationYear: '2020',
        gp: 4.33,
      },
      {
        id: 'education-2',
        degree: 'Computer Science',
        award: 'Bachelor of Science',
        school: 'University XYZ',
        graduationYear: '2020',
        gp: 4.33,
      },
      {
        id: 'education-3',
        degree: 'Computer Science',
        award: 'Bachelor of Science',
        school: 'University XYZ',
        graduationYear: '2020',
        gp: 4.33,
      },
    ],
    experiences: [
      {
        id: 'experience-0',
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
        id: 'experience-1',
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
        id: 'experience-2',
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
        id: 'project-1',
        title: 'Used Books mobile app',
        description: 'A platform to sell as well as to buy used books only for PCCoE College due to this reuse of books will be there beneficial for environment also indirectly helps increase communication between juniors and seniors',
        url: 'https://google.com',
        tech: ['Javascript', 'HTML', 'SCSS', 'Browsify']
      },
      {
        id: 'project-2',
        title: 'Parking Automation System',
        description: 'A web application which helps you to book your slot for your car just like booking a movie ticket from home.',
        url: 'https://google.com',
        tech: ['Javascript', 'HTML', 'SCSS', 'Browsify']
      },
    ],
    skills: {
      id: 'skills',
      set: ['React', 'HTML, CSS, Javascript', 'Tailwind CSS', 'Git']
    },
  })

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const renderInlineEdit = (text: string, className: string, editable: boolean) => {
    return (
      <InlineEdit
        {...{ text, editable, className }}
        onSave={(e) => console.log('CHANGE: ', e)}
      />
    );
  }

  const renderContactInfo = () => {
    return (
      <div className="my-1"
        onClick={() => setEditableSectionId(resume?.contact?.id)}
        onBlur={(e) => editBlurEvent(e)}>
        {resume.contact && Object.keys(resume.contact).map((key, index) => {
          if (resume.contact[key] !== 'contact') {
            return (
              <div className="flex items-center mb-1" key={`resume-contact-${index}`}>
                <span className="w-6 text-gray-700 font-sm">{getIconByType(key)}</span>
                {renderInlineEdit(resume.contact[key], 'ml-2 truncate', resume?.contact?.id == editableSection)}
              </div>
            );
          }
        })}
      </div>
    );
  };

  const renderSkills = () => {
    return (
      <div className="my-1"
        onClick={() => setEditableSectionId(resume?.skills?.id)}
        onBlur={(e) => editBlurEvent(e)}>
        {resume?.skills?.set.map((skill: string, index: number) => {
          if (skill !== 'skills') {
            return (
              <div className="flex items-center mb-1" key={`resume-skills-${index}`}>
                <a className="w-6 text-gray-700 font-sm">{getIconByType(skill)}</a>
                {renderInlineEdit(skill, 'ml-2 truncate', resume?.skills?.id == editableSection)}
              </div>
            );
          }
        })}
      </div>
    );
  };

  const renderEducation = () => {
    return (
      <div className="flex flex-col space-y-1">
        {resume.education && resume.education.map((education: any, index: number) => (
          <div className="flex flex-col" key={`resume-education-${index}`}
            onClick={() => setEditableSectionId(education.id)}
            onBlur={(e) => editBlurEvent(e)}>
            {renderInlineEdit(education?.graduationYear, 'font-semibold text-xs text-gray-700',
              education.id == editableSection)}
            {renderInlineEdit(`${education?.award}(${education.degree}), ${education?.school}`, 'text-sm font-medium text-green-700',
              education.id == editableSection)}
            {renderInlineEdit(`Percentage: ${education.gp}`, 'font-bold text-xs text-gray-700 mb-2',
              education.id == editableSection)}
          </div>
        ))}
      </div>
    );
  };

  const renderSummary = () => {
    return (
      <div className="py-3"
        onClick={() => setEditableSectionId(resume?.about?.id)}
        onBlur={(e) => editBlurEvent(e)}>
        <h2 className="text-lg font-poppins font-bold text-top-color">About Me</h2>
        <div className="border-2 w-20 border-top-color my-3"></div>
        {renderInlineEdit(resume?.about?.summary, '', resume?.about?.id == editableSection)}
      </div>
    );
  };

  const renderExperiences = () => {
    return (
      <div className="flex flex-col">
        {resume?.experiences.map((experience: any, index: number) => (
          <div className="flex flex-col mb-6" key={`resume-experience-${index}`}
            onClick={() => setEditableSectionId(experience?.id)}
            onBlur={(e) => editBlurEvent(e)}>
            {renderInlineEdit(`${experience.company} | ${experience.position}`, 'text-lg font-bold text-gray-700',
              experience?.id == editableSection)}
            {renderInlineEdit(`${experience.startDate} - ${experience.endDate}`, 'font-semibold text-sm text-green-700 font-mono my-1',
              experience?.id == editableSection)}
            <span className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</span>
            <ul className="text-sm list-disc pl-4 space-y-1">
              {experience?.responsibilities.map((responsibility: string, index: number) => (
                <li key={`proj-responsibility-${index}`}> {renderInlineEdit(responsibility, '', experience?.id == editableSection)}</li>
              ))}
              <li>Deliverying highly efficient solutions</li>
              <li>Solving critical bugs</li>
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderProject = () => {
    return (
      <div className="flex flex-col">
        {resume?.projects.map((project: any, index: number) => (
          <div className="flex flex-col mb-4" key={`resume-project-${index}`}
            onClick={() => setEditableSectionId(project?.id)}
            onBlur={(e) => editBlurEvent(e)}>
            {renderInlineEdit(project.title, 'text-lg font-semibold text-gray-700', project?.id == editableSection)}
            {renderInlineEdit(project?.tech.join(', '), 'text-sm my-2 font-semibold text-green-700 font-mono', project?.id == editableSection)}
            {renderInlineEdit(project.description, 'font-normal text-sm text-gray-700 mb-1 pl-2', project?.id == editableSection)}
          </div>
        ))}
      </div>
    );
  };

  const handleSaveField = (section: any, fieldId: string, updatedValue: string | number) => {
    setResume((prevResume: any) => ({
      ...prevResume,
      [section]: prevResume[section].map((field: any) => {
        // if (field.id === fieldId) {
        //   field = { ...field, value: updatedValue }
        // } else {
        //   return
        // }
        field.id === fieldId ? { ...field, value: updatedValue } : field
      }),
    }));
  };

  const editBlurEvent = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    // Check if the related target is null
    if (e.relatedTarget === null) {
      setEditableSectionId(null);
    }
  }

  return (
    <>
      <EditorCover className={`${getFontFamilyStyle(fontFamily)}`}>
        <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
          <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <Image src={placeholder} alt="Profile" className="h-32 w-32 rounded-full mx-auto" width={280} height={280} />
          </div>
          <div className="w-2/3 sm:text-center pl-5 mt-10 text-start"
            onClick={() => setEditableSectionId(resume?.user?.id)}
            onBlur={(e) => editBlurEvent(e)}>
            <InlineEdit
              text={resume?.user?.fullname}
              editable={resume?.user?.id == editableSection}
              onSave={(e) => console.log('CHANGE: ', e)}
              className="font-poppins font-bold text-heading sm:text-4xl text-2xl"
            />
            <InlineEdit className="text-heading" editable={resume?.user?.id == editableSection} text={resume?.user?.title} onSave={(e) => console.log('CHANGE: ', e)} />
          </div>
        </div>
        <div className="p-5">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            <div className="flex flex-col sm:w-1/3">
              <div className="py-3 sm:order-none order-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">My Contact</h2>
                <div className="border-2 w-20 border-top-color my-3" />
                {renderContactInfo()}
              </div>
              <div className="py-3 sm:order-none order-2">
                <h2 className="text-lg font-poppins font-bold text-top-color">Skills</h2>
                <div className="border-2 w-20 border-top-color my-3"></div>
                {renderSkills()}
              </div>
              <div className="py-3 sm:order-none order-1">
                <h2 className="text-lg font-poppins font-bold text-top-color">Education Background</h2>
                <div className="border-2 w-20 border-top-color my-3"></div>
                {renderEducation()}
              </div>
            </div>
            <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
              {renderSummary()}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">Professional Experience</h2>
                <div className="border-2 w-20 border-top-color my-3"></div>
                {renderExperiences()}
              </div>
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">Projects</h2>
                <div className="border-2 w-20 border-top-color my-3"></div>
                {renderProject()}
              </div>
            </div>
          </div>
        </div>
      </EditorCover >
      <Modal {...{ isOpen, toggleModal }} />
    </>
  )
}
