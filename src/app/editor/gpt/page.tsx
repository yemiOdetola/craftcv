'use client'

import { MdEmail, MdFiberSmartRecord } from "react-icons/md";

const Resume = () => {

  const getIcon = (title: string) => {

  }


  const dummyData = {
    name: 'John Doe',
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
        degree: 'Bachelor of Science in Computer Science',
        school: 'University XYZ',
        graduationYear: '2020',
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
    ],
    skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'Responsive Design'],
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-md">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">{dummyData.name}</h1>
          <p className="text-gray-600">{dummyData.title}</p>
        </div>

        {/* Contact Information */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <ul className="list-none">
            <li>Email: {dummyData.contact.email}</li>
            <li>Phone: {dummyData.contact.phone}</li>
            <li>Website: {dummyData.contact.website}</li>
            <li>LinkedIn: {dummyData.contact.linkedin}</li>
            <li>GitHub: {dummyData.contact.github}</li>
          </ul>
        </div>

        {/* Summary */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p>{dummyData.summary}</p>
        </div>

        {/* Education */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          {dummyData.education.map((edu, index) => (
            <div key={index}>
              <p className="font-semibold">{edu.degree}</p>
              <p>{edu.school} - {edu.graduationYear}</p>
            </div>
          ))}
        </div>

        {/* Work Experience */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
          {dummyData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{exp.position}</p>
              <p className="text-gray-600">{exp.company} - {exp.startDate} to {exp.endDate}</p>
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="flex flex-wrap">
            {dummyData.skills.map((skill, index) => (
              <li key={index} className="bg-gray-300 rounded-full px-3 py-1 mr-2 mb-2">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
