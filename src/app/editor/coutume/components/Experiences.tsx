import React from 'react';
import { InlineEdit } from '@/components/editor';

interface ExperiencesProps {
  editable: boolean;
  color1: string;
  experiences: any;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: () => void;
  onSave: () => void;
}

export default function Experiences({
  editable,
  editBlurEvent,
  setEditableSectionId,
  onSave,
  color1,
  experiences,
}: ExperiencesProps) {
  return (
    <div className='flex flex-col'>
      {Object.keys(experiences).map((key: any, index: number) => {
        const exp = experiences[key];
        return (
          <div
            className='mb-6 flex flex-col'
            key={`resume-experience-${index}`}
            onClick={setEditableSectionId}
            onBlur={editBlurEvent}
          >
            <div className='flex items-center justify-normal'>
              <InlineEdit
                text={exp.company}
                className='text-lg font-bold text-gray-700'
                editable={editable}
                dottedActive
                onSave={onSave}
              />
              <span> | </span>
              <InlineEdit
                text={exp.position}
                className='text-lg font-bold text-gray-700'
                editable={editable}
                dottedActive
                onSave={onSave}
              />
            </div>
            <div className='flex items-center justify-normal'>
              <InlineEdit
                text={exp.startDate}
                className='my-1 font-mono text-sm font-semibold text-green-700'
                editable={editable}
                style={{ color: `#${color1}` }}
                dottedActive
                onSave={onSave}
              />
              <span> - </span>
              <InlineEdit
                text={exp.endDate}
                className='my-1 font-mono text-sm font-semibold text-green-700'
                editable={editable}
                style={{ color: `#${color1}` }}
                dottedActive
                onSave={onSave}
              />
            </div>
            <span className='mb-1 mt-2 text-sm font-semibold text-gray-700'>
              Key Responsibilities
            </span>
            <ul className='list-disc space-y-1 pl-4 text-sm'>
              {exp?.responsibilities.map(
                (responsibility: string, index: number) => (
                  <li key={`exp-responsibility-${index}`}>
                    {' '}
                    <InlineEdit
                      text={responsibility}
                      editable={editable}
                      id={`responsibilities-${index}`}
                      elementPath={[
                        'experiences',
                        key,
                        'responsibilities',
                        index,
                      ]}
                      onSave={onSave}
                    />
                  </li>
                )
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
