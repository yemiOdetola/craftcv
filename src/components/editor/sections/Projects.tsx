import React, { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const { saveWithPath, removeSection } = useEditorActions();
  const resume = useResume();
  const projects = resume.projects;

  return (
    <div className='py-3'>
      <Heading id='projects'>Projects</Heading>
      {projects &&
        Object.keys(projects).map((key: any, index: number) => {
          const project = projects[key];
          return (
            <div
              className='relative mb-2 text-sm'
              key={`resume-project-${index}`}
              onClick={() => setEditableSectionId(key)}
              onBlur={editBlurEvent}
              onMouseEnter={() => setIsHovered(key)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {isHovered == key ? (
                <button
                  className='absolute right-4 inline-block p-1 opacity-0 transition-all duration-200'
                  style={{ opacity: isHovered ? 1 : 0 }}
                  onClick={() => removeSection(key, 'projects')}
                >
                  <PiTrashSimpleDuotone size={20} />
                </button>
              ) : null}
              <InlineEdit
                text={project.title}
                editable={editableSection == key}
                placeholder='Project name'
                className='font-semibold'
                onSave={(val) =>
                  saveWithPath(['projects', key], { ...project, title: val })
                }
              />
              <InlineEdit
                text={project?.tech}
                editable={editableSection == key}
                placeholder='Tools/Technologies used'
                style={{ color: `#${color1}` }}
                className='font-mono text-xs font-semibold leading-5 text-green-700'
                onSave={(val) =>
                  saveWithPath(['projects', key], { ...project, tech: val })
                }
              />
              <InlineEdit
                text={project.description}
                placeholder='Description of achievements'
                editable={editableSection == key}
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
  );
}
