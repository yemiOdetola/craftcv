import React from 'react';
import { InlineEdit } from '@/components/editor';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';

interface ProjectsProps {
  editableSection: null | string;
  color1: string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (e: any) => void;
}

export default function Projects({
  editableSection,
  color1,
  editBlurEvent,
  setEditableSectionId,
}: ProjectsProps) {
  const { saveWithPath } = useEditorActions();
  const resume = useResume();
  const projects = resume.projects;
  return (
    <div className='py-3'>
      <h2 className='font-poppins text-top-color text-lg font-bold'>
        Projects
      </h2>
      <div className='flex flex-col'>
        {Object.keys(projects).map((key: any, index: number) => {
          const project = projects[key];
          return (
            <div
              className='mb-4 flex flex-col'
              key={`resume-project-${index}`}
              onClick={() => setEditableSectionId(project.id)}
              onBlur={editBlurEvent}
            >
              <InlineEdit
                text={project.title}
                editable={editableSection == project.id}
                placeholder='Project name'
                className='text-lg font-semibold text-gray-700'
                onSave={(val) =>
                  saveWithPath(['projects', key], { ...project, title: val })
                }
              />
              <InlineEdit
                text={project?.tech}
                editable={editableSection == project.id}
                placeholder='Tools/Technologies used'
                style={{ color: `#${color1}` }}
                className='my-2 font-mono text-sm font-semibold text-green-700'
                onSave={(val) =>
                  saveWithPath(['projects', key], { ...project, tech: val })
                }
              />
              <InlineEdit
                text={project.description}
                placeholder='Description of achievements'
                editable={editableSection == project.id}
                className='mb-1 pl-2 text-sm font-normal text-gray-700'
                onSave={(val) =>
                  saveWithPath(['projects', key], {
                    ...project,
                    description: val,
                  })
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
