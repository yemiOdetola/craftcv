'use client';
import { EditorCover, InlineEdit } from '@/components/editor';
import {
  useFontFamily,
  useEditorTheme,
  useMainStore,
  useResume,
} from '@/store';
import { odetolaazeez } from '@/store/resume';
import { getFontFamilyStyle, isObjectEmpty } from '@/utils/helper';
import { useEditorActions } from '@/utils/useEditorActions';
import React, { useEffect, useState } from 'react';
import { getIconByType } from '../Icons';
import { PiTrashSimpleDuotone } from 'react-icons/pi';
import Heading from '@/components/editor/sections/Heading';

export default function OdetolaAzeez() {
  const fontFamily = useFontFamily();
  const editorTheme = useEditorTheme();
  const { saveWithPath, removeFromPath } = useEditorActions();
  const [isHovered, setIsHovered] = useState('');
  const { updateResume } = useMainStore();
  const [resume] = useState(useResume());
  const [color1, color2] = editorTheme;
  const [editableSection, setEditableSectionId] = useState<string | null>(null);

  useEffect(() => {
    if (isObjectEmpty(resume)) {
      updateResume(odetolaazeez);
    }
  }, [resume, updateResume]);

  const editBlurEvent = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    // TODO: Check if the related target is null or undefined
    if (e.relatedTarget === null) {
      setEditableSectionId(null);
    }
  };

  const removeSection = (
    key: string,
    type: 'experiences' | 'education' | 'projects'
  ) => {
    if (window.confirm('Are you sure?')) {
      if (type == 'education') {
        removeFromPath(['education', key]);
      }
      if (type == 'experiences') {
        removeFromPath(['experiences', key]);
      }
      if (type == 'projects') {
        removeFromPath(['projects', key]);
      }
    }
  };

  return (
    <EditorCover className={`${getFontFamilyStyle(fontFamily)}`}>
      <main className='w-full'>
        {resume?.user ? (
          <header className='inline-flex w-full items-center justify-center pb-3'>
            <section
              onClick={() => setEditableSectionId(resume?.user?.id)}
              onBlur={(e: any) => editBlurEvent(e)}
            >
              <InlineEdit
                text={resume.user.fullname}
                placeholder='Professional name...'
                editable={resume.user.id == editableSection}
                onSave={(val) => saveWithPath(['user', 'fullname'], val)}
                className='sm: text-center text-2xl font-bold text-gray-800 sm:text-4xl'
                dottedActive
              />
              <ul className='mx-auto flex w-full list-inside flex-wrap justify-center gap-x-2 sm:w-[70%]'>
                {resume?.contact &&
                  Object.keys(resume.contact).map((key, index) => {
                    if (resume?.contact[key] !== 'contact') {
                      const value = resume.contact[key];
                      const link = /^http(s)?:\/\//.test(value)
                        ? value
                        : `https://${value}`;
                      return (
                        <li
                          className='mt-1 flex items-center text-gray-600'
                          key={`resume-contact-${index}`}
                        >
                          <span className='font-sm w-6'>
                            {getIconByType(key)}
                          </span>
                          <InlineEdit
                            text={value}
                            editable={editableSection == resume.user.id}
                            className='inline-block text-sm text-gray-600'
                            dottedActive
                            onSave={(val) =>
                              saveWithPath(['contact', key], val)
                            }
                          />
                          <a
                            className='group ml-1'
                            target='_blank'
                            href={link}
                            rel='noopener noreferrer'
                          >
                            <span className='inline-block text-gray-500'>
                              ↗
                            </span>
                          </a>
                        </li>
                      );
                    }
                  })}
              </ul>
            </section>
          </header>
        ) : null}
        <section className='flex flex-col pt-5 sm:flex-row'>
          <section className='w-full pr-4 sm:w-2/5'>
            <section
              className=' border-b-4 border-gray-300 pb-4 first:mt-0'
              onClick={() => setEditableSectionId(resume?.about?.id)}
              onBlur={(e: any) => editBlurEvent(e)}
            >
              <h2 className='mb-2 text-lg uppercase tracking-widest'>
                Summary
              </h2>
              <InlineEdit
                text={resume && resume?.about?.summary}
                editable={resume && resume?.about?.id == editableSection}
                className='text-sm'
                onSave={(val) => saveWithPath(['about', 'summary'], val)}
              />
            </section>
            <section className='mt-2  border-b-4 border-gray-300 first:mt-0'>
              <Heading
                id='education'
                className='text-lg uppercase tracking-widest'
              >
                Education
              </Heading>
              {resume?.education &&
                Object.keys(resume.education).map((key: any, index: number) => {
                  const edu = resume.education[key];
                  return (
                    <div
                      className='relative mb-2 flex flex-col text-sm'
                      key={`resume-education-${index}`}
                      onClick={() => setEditableSectionId(key)}
                      onBlur={editBlurEvent}
                      onMouseEnter={() => setIsHovered(key)}
                      onMouseLeave={() => setIsHovered('')}
                    >
                      {isHovered == key ? (
                        <button
                          className='absolute right-4 inline-block p-2 opacity-0 transition-opacity duration-200'
                          style={{ opacity: isHovered ? 1 : 0 }}
                          onClick={() => removeSection(key, 'education')}
                        >
                          <PiTrashSimpleDuotone size={20} />
                        </button>
                      ) : null}
                      <InlineEdit
                        text={edu?.school}
                        editable={editableSection == key}
                        placeholder='Institution/University Attended'
                        className='font-semibold leading-snug'
                        onSave={(val) =>
                          saveWithPath(['education', key], {
                            ...edu,
                            school: val,
                          })
                        }
                      />
                      <InlineEdit
                        text={edu?.award}
                        editable={editableSection == key}
                        className='p-0 text-xs leading-normal text-gray-500'
                        placeholder='Academic Degree (Program)'
                        onSave={(val) =>
                          saveWithPath(['education', key], {
                            ...edu,
                            award: val,
                          })
                        }
                      />
                      <InlineEdit
                        text={edu?.gradyear}
                        editable={editableSection == key}
                        className='font-semibold'
                        placeholder='Year of Completion'
                        dottedActive
                        onSave={(val) =>
                          saveWithPath(['education', key], {
                            ...edu,
                            gradyear: val,
                          })
                        }
                      />
                    </div>
                  );
                })}
            </section>
            <section className='mt-2 border-b-4 border-gray-300 pb-2'>
              <Heading
                id='projects'
                className='text-lg uppercase tracking-widest'
              >
                Projects
              </Heading>
              {resume?.projects &&
                Object.keys(resume.projects).map((key: any, index: number) => {
                  const project = resume?.projects[key];
                  return (
                    <div
                      className='relative mb-2 flex flex-col pb-4'
                      key={`project-${index}`}
                      onClick={() => setEditableSectionId(key)}
                      onBlur={editBlurEvent}
                      onMouseEnter={() => setIsHovered(key)}
                      onMouseLeave={() => setIsHovered('')}
                    >
                      {isHovered == key ? (
                        <button
                          className='absolute -right-5 bottom-4 z-10 inline-block rounded bg-red-400 p-1 opacity-0 transition-opacity duration-200'
                          style={{ opacity: isHovered ? 1 : 0 }}
                          onClick={() => removeSection(key, 'projects')}
                        >
                          <PiTrashSimpleDuotone size={20} color='white' />
                        </button>
                      ) : null}
                      <div className='flex flex-wrap items-center justify-between'>
                        <div className='flex items-center gap-x-3'>
                          <InlineEdit
                            text={project.title}
                            className='text-md p-0 font-bold'
                            editable={editableSection == key}
                            dottedActive
                            placeholder='Project title'
                            onSave={(val) =>
                              saveWithPath(['projects', key], {
                                ...project,
                                title: val,
                              })
                            }
                          />
                          <InlineEdit
                            text={project?.tech}
                            editable={editableSection == key}
                            placeholder='Tools/Technologies used'
                            className='font-mono text-xs'
                            onSave={(val) =>
                              saveWithPath(['projects', key], {
                                ...project,
                                tech: val,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className='flex items-center justify-normal'>
                        <InlineEdit
                          text={project.url}
                          className='text-xs'
                          editable={editableSection == key}
                          dottedActive
                          placeholder='Project Url'
                          onSave={(val) =>
                            saveWithPath(['projects', key], {
                              ...project,
                              url: val,
                            })
                          }
                        />
                        {project.url ? (
                          <a
                            href={project.url}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <span className='inline-block p-0.5 text-xs text-gray-500'>
                              ↗
                            </span>
                          </a>
                        ) : null}
                      </div>
                      <InlineEdit
                        text={project.description}
                        placeholder='Description of achievements'
                        editable={editableSection == key}
                        className='mt-1 text-sm'
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
            </section>
            <section className='mt-2 border-b-4 border-gray-300 pb-2'>
              <Heading
                id='technical skills'
                className='text-lg uppercase tracking-widest'
              >
                Skills
              </Heading>
              <section className='mb-0'>
                <section
                  className='mt-1 last:pb-1'
                  onClick={() =>
                    setEditableSectionId(resume['technical skills']?.id)
                  }
                  onBlur={editBlurEvent}
                >
                  <ul className='flex flex-wrap items-center text-sm font-bold leading-relaxed'>
                    {resume['technical skills'] &&
                      resume['technical skills']?.skillset.map(
                        (skill: string, index: number) => {
                          return (
                            <li
                              className=' mb-2 mr-2 h-8 border border-gray-800 p-1.5'
                              key={`resume-skills-${index}`}
                            >
                              <InlineEdit
                                text={skill}
                                editable={
                                  editableSection ==
                                  resume['technical skills']?.id
                                }
                                className='text-sm'
                                placeholder='Add skill'
                                elementPath={[
                                  'technical skills',
                                  'skillset',
                                  index,
                                ]}
                                id={`skillset-${index}`}
                                dottedActive
                                onSave={(val) =>
                                  saveWithPath(
                                    ['technical skills', 'skillset', index],
                                    val
                                  )
                                }
                              />
                            </li>
                          );
                        }
                      )}
                  </ul>
                </section>
              </section>
            </section>
          </section>
          <section className='w-full border-b-4 border-gray-300 pb-2 pl-4 sm:w-3/5'>
            <Heading
              id='experiences'
              className='text-lg uppercase tracking-widest'
            >
              Experiences
            </Heading>
            {resume?.experiences &&
              Object.keys(resume.experiences).map((key: any, index: number) => {
                const exp = resume?.experiences[key];
                return (
                  <div
                    className='relative mb-2 flex flex-col'
                    key={`experience-${index}`}
                    onClick={() => setEditableSectionId(key)}
                    onBlur={editBlurEvent}
                    onMouseEnter={() => setIsHovered(key)}
                    onMouseLeave={() => setIsHovered('')}
                  >
                    {isHovered == key ? (
                      <button
                        className='absolute -right-6 bottom-4 z-10 inline-block rounded bg-red-400 p-1 opacity-0 transition-opacity duration-200'
                        style={{ opacity: isHovered ? 1 : 0 }}
                        onClick={() => removeSection(key, 'experiences')}
                      >
                        <PiTrashSimpleDuotone size={20} color='white' />
                      </button>
                    ) : null}
                    <div className='flex items-baseline justify-between text-lg font-semibold'>
                      <InlineEdit
                        text={exp.company}
                        className='p-0'
                        editable={editableSection == key}
                        dottedActive
                        placeholder='Company'
                        onSave={(val) =>
                          saveWithPath(['experiences', key], {
                            ...exp,
                            company: val,
                          })
                        }
                      />
                      <InlineEdit
                        text={exp.location}
                        className='p-0 text-xs text-gray-500'
                        editable={editableSection == key}
                        dottedActive
                        placeholder='Company'
                        onSave={(val) =>
                          saveWithPath(['experiences', key], {
                            ...exp,
                            location: val,
                          })
                        }
                      />
                    </div>
                    <div className='flex items-center space-x-3'>
                      <InlineEdit
                        text={exp.position}
                        className='p-0 text-sm font-medium'
                        editable={editableSection == key}
                        dottedActive
                        placeholder='Position/Title'
                        onSave={(val) =>
                          saveWithPath(['experiences', key], {
                            ...exp,
                            position: val,
                          })
                        }
                      />
                      <span> | </span>
                      <div className='flex items-center justify-normal gap-x-1 text-xs'>
                        <InlineEdit
                          text={exp.startDate}
                          className='p-0'
                          editable={editableSection == key}
                          dottedActive
                          placeholder='Start date'
                          onSave={(val) =>
                            saveWithPath(['experiences', key], {
                              ...exp,
                              startDate: val,
                            })
                          }
                        />
                        <span> - </span>
                        <InlineEdit
                          text={exp.endDate}
                          className='p-0'
                          editable={editableSection == key}
                          dottedActive
                          placeholder='End date'
                          onSave={(val) =>
                            saveWithPath(['experiences', key], {
                              ...exp,
                              endDate: val,
                            })
                          }
                        />
                      </div>
                    </div>
                    <ul className='list-disc space-y-0.5 pl-4 text-sm'>
                      {exp?.responsibilities &&
                        exp.responsibilities.map(
                          (responsibility: string, index: number) => (
                            <li key={`responsibility-${index}`}>
                              <InlineEdit
                                text={responsibility}
                                editable={editableSection == key}
                                id={`responsibilities-${index}`}
                                placeholder='Task/Responsibility'
                                elementPath={[
                                  'experiences',
                                  key,
                                  'responsibilities',
                                  index,
                                ]}
                                onSave={(val) =>
                                  saveWithPath(
                                    [
                                      'experiences',
                                      key,
                                      'responsibilities',
                                      index,
                                    ],
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
          </section>
        </section>
      </main>
    </EditorCover>
  );
}
