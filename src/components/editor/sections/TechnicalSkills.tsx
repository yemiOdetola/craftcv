import React from 'react';
import { InlineEdit } from '@/components/editor';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';
import Heading from './Heading';
import { getIconByType } from '../../common';

interface TechnicalSkillsProps {
  color1: string;
  editableSection: null | string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
}

export default function TechnicalSkills({
  editableSection,
  editBlurEvent,
  color1,
  setEditableSectionId,
}: TechnicalSkillsProps) {
  const { saveWithPath } = useEditorActions();
  const resume = useResume();
  const technicalSkills = resume['technical skills'];

  return (
    <div className='py-3'>
      <Heading id='technical skills'>Technical Skills</Heading>
      <div
        className='my-1'
        onClick={() => setEditableSectionId('technicalSkills')}
        onBlur={editBlurEvent}
      >
        {technicalSkills &&
          technicalSkills?.skillset.map((skill: string, index: number) => {
            return (
              <div
                className='mb-1 flex items-center'
                key={`resume-skills-${index}`}
              >
                <a className='text-gray-700' style={{ color: `#${color1}` }}>
                  {getIconByType(skill)}
                </a>
                <InlineEdit
                  text={skill}
                  editable={editableSection == 'technicalSkills'}
                  className='ml-2 text-sm'
                  placeholder='Add skill'
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
