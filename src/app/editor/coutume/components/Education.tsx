import React from 'react';
import { InlineEdit } from '@/components/editor';
import { getIconByType } from '../../Icons';

interface EducationProps {
  education: any;
  color1: string;
  editable: boolean;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: () => void;
  onSave: () => void;
}

export default function Education({
  education,
  editable,
  color1,
  editBlurEvent,
  setEditableSectionId,
  onSave,
}: EducationProps) {
  return (
    <div className='flex flex-col space-y-1'>
      {education &&
        Object.keys(education).map((key: any, index: number) => {
          const edu = education[key];
          return (
            <div
              className='flex flex-col'
              key={`resume-education-${index}`}
              onClick={setEditableSectionId}
              onBlur={editBlurEvent}
            >
              <InlineEdit
                text={education?.gradyear}
                editable={editable}
                className='text-xs font-semibold text-gray-700'
                dottedActive
                onSave={onSave}
              />
              <InlineEdit
                text={education?.award}
                editable={editable}
                className='text-sm font-medium text-green-700'
                style={{ color: `#${color1}` }}
                onSave={onSave}
              />
              <InlineEdit
                text={education?.school}
                editable={editable}
                className='text-sm font-medium text-green-700'
                style={{ color: `#${color1}` }}
                onSave={onSave}
              />
            </div>
          );
        })}
    </div>
  );
}
