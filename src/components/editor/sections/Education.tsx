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
  const { saveWithPath, removeFromPath } = useEditorActions();
  const resume = useResume();
  const educationhistory = resume.education;
  const removeSection = (key: string) => {
    removeFromPath(['education', key]);
  };

  return (
    <div className='py-3'>
      <Heading id='education'>Education Background</Heading>
      <div className='flex flex-col space-y-1'>
        {educationhistory &&
          Object.keys(educationhistory).map((key: any, index: number) => {
            const edu = educationhistory[key];
            return (
              <div
                className='relative mb-6 flex flex-col'
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
                    onClick={() => removeSection(key)}
                  >
                    <PiTrashSimpleDuotone size={20} />
                  </button>
                ) : null}
                <InlineEdit
                  text={edu?.gradyear}
                  editable={editableSection == key}
                  className='text-xs font-semibold text-gray-700'
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
                  className='text-sm font-medium text-green-700'
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
                  className='text-sm font-medium'
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
