import React from 'react';
import { InlineEdit } from '@/components/editor';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';
import Heading from './Heading';
import { getIconByType } from '../../common';

interface SoftSkillsProps {
  color1: string;
  editableSection: null | string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
}

export default function SoftSkills({
  editableSection,
  editBlurEvent,
  setEditableSectionId,
  color1,
}: SoftSkillsProps) {
  const { saveWithPath } = useEditorActions();
  const resume = useResume();
  const softSkills = resume['soft skills'];
  return (
    <div className='py-3'>
      <Heading id='soft skills'>Soft Skills</Heading>
      <div
        className='my-1'
        onClick={() => setEditableSectionId(softSkills.id)}
        onBlur={editBlurEvent}
      >
        {softSkills &&
          softSkills?.skillset.map((skill: string, index: number) => {
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
                  editable={editableSection == softSkills.id}
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
