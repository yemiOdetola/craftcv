import React from 'react';
import { InlineEdit } from '@/components/editor';
import { useResume } from '@/store';
import { useEditorActions } from '@/utils/useEditorActions';
import Heading from './Heading';

interface InterestsProps {
  editableSection: null | string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
}

export default function Interests({
  editableSection,
  editBlurEvent,
  setEditableSectionId,
}: InterestsProps) {
  const { saveWithPath } = useEditorActions();
  const resume = useResume();
  const interests: string[] = resume.interests;
  return (
    <div className='py-3'>
      <Heading id='interests'>Interests</Heading>
      <div
        className='my-1'
        onClick={() => setEditableSectionId('interests')}
        onBlur={editBlurEvent}
      >
        {interests &&
          interests.map((interest, index) => {
            return (
              <div
                className='flex items-center space-y-1.5'
                key={`interest-${index}`}
              >
                <InlineEdit
                  text={interest}
                  editable={editableSection == 'interests'}
                  className='ml-2 text-xs'
                  dottedActive
                  placeholder='Add interest'
                  elementPath={['interests', index]}
                  id={`interests-${index}`}
                  onSave={(val) => saveWithPath(['interests', index], val)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
