import React from 'react';
import { InlineEdit } from '@/components/editor';
import { getIconByType } from '../../Icons';

interface ProjectsProps {
  projects: any;
  editable: boolean;
  color1: string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: () => void;
  onSave: () => void;
}

export default function Projects({
  projects,
  editable,
  color1,
  editBlurEvent,
  setEditableSectionId,
  onSave,
}: ProjectsProps) {
  return (
    <div className='flex flex-col'>
      {Object.keys(projects).map((key: any, index: number) => {
        const project = projects[key];
        return (
          <div
            className='mb-4 flex flex-col'
            key={`resume-project-${index}`}
            onClick={setEditableSectionId}
            onBlur={editBlurEvent}
          >
            <InlineEdit
              text={project.title}
              editable={editable}
              className='text-lg font-semibold text-gray-700'
              onSave={onSave}
            />
            <InlineEdit
              text={project?.tech}
              editable={editable}
              style={{ color: `#${color1}` }}
              className='my-2 font-mono text-sm font-semibold text-green-700'
              onSave={onSave}
            />
            <InlineEdit
              text={project.description}
              editable={editable}
              className='mb-1 pl-2 text-sm font-normal text-gray-700'
              onSave={onSave}
            />
          </div>
        );
      })}
    </div>
  );
}
