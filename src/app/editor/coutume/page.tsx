'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { EditorCover, InlineEdit } from '@/components/editor';
import {
  useCustomLayout,
  useEditorTheme,
  useFontFamily,
  useMainStore,
  useResume,
} from '@/store';
import { getFontFamilyStyle, isObjectEmpty } from '@/utils/helper';
import { useEditorActions } from '@/utils/useEditorActions';
import {
  Awards,
  Contact,
  Education,
  Experiences,
  Interests,
  Languages,
  Projects,
  Publications,
  SoftSkills,
  Summary,
  TechnicalSkills,
} from './components';

interface Experience {
  id: string;
  title: string;
  achievements: string;
  duration: string;
}

export default function Coutume() {
  const router = useRouter();
  const fontFamily = useFontFamily();
  const customLayout = useCustomLayout();
  const editorTheme = useEditorTheme();
  const { updateResume } = useMainStore();
  const { saveWithPath } = useEditorActions();
  const [resume] = useState(useResume());
  const [color1, color2] = editorTheme;
  const [editableSection, setEditableSectionId] = useState<string | null>(null);

  useEffect(() => {
    if (isObjectEmpty(customLayout) && isObjectEmpty(resume)) {
      router.push('/templates/custom');
    } else {
      if (isObjectEmpty(resume) && !isObjectEmpty(customLayout['base'])) {
        updateResume(customLayout['base']);
      }
    }
  }, [customLayout, resume, router, updateResume]);

  const editBlurEvent = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    //TODO: Check if the related target is null or undefined
    if (e.relatedTarget === null) {
      setEditableSectionId(null);
    }
  };

  const renderExperiences = () => {
    console.log('rendering experiences');
    return (
      <Experiences
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
        color1={color1}
        color2={color2}
      />
    );
  };

  const renderProjects = () => {
    return (
      <Projects
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
        color1={color1}
      />
    );
  };

  const renderSummary = () => {
    return (
      <Summary
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
      />
    );
  };

  const renderEducation = () => {
    console.log('education');
    return (
      <Education
        color1={color1}
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
      />
    );
  };

  const renderSoftSkills = () => {
    return (
      <SoftSkills
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
      />
    );
  };

  const renderTechnicalSkills = () => {
    return (
      <TechnicalSkills
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
      />
    );
  };

  const renderContactInfo = () => {
    return (
      <Contact
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
      />
    );
  };

  const renderInterests = () => {
    return (
      <Interests
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
      />
    );
  };

  const renderLanguages = () => {
    return (
      <Languages
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
      />
    );
  };

  const renderAward = () => {
    console.log('award');
    return (
      <Awards
        color1={color1}
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
      />
    );
  };

  const renderPublication = () => {
    console.log('publicatipns');
    return (
      <Publications
        color1={color1}
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
      />
    );
  };

  const renderComponents = (componentNames: string[]) => {
    if (componentNames?.length > 0) {
      return componentNames.map((componentName, index) => {
        componentName = componentName.toLocaleLowerCase();
        if (componentName == 'experiences') {
          return renderExperiences();
        }
        if (componentName == 'technical skills') {
          return renderTechnicalSkills();
        }
        if (componentName == 'projects') {
          return renderProjects();
        }
        if (componentName == 'education') {
          return renderEducation();
        }
        if (componentName == 'soft skills') {
          return renderSoftSkills();
        }
        if (componentName == 'technical skills') {
          return renderTechnicalSkills();
        }
        if (componentName == 'languages') {
          return renderLanguages();
        }
        if (componentName == 'summary') {
          return renderSummary();
        }
        if (componentName == 'interests') {
          return renderInterests();
        }
        if (componentName == 'contact') {
          return renderContactInfo();
        }
        if (componentName == 'awards') {
          return renderAward();
        }
        if (componentName == 'publications') {
          return renderPublication();
        }
      });
    }
  };

  const renderedMainComponents = renderComponents(customLayout?.layout?.left);
  const renderedRightComponents = renderComponents(customLayout?.layout?.right);

  return (
    <>
      {!isObjectEmpty(customLayout) ? (
        <EditorCover className={`${getFontFamilyStyle(fontFamily)}`}>
          <div className='bg-top-color flex w-full rounded-t-lg sm:px-2'>
            <div
              className='w-full pl-5 text-center'
              onClick={() => setEditableSectionId('user')}
              onBlur={(e) => editBlurEvent(e)}
            >
              <InlineEdit
                text={resume?.user?.fullname}
                editable={editableSection == 'user'}
                placeholder='Name in Full'
                onSave={(val) => saveWithPath(['user', 'fullname'], val)}
                className='font-poppins text-heading text-2xl font-bold sm:text-4xl'
                style={{ color: `#${color2}` }}
                dottedActive
              />
              <InlineEdit
                className='text-heading'
                placeholder='Professional Title'
                editable={editableSection == 'user'}
                text={resume?.user?.title}
                onSave={(val) => saveWithPath(['user', 'title'], val)}
                dottedActive
              />
              {/* <InlineEdit
                className='text-heading'
                placeholder='Professional profile overview'
                editable={editableSection == 'user'}
                text={resume?.user?.summary}
                onSave={(val) => saveWithPath(['user', 'summary'], val)}
                dottedActive
              /> */}
            </div>
          </div>
          <div className='p-5'>
            <div className='flex flex-col sm:mt-10 sm:flex-row'>
              <div className='flex flex-col sm:w-1/3'>
                {renderedMainComponents}
              </div>
              <div className='order-first flex flex-col sm:order-none sm:-mt-10 sm:w-2/3'>
                {customLayout?.options &&
                  customLayout.options.twoColumns &&
                  renderedRightComponents}
              </div>
            </div>
          </div>
        </EditorCover>
      ) : null}
    </>
  );
}
