import React from 'react';
import { InlineEdit } from '@/components/editor';

interface LanguagesProps {
  editable: boolean;
  languages: string[];
  editBlurEvent: (e: any) => void;
  setEditableSectionId: () => void;
  onSave: () => void;
}

export default function Languages({
  editable,
  editBlurEvent,
  setEditableSectionId,
  onSave,
  languages,
}: LanguagesProps) {
  return (
    <div className='py-3'>
      <h2 className='font-poppins text-top-color text-lg font-bold'>
        Languages
      </h2>
      <div
        className='my-1'
        onClick={setEditableSectionId}
        onBlur={editBlurEvent}
      >
        {languages.map((language, index) => {
          return (
            <div className='mb-1 flex items-center' key={`language-${index}`}>
              <InlineEdit
                text={language}
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
