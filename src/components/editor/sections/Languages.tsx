import React from 'react';
import { InlineEdit } from '@/components/editor';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';
import Heading from './Heading';

interface LanguagesProps {
  editableSection: null | string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
}

export default function Languages({
  editableSection,
  editBlurEvent,
  setEditableSectionId,
}: LanguagesProps) {
  const { saveWithPath } = useEditorActions();
  const resume = useResume();
  const languages: string[] = resume.languages;
  return (
    <div className='py-3'>
      <Heading id='languages'>Languages</Heading>
      <div
        className='my-1'
        onClick={() => setEditableSectionId('languages')}
        onBlur={editBlurEvent}
      >
        {languages &&
          languages.map((language, index) => {
            return (
              <div
                className='flex items-center space-y-1.5'
                key={`language-${index}`}
              >
                <InlineEdit
                  text={language}
                  editable={editableSection == 'languages'}
                  className='text-xs'
                  placeholder='Add language...'
                  dottedActive
                  elementPath={['languages', index]}
                  id={`languages-${index}`}
                  onSave={(val) => saveWithPath(['languages', index], val)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
