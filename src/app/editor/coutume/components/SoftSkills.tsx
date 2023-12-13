import React from 'react';
import { InlineEdit } from '@/components/editor';
import { getIconByType } from '../../Icons';

interface SoftSkillsProps {
  editable: boolean;
  softSkills: any;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: () => void;
  onSave: () => void;
}

export default function SoftSkills({
  editable,
  editBlurEvent,
  setEditableSectionId,
  onSave,
  softSkills,
}: SoftSkillsProps) {
  return (
    <div className='my-1' onClick={setEditableSectionId} onBlur={editBlurEvent}>
      {softSkills?.skillset.map((skill: string, index: number) => {
        return (
          <div
            className='mb-1 flex items-center'
            key={`resume-skills-${index}`}
          >
            <a className='font-sm w-6 text-gray-700'>{getIconByType(skill)}</a>
            <InlineEdit
              text={skill}
              editable={editable}
              className='ml-2'
              elementPath={['technical skills', 'skillset', index]}
              id={`skillset-${index}`}
              dottedActive
              onSave={onSave}
            />
          </div>
        );
      })}
    </div>
  );
}
