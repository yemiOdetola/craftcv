'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { EditorCover, InlineEdit } from '@/components/editor';
import { Modal } from '@/components/common';
import placeholder from '@/assets/images/placeholder/generator.png';
import { getIconByType } from '../Icons';
import {
  useEditorTheme,
  useFontFamily,
  useResume,
  useMainStore,
} from '@/store';
import { getFontFamilyStyle } from '@/utils/helper';
import LineEdit from '@/components/editor/LineEdit';
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
  const editorTheme = useEditorTheme();
  const { updateResume } = useMainStore();
  const [resume] = useState(useResume());
  const [color1, color2] = editorTheme;
  const [isOpen, setIsOpen] = useState(false);
  const [editableSection, setEditableSectionId] = useState<string | null>(null);
  const sectionKeys = Object.keys(resume);
  interface OnsavePayload {
    section: (typeof sectionKeys)[number];
    fieldId: string;
    value: string | number;
  }

  const renderContactInfo = () => {
    return (
      <div
        className='my-1'
        onClick={() => setEditableSectionId(resume?.contact?.id)}
        onBlur={(e) => editBlurEvent(e)}
      >
        {resume.contact &&
          Object.keys(resume.contact).map((key, index) => {
            if (resume.contact[key] !== 'contact') {
              return (
                <div
                  className='mb-1 flex items-center'
                  key={`resume-contact-${index}`}
                >
                  <span className='font-sm w-6 text-gray-700'>
                    {getIconByType(key)}
                  </span>
                  <InlineEdit
                    text={resume.contact[key]}
                    editable={resume?.contact?.id == editableSection}
                    className='ml-2 truncate'
                    dottedActive
                    onSave={(val) => saveWithPath(['contact', key], val)}
                  />
                </div>
              );
            }
          })}
      </div>
    );
  };

  const renderSkills = () => {
    return (
      <div
        className='my-1'
        onClick={() => setEditableSectionId(resume?.skills?.id)}
        onBlur={(e) => editBlurEvent(e)}
      >
        {resume?.skills?.set.map((skill: string, index: number) => {
          if (skill !== 'skills') {
            return (
              <div
                className='mb-1 flex items-center'
                key={`resume-skills-${index}`}
              >
                <a className='font-sm w-6 text-gray-700'>
                  {getIconByType(skill)}
                </a>
                <InlineEdit
                  text={skill}
                  editable={resume?.skills?.id == editableSection}
                  className='ml-2 truncate'
                  dottedActive
                  onSave={(val) => saveWithPath(['skills', 'set', index], val)}
                />
              </div>
            );
          }
        })}
      </div>
    );
  };

  const renderEducation = () => {
    return (
      <div className='flex flex-col space-y-1'>
        {resume.education &&
          Object.keys(resume.education).map((key: any, index: number) => {
            const education = resume.education[key];
            return (
              <div
                className='flex flex-col'
                key={`resume-education-${index}`}
                onClick={() => setEditableSectionId(education.id)}
                onBlur={(e) => editBlurEvent(e)}
              >
                <InlineEdit
                  text={education?.gradyear}
                  editable={education.id == editableSection}
                  className='text-xs font-semibold text-gray-700'
                  dottedActive
                  onSave={(val) =>
                    saveWithPath(['education', key], {
                      ...education,
                      gradyear: val,
                    })
                  }
                />
                <InlineEdit
                  text={education?.award}
                  editable={education.id == editableSection}
                  className='text-sm font-medium text-green-700'
                  style={{ color: `#${color1}` }}
                  onSave={(val) =>
                    saveWithPath(['education', key], {
                      ...education,
                      award: val,
                    })
                  }
                />
                <InlineEdit
                  text={education?.school}
                  editable={education.id == editableSection}
                  className='text-sm font-medium text-green-700'
                  style={{ color: `#${color1}` }}
                  onSave={(val) =>
                    saveWithPath(['education', key], {
                      ...education,
                      school: val,
                    })
                  }
                />
              </div>
            );
          })}
      </div>
    );
  };

  const renderSummary = () => {
    return (
      <div
        onClick={() => setEditableSectionId(resume?.about?.id)}
        onBlur={(e) => editBlurEvent(e)}
      >
        <InlineEdit
          text={resume?.about?.summary}
          editable={resume?.about?.id == editableSection}
          onSave={(val) => saveWithPath(['about', 'summary'], val)}
        />
      </div>
    );
  };

  const renderExperiences = () => {
    return (
      <div className='flex flex-col'>
        {Object.keys(resume.experiences).map((key: any, index: number) => {
          const experience = resume.experiences[key];
          return (
            <div
              className='mb-6 flex flex-col'
              key={`resume-experience-${index}`}
              onClick={() => setEditableSectionId(experience?.id)}
              onBlur={(e) => editBlurEvent(e)}
            >
              <div className='flex items-center justify-normal'>
                <InlineEdit
                  text={experience.company}
                  className='text-lg font-bold text-gray-700'
                  editable={experience.id == editableSection}
                  dottedActive
                  onSave={(val) =>
                    saveWithPath(['experiences', key], {
                      ...experience,
                      company: val,
                    })
                  }
                />
                <span> | </span>
                <InlineEdit
                  text={experience.position}
                  className='text-lg font-bold text-gray-700'
                  editable={experience.id == editableSection}
                  dottedActive
                  onSave={(val) =>
                    saveWithPath(['experiences', key], {
                      ...experience,
                      position: val,
                    })
                  }
                />
              </div>
              <div className='flex items-center justify-normal'>
                <InlineEdit
                  text={experience.startDate}
                  className='my-1 font-mono text-sm font-semibold text-green-700'
                  editable={experience.id == editableSection}
                  style={{ color: `#${color1}` }}
                  dottedActive
                  onSave={(val) =>
                    saveWithPath(['experiences', key], {
                      ...experience,
                      startDate: val,
                    })
                  }
                />
                <span> - </span>
                <InlineEdit
                  text={experience.endDate}
                  className='my-1 font-mono text-sm font-semibold text-green-700'
                  editable={experience.id == editableSection}
                  style={{ color: `#${color1}` }}
                  dottedActive
                  onSave={(val) =>
                    saveWithPath(['experiences', key], {
                      ...experience,
                      endDate: val,
                    })
                  }
                />
              </div>
              <span className='mb-1 mt-2 text-sm font-semibold text-gray-700'>
                Key Responsibilities
              </span>
              <ul className='list-disc space-y-1 pl-4 text-sm'>
                {experience?.responsibilities.map(
                  (responsibility: string, index: number) => (
                    <li key={`exp-responsibility-${index}`}>
                      {' '}
                      <LineEdit
                        text={responsibility}
                        editable={experience.id == editableSection}
                        id={`responsibility-${index}`}
                        onSave={(val) =>
                          saveWithPath(
                            ['experiences', key, 'responsibilities', index],
                            val
                          )
                        }
                      />
                    </li>
                  )
                )}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };

  const renderProjects = () => {
    return (
      <div className='flex flex-col'>
        {Object.keys(resume.projects).map((key: any, index: number) => {
          const project = resume.projects[key];
          return (
            <div
              className='mb-4 flex flex-col'
              key={`resume-project-${index}`}
              onClick={() => setEditableSectionId(project?.id)}
              onBlur={(e) => editBlurEvent(e)}
            >
              <InlineEdit
                text={project.title}
                editable={project?.id == editableSection}
                className='text-lg font-semibold text-gray-700'
                onSave={(val) =>
                  saveWithPath(['projects', key], { ...project, title: val })
                }
              />
              <InlineEdit
                text={project?.tech}
                editable={project?.id == editableSection}
                style={{ color: `#${color1}` }}
                className='my-2 font-mono text-sm font-semibold text-green-700'
                onSave={(val) =>
                  saveWithPath(['projects', key], { ...project, tech: val })
                }
              />
              <InlineEdit
                text={project.description}
                editable={project?.id == editableSection}
                className='mb-1 pl-2 text-sm font-normal text-gray-700'
                onSave={(val) =>
                  saveWithPath(['projects', key], {
                    ...project,
                    description: val,
                  })
                }
              />
            </div>
          );
        })}
      </div>
    );
  };

  const renderUnderline = () => (
    <div
      className='my-2 h-1 w-20 rounded'
      style={{ backgroundColor: `#${color2}` }}
    />
  );

  const saveWithPath = (pathArray: any, newValue: any) => {
    let cres = { ...resume };
    if (!Array.isArray(pathArray) || pathArray.length === 0) {
      return cres;
    }

    const updateRecursively = (obj: any, path: string[], value: string) => {
      if (path.length === 1) {
        obj[path[0]] = value;
        return;
      }
      if (!obj[path[0]]) {
        obj[path[0]] = {};
      }
      updateRecursively(obj[path[0]], path.slice(1), value);
    };

    updateRecursively(cres, pathArray, newValue);
    updateResume(cres);
  };

  const handleSaveField = (
    section: (typeof sectionKeys)[number],
    fieldId: string,
    value: any
  ) => {
    let cloneResume = { ...resume };
    let currentField = cloneResume[section][fieldId];
    if (typeof currentField == 'string') {
      cloneResume[section][fieldId] = value;
    } else if (typeof value === 'object' && !Array.isArray(currentField)) {
      cloneResume[section][fieldId] = value;
    }
    updateResume(cloneResume);
  };

  const editBlurEvent = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    // Check if the related target is null
    if (e.relatedTarget === null) {
      setEditableSectionId(null);
    }
  };

  return (
    <>
      <EditorCover className={`${getFontFamilyStyle(fontFamily)}`}>
        <div className='bg-top-color flex w-full rounded-t-lg sm:px-2'>
          <div
            className={`left-5 top-10 overflow-hidden p-3 sm:relative sm:rounded-full sm:p-0`}
            style={{ border: `3px solid #${color1}` }}
          >
            <Image
              src={placeholder}
              alt='Profile'
              className='mx-auto h-32 w-32 rounded-full'
              width={280}
              height={280}
            />
          </div>
          <div
            className='mt-10 w-2/3 pl-5 text-start sm:text-center'
            onClick={() => setEditableSectionId(resume?.user?.id)}
            onBlur={(e) => editBlurEvent(e)}
          >
            <InlineEdit
              text={resume?.user?.fullname}
              editable={resume?.user?.id == editableSection}
              onSave={(val) => saveWithPath(['user', 'fullname'], val)}
              className='font-poppins text-heading text-2xl font-bold sm:text-4xl'
              style={{ color: `#${color2}` }}
              dottedActive
            />
            <InlineEdit
              className='text-heading'
              editable={resume?.user?.id == editableSection}
              text={resume?.user?.title}
              onSave={(val) => saveWithPath(['user', 'title'], val)}
              dottedActive
            />
          </div>
        </div>
        <div className='p-5'>
          <div className='flex flex-col sm:mt-10 sm:flex-row'>
            <div className='flex flex-col sm:w-1/3'>
              <div className='order-3 py-3 sm:order-none'>
                <h2 className='font-poppins text-top-color text-lg font-bold'>
                  My Contact
                </h2>
                {renderUnderline()}
                {renderContactInfo()}
              </div>
              <div className='order-2 py-3 sm:order-none'>
                <h2 className='font-poppins text-top-color text-lg font-bold'>
                  Skills
                </h2>
                {renderUnderline()}
                {renderSkills()}
              </div>
              <div className='order-1 py-3 sm:order-none'>
                <h2 className='font-poppins text-top-color text-lg font-bold'>
                  Education Background
                </h2>
                {renderUnderline()}
                {renderEducation()}
              </div>
            </div>
            <div className='order-first flex flex-col sm:order-none sm:-mt-10 sm:w-2/3'>
              <div className='py-3'>
                <h2 className='font-poppins text-top-color text-lg font-bold'>
                  About Me
                </h2>
                {renderUnderline()}
                {renderSummary()}
              </div>
              <div className='py-3'>
                <h2 className='font-poppins text-top-color text-lg font-bold'>
                  Professional Experience
                </h2>
                {renderUnderline()}
                {renderExperiences()}
              </div>
              <div className='py-3'>
                <h2 className='font-poppins text-top-color text-lg font-bold'>
                  Projects
                </h2>
                {renderUnderline()}
                {renderProjects()}
              </div>
            </div>
          </div>
        </div>
      </EditorCover>
    </>
  );
}
