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
  Contact,
  Education,
  Experiences,
  Languages,
  Projects,
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

const componentMapping: any = {
  // Certifications: Certifications,
  Languages: Languages,
  'Technical Skills': TechnicalSkills,
  Experiences: Experiences,
  Projects: Projects,
  Summary: Summary,
  // Certifications: Certifications,
  // References: References,
};

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
    console.log('projects');
    return (
      <Projects
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
        color1={color1}
      />
    );
  };

  const renderSummary = (meta: any) => {
    return (
      <Summary
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
        summary={meta}
      />
    );
  };

  const renderEducation = (meta: any) => {
    console.log('education');
    return (
      <Education
        color1={color1}
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
        educationhistory={meta}
      />
    );
  };

  const renderSoftSkills = (meta: any) => {
    return (
      <SoftSkills
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
        softSkills={meta}
      />
    );
  };

  const renderTechnicalSkills = (meta: any) => {
    console.log('technical skills');
    return (
      <TechnicalSkills
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
        technicalSkills={meta}
      />
    );
  };

  const renderContactInfo = (meta: any) => {
    return (
      <Contact
        editableSection={editableSection}
        editBlurEvent={(e) => editBlurEvent(e)}
        setEditableSectionId={(id) => setEditableSectionId(id)}
        contact={meta}
      />
    );
  };

  const renderComponents = (componentNames: string[]) => {
    if (componentNames?.length > 0) {
      return componentNames.map((componentName, index) => {
        componentName = componentName.toLocaleLowerCase();
        const meta = customLayout[componentName];
        if (componentName == 'experiences') {
          return renderExperiences();
        }
        if (componentName == 'technical skills') {
          return renderTechnicalSkills(meta);
        }
        if (componentName == 'projects') {
          return renderProjects();
        }
        if (componentName == 'education') {
          return renderEducation(meta);
        }
        // if (componentName == 'references') {
        //   return renderRefereces(meta);
        // }
        // if (componentName == 'certifications') {
        //   return renderCertifications(meta);
        // }
      });
    } else {
      // router.push('/templates/custom');
    }
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
