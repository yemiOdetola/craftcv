import React from 'react';
import { InlineEdit } from '@/components/editor';
import { getIconByType } from '../../Icons';
import { useEditorActions } from '@/utils/useEditorActions';

interface TechnicalSkillsProps {
  editableSection: null | string;
  technicalSkills: any;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
}

export default function TechnicalSkills({
  editableSection,
  editBlurEvent,
  setEditableSectionId,
  technicalSkills,
}: TechnicalSkillsProps) {
  const { saveWithPath } = useEditorActions();
  return (
    <div className='py-3'>
      <h2 className='font-poppins text-top-color text-lg font-bold'>
        Technical Skills
      </h2>
      <div
        className='my-1'
        onClick={() => setEditableSectionId(technicalSkills.id)}
        onBlur={editBlurEvent}
      >
        {technicalSkills?.skillset.map((skill: string, index: number) => {
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
                editable={editableSection == technicalSkills.id}
                className='ml-2'
                elementPath={['technical skills', 'skillset', index]}
                id={`skillset-${index}`}
                dottedActive
                onSave={(val) =>
                  saveWithPath(['technical skills', 'skillset', index], val)
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
