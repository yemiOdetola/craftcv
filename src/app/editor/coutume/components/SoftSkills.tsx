import React from 'react';
import { InlineEdit } from '@/components/editor';
import { getIconByType } from '../../Icons';
import { useEditorActions } from '@/utils/useEditorActions';

interface SoftSkillsProps {
  editableSection: null | string;
  softSkills: any;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
}

export default function SoftSkills({
  editableSection,
  editBlurEvent,
  setEditableSectionId,
  softSkills,
}: SoftSkillsProps) {
  const { saveWithPath } = useEditorActions();
  return (
    <div className='py-3'>
      <h2 className='font-poppins text-top-color text-lg font-bold'>
        Soft Skills
      </h2>
      <div
        className='my-1'
        onClick={() => setEditableSectionId(softSkills.id)}
        onBlur={editBlurEvent}
      >
        {softSkills?.skillset.map((skill: string, index: number) => {
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
