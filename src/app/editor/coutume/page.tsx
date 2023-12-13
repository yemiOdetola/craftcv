'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { EditorCover, InlineEdit } from '@/components/editor';
import placeholder from '@/assets/images/placeholder/generator.png';
import { getIconByType } from '../Icons';
import {
  useCustomLayout,
  useEditorTheme,
  useFontFamily,
  useResume,
} from '@/store';
import { getFontFamilyStyle } from '@/utils/helper';
import { useEditorActions } from '@/utils/useEditorActions';
import Summary from './components/Summary';

interface Experience {
  id: string;
  title: string;
  achievements: string;
  duration: string;
}

export default function Coutume() {
  const fontFamily = useFontFamily();
  const customLayout = useCustomLayout();
  const editorTheme = useEditorTheme();
  const { saveWithPath } = useEditorActions();
  const [resume] = useState(useResume());
  const [color1, color2] = editorTheme;
  const [editableSection, setEditableSectionId] = useState<string | null>(null);

  console.log('customLayout: ', customLayout);

  const editBlurEvent = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    //TODO: Check if the related target is null or undefined
    if (e.relatedTarget === null) {
      setEditableSectionId(null);
    }
  };

  const leftRender = () => {
    const sections: any = [];
    Object.keys(customLayout).forEach((key) => {
      if (key === 'interests') {
        sections.push(renderInterests(customLayout[key]));
      }
      if (key === 'languages') {
        sections.push(renderLanguages(customLayout[key]));
      }
      if (key.length > 9) {
        sections.push(
          <Summary
            text={customLayout['summary']}
            editable={false}
            editBlurEvent={() => console.log('heyyyy')}
            setEditableSectionId={() => console.log('heyyyy')}
            onSave={() => console.log('heyyyy')}
          />
        );
      }
    });
    return <>{[...sections]}</>;
  };

  const renderInterests = (interests: string[]) => {
    return (
      <div
        className='my-1'
        onClick={() => setEditableSectionId('interests')}
        onBlur={(e) => editBlurEvent(e)}
      >
        {interests.map((interest, index) => {
          return (
            <div className='mb-1 flex items-center' key={`interest-${index}`}>
              <InlineEdit
                text={interest}
                editable={'interests' == editableSection}
                className='ml-2'
                dottedActive
                onSave={(val) => saveWithPath(['interests'], val)}
              />
            </div>
          );
        })}
      </div>
    );
  };
  const renderLanguages = (languages: string[]) => {
    return (
      <div
        className='my-1'
        onClick={() => setEditableSectionId('languages')}
        onBlur={(e) => editBlurEvent(e)}
      >
        {languages.map((language, index) => {
          return (
            <div className='mb-1 flex items-center' key={`language-${index}`}>
              <InlineEdit
                text={language}
                editable={'languages' == editableSection}
                className='ml-2'
                dottedActive
                onSave={(val) => saveWithPath(['languages'], val)}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <EditorCover className={`${getFontFamilyStyle(fontFamily)}`}>
        <div className='bg-top-color flex w-full rounded-t-lg sm:px-2'>
          <div
            className='w-full pl-5 text-center'
            onClick={() => setEditableSectionId(resume?.user?.id)}
            onBlur={(e) => editBlurEvent(e)}
          >
            <InlineEdit
              text={resume?.user?.fullname}
              editable={resume?.user?.id == editableSection}
              onSave={(val) => saveWithPath(['user', 'fullname'], val)}
              className='font-poppins text-heading text-2xl font-bold sm:text-4xl'
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
          <div className='flex flex-col sm:mt-10 sm:flex-row'>
            {leftRender()}
          </div>
        </div>
      </EditorCover>
    </>
  );
}
