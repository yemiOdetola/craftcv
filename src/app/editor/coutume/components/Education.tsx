import React from 'react';
import { useEditorActions } from '@/utils/useEditorActions';
import { InlineEdit } from '@/components/editor';
import { useResume } from '@/store';
import Heading from './Heading';

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
  const { saveWithPath } = useEditorActions();
  const resume = useResume();
  const educationhistory = resume.education;
  return (
    <div className='py-3'>
      <Heading>Education History</Heading>
      <div className='flex flex-col space-y-1'>
        {educationhistory &&
          Object.keys(educationhistory).map((key: any, index: number) => {
            const edu = educationhistory[key];
            return (
              <div
                className='flex flex-col'
                key={`resume-education-${index}`}
                onClick={() => setEditableSectionId(edu.id)}
                onBlur={editBlurEvent}
              >
                <InlineEdit
                  text={edu?.gradyear}
                  editable={editableSection == edu.id}
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
                  editable={editableSection == edu.id}
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
                  editable={editableSection == edu.id}
                  placeholder='Institution/University Attended'
                  className='text-sm font-medium text-green-700'
                  style={{ color: `#${color1}` }}
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
