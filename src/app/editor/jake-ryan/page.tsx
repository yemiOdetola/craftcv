'use client';
import { EditorCover, InlineEdit } from '@/components/editor';
import {
  useFontFamily,
  useEditorTheme,
  useMainStore,
  useResume,
} from '@/store';
import { jakeryan } from '@/store/resume';
import { getFontFamilyStyle, isObjectEmpty } from '@/utils/helper';
import { useEditorActions } from '@/utils/useEditorActions';
import React, { useEffect, useState } from 'react';
import { PiTrashSimpleDuotone } from 'react-icons/pi';

export default function JakeRyan() {
  const fontFamily = useFontFamily();
  const editorTheme = useEditorTheme();
  const { saveWithPath, removeFromPath } = useEditorActions();
  const [isHovered, setIsHovered] = useState('');
  const { updateResume } = useMainStore();
  const [resume] = useState(useResume());
  const [color1, color2] = editorTheme;
  const [editableSection, setEditableSectionId] = useState<string | null>(null);
  const secprops = {
    color1,
    color2,
    editableSection,
    setEditableSectionId,
    editBlurEvent: (e: React.FocusEvent<HTMLDivElement, Element>) =>
      editBlurEvent(e),
  };

  useEffect(() => {
    if (isObjectEmpty(resume)) {
      updateResume(jakeryan);
    }
  }, [resume, updateResume]);

  const editBlurEvent = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    // TODO: Check if the related target is null or undefined
    if (e.relatedTarget === null) {
      setEditableSectionId(null);
    }
  };

  const removeEduSection = (key: string) => {
    removeFromPath(['education', key]);
  };

  const removeExpSection = (key: string) => {
    removeFromPath(['experiences', key]);
  };

  return (
    <EditorCover className={`${getFontFamilyStyle(fontFamily)}`}>
      <main className='is-printable mx-auto my-auto p-2'>
        {resume?.user ? (
          <header className='inline-flex w-full items-center justify-center pb-3'>
            <section
              onClick={() => setEditableSectionId(resume?.user?.id)}
              onBlur={(e: any) => editBlurEvent(e)}
            >
              <InlineEdit
                text={resume.user.fullname}
                editable={resume.user.id == editableSection}
                onSave={(val) => saveWithPath(['user', 'fullname'], val)}
                className='text-center text-2xl font-bold text-gray-800'
                dottedActive
              />
              <ul className='mx-auto flex w-full list-inside flex-wrap gap-x-1 lg:w-full'>
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
                          <InlineEdit
                            text={value}
                            editable={editableSection == resume?.contact?.id}
                            className='inline-block text-xs text-gray-700 underline underline-offset-2'
                            dottedActive
                            onSave={(val) =>
                              saveWithPath(['contact', key], val)
                            }
                          />
                          <a
                            className='group ml-0.5'
                            target='_blank'
                            href={link}
                            rel='noopener noreferrer'
                          >
                            <span className='inline-block text-sm text-gray-500'>
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

        <section className='mt-2 w-full break-inside-avoid'>
          <h2 className='mb-2 border-b border-gray-700 text-lg font-bold tracking-widest text-gray-700 print:font-normal'>
            EDUCATION
          </h2>
          {resume?.education &&
            Object.keys(resume.education).map((key: any, index: number) => {
              const edu = resume.education[key];
              return (
                <div
                  className='relative mb-1'
                  key={`resume-education-${index}`}
                  onClick={() => setEditableSectionId(key)}
                  onBlur={editBlurEvent}
                  onMouseEnter={() => setIsHovered(key)}
                  onMouseLeave={() => setIsHovered('')}
                >
                  {isHovered == key ? (
                    <button
                      className='absolute -right-8 z-10 inline-block rounded bg-red-400 p-1 opacity-0 transition-opacity duration-200'
                      style={{ opacity: isHovered ? 1 : 0 }}
                      onClick={() => removeEduSection(key)}
                    >
                      <PiTrashSimpleDuotone size={20} color='white' />
                    </button>
                  ) : null}
                  <div className='-mb-1 flex w-full flex-wrap items-center justify-between'>
                    <InlineEdit
                      text={edu?.school}
                      editable={editableSection == key}
                      placeholder='Institution/University Attended'
                      className='font-semibold leading-snug text-gray-800'
                      onSave={(val) =>
                        saveWithPath(['education', key], {
                          ...edu,
                          school: val,
                        })
                      }
                    />
                    <InlineEdit
                      text={edu?.location || 'Location, Exact.'}
                      editable={editableSection == key}
                      placeholder='Institution location'
                      className='leading-snug text-gray-800'
                      onSave={(val) =>
                        saveWithPath(['education', key], {
                          ...edu,
                          location: val,
                        })
                      }
                    />
                  </div>
                  <div className='flex w-full flex-wrap items-center justify-between'>
                    <InlineEdit
                      text={edu?.award}
                      editable={editableSection == key}
                      className='text-xs italic leading-normal text-gray-600'
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
                      className='text-xs italic text-gray-600'
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
                </div>
              );
            })}
        </section>
        <section className='w-full break-inside-avoid pb-2 first:mt-0'>
          <h2 className='mb-2 border-b border-gray-700 text-lg font-bold tracking-widest text-gray-700 print:font-normal'>
            EXPERIENCE
          </h2>
          {resume?.experiences &&
            Object.keys(resume.experiences).map((key: any, index: number) => {
              const exp = resume?.experiences[key];
              return (
                <div
                  className='relative mb-2 flex break-inside-avoid flex-col pb-4'
                  key={`experience-${index}`}
                  onClick={() => setEditableSectionId(key)}
                  onBlur={editBlurEvent}
                  onMouseEnter={() => setIsHovered(key)}
                  onMouseLeave={() => setIsHovered('')}
                >
                  {isHovered == key ? (
                    <button
                      className='absolute -right-4 z-10 inline-block rounded bg-red-400 p-1 opacity-0 transition-opacity duration-200'
                      style={{ opacity: isHovered ? 1 : 0 }}
                      onClick={() => removeExpSection(key)}
                    >
                      <PiTrashSimpleDuotone size={20} color='white' />
                    </button>
                  ) : null}
                  <div className='flex flex-wrap items-center justify-between'>
                    <InlineEdit
                      text={exp.position}
                      className='text-md p-0 font-bold text-gray-800'
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
                    <div className='flex items-center justify-normal gap-x-2'>
                      <InlineEdit
                        text={exp.startDate}
                        className='p-0 text-sm italic leading-normal text-gray-800'
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
                        className='p-0 text-sm leading-normal text-gray-500'
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
                  <div className='flex flex-wrap items-center justify-between'>
                    <InlineEdit
                      text={exp.company}
                      className='p-0 text-xs italic leading-snug text-gray-700'
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
                      className='p-0 text-xs italic leading-snug text-gray-700'
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
                  <ul className='list-disc space-y-1 pl-4 text-sm'>
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
        <section className='w-full break-inside-avoid pb-2 first:mt-0'>
          <h2 className='mb-2 border-b border-gray-700 text-lg font-bold tracking-widest text-gray-700 print:font-normal'>
            Projects
          </h2>
          {resume?.projects &&
            Object.keys(resume.projects).map((key: any, index: number) => {
              const project = resume?.projects[key];
              return (
                <div
                  className='relative mb-2 flex break-inside-avoid flex-col pb-4'
                  key={`experience-${index}`}
                  onClick={() => setEditableSectionId(key)}
                  onBlur={editBlurEvent}
                  onMouseEnter={() => setIsHovered(key)}
                  onMouseLeave={() => setIsHovered('')}
                >
                  {isHovered == key ? (
                    <button
                      className='absolute -right-4 z-10 inline-block rounded bg-red-400 p-1 opacity-0 transition-opacity duration-200'
                      style={{ opacity: isHovered ? 1 : 0 }}
                      onClick={() => removeExpSection(key)}
                    >
                      <PiTrashSimpleDuotone size={20} color='white' />
                    </button>
                  ) : null}
                  <div className='flex flex-wrap items-center justify-between'>
                    <div className='flex items-center gap-x-3'>
                      <InlineEdit
                        text={project.title}
                        className='text-md p-0 font-bold text-gray-800'
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
                        className='font-mono text-xs italic'
                        onSave={(val) =>
                          saveWithPath(['projects', key], {
                            ...project,
                            tech: val,
                          })
                        }
                      />
                    </div>
                    <div className='flex items-center justify-normal gap-x-2'>
                      <a
                        href={project.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <InlineEdit
                          text={project.url}
                          className='text-xs italic leading-normal text-gray-800'
                          editable={editableSection == key}
                          dottedActive
                          placeholder='Start date'
                          onSave={(val) =>
                            saveWithPath(['experiences', key], {
                              ...project,
                              url: val,
                            })
                          }
                        />
                      </a>
                    </div>
                  </div>
                  <InlineEdit
                    text={project.description}
                    placeholder='Description of achievements'
                    editable={editableSection == key}
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
        </section>
        <section className='mb-4 mt-0 break-inside-avoid pb-6 first:mt-0'>
          <h2 className='mb-2 border-b border-gray-700 text-lg font-bold tracking-widest text-gray-700 print:font-normal'>
            SKILLS
          </h2>
          <section className='mb-0 break-inside-avoid'>
            <section
              className='mt-1 last:pb-1'
              onClick={() =>
                setEditableSectionId(resume['technical skills']?.id)
              }
              onBlur={editBlurEvent}
            >
              <ul className='text-md -mb-1 -mr-1.5 flex flex-wrap font-bold leading-relaxed'>
                {resume['technical skills'] &&
                  resume['technical skills']?.skillset.map(
                    (skill: string, index: number) => {
                      return (
                        <li
                          className='print:border-inset mb-1 mr-1.5 bg-gray-800 p-1.5 leading-relaxed text-white print:bg-white'
                          key={`resume-skills-${index}`}
                        >
                          <InlineEdit
                            text={skill}
                            editable={
                              editableSection == resume['technical skills']?.id
                            }
                            className='text-sm'
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
      </main>
    </EditorCover>
  );
}
