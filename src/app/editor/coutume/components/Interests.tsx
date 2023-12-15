import React from 'react';
import { InlineEdit } from '@/components/editor';

interface InterestsProps {
  editable: boolean;
  interests: string[];
  editBlurEvent: (e: any) => void;
  setEditableSectionId: () => void;
  onSave: () => void;
}

export default function Interests({
  editable,
  editBlurEvent,
  setEditableSectionId,
  onSave,
  interests,
}: InterestsProps) {
  return (
    <div className='py-3'>
      <h2 className='font-poppins text-top-color text-lg font-bold'>
        Interests
      </h2>
      <div
        className='my-1'
        onClick={setEditableSectionId}
        onBlur={editBlurEvent}
      >
        {interests.map((interest, index) => {
          return (
            <div className='mb-1 flex items-center' key={`interest-${index}`}>
              <InlineEdit
                text={interest}
                editable={editable}
                className='ml-2'
                dottedActive
                onSave={onSave}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
