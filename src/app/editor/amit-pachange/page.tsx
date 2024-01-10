'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { EditorCover, InlineEdit } from '@/components/editor';
import placeholder from '@/assets/images/placeholder/generator.png';
import {
  useEditorTheme,
  useFontFamily,
  useMainStore,
  useResume,
} from '@/store';
import { getFontFamilyStyle, isObjectEmpty } from '@/utils/helper';
import { useEditorActions } from '@/utils/useEditorActions';
import { amitpachange } from '@/store/resume';
import { useSectionRenderer } from '@/utils/SectionRenderer';

interface Experience {
  id: string;
  title: string;
  achievements: string;
  duration: string;
}

export default function AmitPachange() {
  const fontFamily = useFontFamily();
  const editorTheme = useEditorTheme();
  const { saveWithPath } = useEditorActions();
  const { renderComponent } = useSectionRenderer();
  const { updateResume } = useMainStore();
  const [resume] = useState(useResume());
  const [color1, color2] = editorTheme;
  const [editableSection, setEditableSectionId] = useState<string | null>(null);
  const secprops = {
    color1,
    color2,
    editableSection,
    setEditableSectionId,
    editBlurEvent: (e: React.FocusEvent<HTMLDivElement, Element>) =>
      editBlurEvent(e),
  };

  useEffect(() => {
    if (isObjectEmpty(resume)) {
      updateResume(amitpachange);
    }
  }, [resume, updateResume]);

  const renderContactInfo = () => {
    return <>{renderComponent('contact', secprops)}</>;
  };

  const renderSkills = () => {
    return <>{renderComponent('technical skills', secprops)}</>;
  };

  const renderEducation = () => {
    return renderComponent('education', secprops);
  };

  const renderSummary = () => {
    return (
      <div
        className='pb-2'
        onClick={() => setEditableSectionId(resume?.about?.id)}
        onBlur={(e) => editBlurEvent(e)}
      >
        <InlineEdit
          text={resume && resume?.about?.summary}
          editable={resume && resume?.about?.id == editableSection}
          className='text-sm'
          onSave={(val) => saveWithPath(['about', 'summary'], val)}
        />
      </div>
    );
  };

  const renderExperiences = () => {
    return <>{renderComponent('experiences', secprops)}</>;
  };

  const renderProjects = () => {
    return <>{renderComponent('projects', secprops)}</>;
  };

  const editBlurEvent = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    // TODO: Check if the related target is null or undefined
    if (e.relatedTarget === null) {
      setEditableSectionId(null);
    }
  };

  return (
    <>
      <EditorCover className={`${getFontFamilyStyle(fontFamily)}`}>
        <main className='is-printable'>
          <div className='flex w-full items-center sm:px-2'>
            <div
              className={`overflow-hidden p-3 sm:relative sm:rounded-full sm:p-0`}
              style={{ border: `3px solid #${color1}` }}
            >
              <Image
                src={placeholder}
                alt='Profile'
                className='mx-auto h-32 w-32 rounded-full'
                width={280}
                height={280}
              />
            </div>
            <div
              className='w-2/3 text-center'
              onClick={() => setEditableSectionId(resume?.user?.id)}
              onBlur={(e) => editBlurEvent(e)}
            >
              <InlineEdit
                text={resume?.user?.fullname}
                editable={resume?.user?.id == editableSection}
                onSave={(val) => saveWithPath(['user', 'fullname'], val)}
                className='text-heading text-2xl font-bold sm:text-4xl'
                style={{ color: `#${color2}` }}
                dottedActive
              />
              <InlineEdit
                className='text-heading'
                editable={resume?.user?.id == editableSection}
                text={resume?.user?.title}
                onSave={(val) => saveWithPath(['user', 'title'], val)}
                dottedActive
              />
            </div>
          </div>
          <div className='p-5'>
            <div className='flex flex-col sm:flex-row '>
              <div className='flex flex-col sm:w-1/3'>
                <div>{renderContactInfo()}</div>
                <div>{renderSkills()}</div>
                <div>{renderEducation()}</div>
              </div>
              <div className='flex flex-col sm:w-2/3'>
                <div className='pt-3'>
                  <h2 className='text-top-color mb-2 text-xl'>About Me</h2>
                  {renderSummary()}
                </div>
                <div>{renderExperiences()}</div>
                <div>{renderProjects()}</div>
              </div>
            </div>
          </div>
        </main>
      </EditorCover>
    </>
  );
}
