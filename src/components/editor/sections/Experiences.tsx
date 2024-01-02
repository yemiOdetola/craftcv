import React, { useState } from 'react';
import { InlineEdit } from '@/components/editor';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';
import Heading from './Heading';
import { PiTrashSimpleDuotone } from 'react-icons/pi';

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
  const [isHovered, setIsHovered] = useState(null);
  const { saveWithPath, removeFromPath } = useEditorActions();
  const resume = useResume();
  const experiences = resume.experiences;

  const removeSection = (key: string) => {
    removeFromPath(['experiences', key]);
  };

  return (
    <div className='py-3'>
      <Heading id='experiences'>Experiences</Heading>
      {experiences &&
        Object.keys(experiences).map((key: any, index: number) => {
          const exp = experiences[key];
          return (
            <div
              className='relative mb-4 text-sm'
              key={`experience-${index}`}
              onClick={() => setEditableSectionId(key)}
              onBlur={editBlurEvent}
              onMouseEnter={() => setIsHovered(key)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {isHovered == key ? (
                <button
                  className='absolute right-4 inline-block p-2 opacity-0 transition-opacity duration-200'
                  style={{ opacity: isHovered ? 1 : 0 }}
                  onClick={() => removeSection(key)}
                >
                  <PiTrashSimpleDuotone size={20} />
                </button>
              ) : null}
              <div className='-my-0.5 flex items-center space-x-2 justify-normal font-semibold'>
                <InlineEdit
                  text={exp.company}
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
                <span> | </span>
                <InlineEdit
                  text={exp.position}
                  editable={editableSection == key}
                  dottedActive
                  className='text-xs'
                  placeholder='Position/Title'
                  onSave={(val) =>
                    saveWithPath(['experiences', key], {
                      ...exp,
                      position: val,
                    })
                  }
                />
              </div>
              <div className='my-1 flex items-center space-x-4 justify-normal font-semibold font-mono text-xs text-green-700'>
                <InlineEdit
                  text={exp.startDate}
                  editable={editableSection == key}
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
                  editable={editableSection == key}
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
              <span className='my-1 font-semibold'>Key Responsibilities</span>
              <ul className='mb-1 list-disc pl-4'>
                {exp?.responsibilities.map(
                  (responsibility: string, index: number) => (
                    <li key={`responsibility-${index}`}>
                      {' '}
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
}
