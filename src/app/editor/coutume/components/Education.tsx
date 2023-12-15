import React from 'react';
import { useEditorActions } from '@/utils/useEditorActions';
import { InlineEdit } from '@/components/editor';

interface EducationProps {
  educationhistory: any;
  color1: string;
  editableSection: null | string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
}

export default function Education({
  educationhistory,
  editableSection,
  color1,
  editBlurEvent,
  setEditableSectionId,
}: EducationProps) {
  const { saveWithPath } = useEditorActions();
  return (
    <div className='py-3'>
      <h2 className='font-poppins text-top-color text-lg font-bold'>
        Education History
      </h2>
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
