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
        className='pb-6'
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

  // const renderUnderline = () => (
  //   <div
  //     className='w-[92%] rounded border border-purple-200'
  //     style={{ backgroundColor: `#${color2}` }}
  //   />
  // );

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
          <div className='bg-top-color flex w-full rounded-t-lg sm:px-2'>
            <div
              className={`left-5 top-10 overflow-hidden p-3 sm:relative sm:rounded-full sm:p-0`}
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
              className='mt-10 w-2/3 pl-5 text-start sm:text-center'
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
            <div className='print:max-w-letter print:max-h-letter flex flex-col print:mx-0 print:my-0 sm:mt-10 sm:flex-row '>
              <div className='flex flex-col sm:w-1/3'>
                <div className='order-3 py-3 sm:order-none'>
                  {renderContactInfo()}
                </div>
                <div className='order-2 py-3 sm:order-none'>
                  {renderSkills()}
                </div>
                <div className='order-1 py-3 sm:order-none'>
                  {renderEducation()}
                </div>
              </div>
              <div className='order-first flex flex-col sm:order-none sm:-mt-10 sm:w-2/3'>
                <div className='py-3'>
                  <h2 className='text-top-color text-lg font-bold'>About Me</h2>
                  {renderSummary()}
                </div>
                <div className='py-3'>{renderExperiences()}</div>
                <div className='py-3'>{renderProjects()}</div>
              </div>
            </div>
          </div>
        </main>
      </EditorCover>
    </>
  );
}
