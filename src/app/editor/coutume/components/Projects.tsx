import React from 'react';
import { InlineEdit } from '@/components/editor';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';
import Heading from './Heading';
import { PiTrashSimpleDuotone } from 'react-icons/pi';

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
  const { saveWithPath, removeFromPath } = useEditorActions();
  const resume = useResume();
  const projects = resume.projects;
  const removeSection = (key: string) => {
    removeFromPath(['projects', key]);
  };

  return (
    <div className='py-3'>
      <Heading id='projects'>Projects</Heading>
      <div className='flex flex-col'>
        {projects &&
          Object.keys(projects).map((key: any, index: number) => {
            const project = projects[key];
            return (
              <div
                className='mb-4 flex flex-col'
                key={`resume-project-${index}`}
                onClick={() => setEditableSectionId(key)}
                onBlur={editBlurEvent}
              >
                <button className='p-2' onClick={() => removeSection(key)}>
                  <PiTrashSimpleDuotone size={20} />
                </button>
                <InlineEdit
                  text={project.title}
                  editable={editableSection == key}
                  placeholder='Project name'
                  className='text-md font-semibold text-gray-700'
                  onSave={(val) =>
                    saveWithPath(['projects', key], { ...project, title: val })
                  }
                />
                <InlineEdit
                  text={project?.tech}
                  editable={editableSection == key}
                  placeholder='Tools/Technologies used'
                  style={{ color: `#${color1}` }}
                  className='font-mono text-sm font-semibold text-green-700'
                  onSave={(val) =>
                    saveWithPath(['projects', key], { ...project, tech: val })
                  }
                />
                <InlineEdit
                  text={project.description}
                  placeholder='Description of achievements'
                  editable={editableSection == key}
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
