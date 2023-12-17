import React from 'react';
import { InlineEdit } from '@/components/editor';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';
import Heading from './Heading';

interface ExperiencesProps {
  editableSection: null | string;
  color1: string;
  color2: string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
  // onSave: () => void;
}

export default function Experiences({
  editableSection,
  editBlurEvent,
  setEditableSectionId,
  color1,
}: ExperiencesProps) {
  const { saveWithPath } = useEditorActions();
  const resume = useResume();
  const experiences = resume.experiences;
  return (
    <div className='py-3'>
      <Heading id='experiences'>Experiences</Heading>
      <div className='flex flex-col'>
        {experiences &&
          Object.keys(experiences).map((key: any, index: number) => {
            const exp = experiences[key];
            return (
              <div
                className='mb-6 flex flex-col'
                key={`experience-${index}`}
                onClick={() => setEditableSectionId(exp.id)}
                onBlur={editBlurEvent}
              >
                <div className='flex items-center justify-normal'>
                  <InlineEdit
                    text={exp.company}
                    className='text-md font-bold text-gray-700'
                    editable={editableSection == exp.id}
                    dottedActive
                    placeholder='Company'
                    onSave={(val) =>
                      saveWithPath(['experiences', key], {
                        ...exp,
                        company: val,
                      })
                    }
                  />
                  <span> | </span>
                  <InlineEdit
                    text={exp.position}
                    className='text-md font-bold text-gray-700'
                    editable={editableSection == exp.id}
                    dottedActive
                    placeholder='Position/Title'
                    onSave={(val) =>
                      saveWithPath(['experiences', key], {
                        ...exp,
                        position: val,
                      })
                    }
                  />
                </div>
                <div className='flex items-center justify-normal'>
                  <InlineEdit
                    text={exp.startDate}
                    className='my-1 font-mono text-sm font-semibold text-green-700'
                    editable={editableSection == exp.id}
                    style={{ color: `#${color1}` }}
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
                    className='my-1 font-mono text-sm font-semibold text-green-700'
                    editable={editableSection == exp.id}
                    style={{ color: `#${color1}` }}
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
                <span className='mb-1 mt-2 text-sm font-semibold text-gray-700'>
                  Key Responsibilities
                </span>
                <ul className='list-disc space-y-1 pl-4 text-sm'>
                  {exp?.responsibilities.map(
                    (responsibility: string, index: number) => (
                      <li key={`responsibility-${index}`}>
                        {' '}
                        <InlineEdit
                          text={responsibility}
                          editable={editableSection == exp.id}
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
    </div>
  );
}
