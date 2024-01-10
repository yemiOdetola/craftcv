import React, { useState } from 'react';
import { useEditorActions } from '@/utils/useEditorActions';
import { InlineEdit } from '@/components/editor';
import { useResume } from '@/store';
import Heading from './Heading';
import { PiTrashSimpleDuotone } from 'react-icons/pi';

interface EducationProps {
  color1: string;
  editableSection: null | string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
}

export default function Education({
  editableSection,
  color1,
  editBlurEvent,
  setEditableSectionId,
}: EducationProps) {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const { saveWithPath, removeSection } = useEditorActions();
  const resume = useResume();
  const educationhistory = resume.education;

  return (
    <div className='py-3'>
      <Heading id='education'>Education Background</Heading>
      <div className='mb-3'>
        {educationhistory &&
          Object.keys(educationhistory).map((key: any, index: number) => {
            const edu = educationhistory[key];
            return (
              <div
                className='relative mb-2 text-sm'
                key={`resume-education-${index}`}
                onClick={() => setEditableSectionId(key)}
                onBlur={editBlurEvent}
                onMouseEnter={() => setIsHovered(key)}
                onMouseLeave={() => setIsHovered(null)}
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
                  text={edu?.gradyear}
                  editable={editableSection == key}
                  className='text-gray-700'
                  placeholder='Year of Completion'
                  dottedActive
                  onSave={(val) =>
                    saveWithPath(['education', key], {
                      ...edu,
                      gradyear: val,
                    })
                  }
                />
                <InlineEdit
                  text={edu?.award}
                  editable={editableSection == key}
                  className='font-semibold text-green-700'
                  style={{ color: `#${color1}` }}
                  placeholder='Academic Degree (Program)'
                  onSave={(val) =>
                    saveWithPath(['education', key], {
                      ...edu,
                      award: val,
                    })
                  }
                />
                <InlineEdit
                  text={edu?.school}
                  editable={editableSection == key}
                  placeholder='Institution/University Attended'
                  className='font-light'
                  onSave={(val) =>
                    saveWithPath(['education', key], {
                      ...edu,
                      school: val,
                    })
                  }
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
