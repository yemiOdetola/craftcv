import React from 'react';
import { InlineEdit } from '@/components/editor';
import { getIconByType } from '../../Icons';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';
import Heading from './Heading';

interface SoftSkillsProps {
  editableSection: null | string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
}

export default function SoftSkills({
  editableSection,
  editBlurEvent,
  setEditableSectionId,
}: SoftSkillsProps) {
  const { saveWithPath } = useEditorActions();
  const resume = useResume();
  const softSkills = resume['soft skills'];
  return (
    <div className='py-3'>
      <Heading id="soft skills">Soft Skills</Heading>
      <div
        className='my-1'
        onClick={() => setEditableSectionId(softSkills.id)}
        onBlur={editBlurEvent}
      >
        {softSkills && softSkills?.skillset.map((skill: string, index: number) => {
          return (
            <div
              className='mb-1 flex items-center'
              key={`resume-skills-${index}`}
            >
              <a className='font-sm w-6 text-gray-700'>
                {getIconByType(skill)}
              </a>
              <InlineEdit
                text={skill}
                editable={editableSection == softSkills.id}
                className='ml-2'
                elementPath={['soft skills', 'skillset', index]}
                id={`skillset-${index}`}
                dottedActive
                onSave={(val) =>
                  saveWithPath(['soft skills', 'skillset', index], val)
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
