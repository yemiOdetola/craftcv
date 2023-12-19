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
  References,
} from './components';
import Certifications from './components/Certifications';
import { ValidSections } from '@/store/basetemplate';

interface Experience {
  id: string;
  title: string;
  achievements: string;
  duration: string;
}

const components = {
  experiences: Experiences,
  projects: Projects,
  contact: Contact,
  education: Education,
  certifications: Certifications,
  awards: Awards,
  interests: Interests,
  languages: Languages,
  publications: Publications,
  references: References,
  'soft skills': SoftSkills,
  'technical skills': TechnicalSkills,
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

  const renderComponents = (componentNames: ValidSections[]) => {
    if (componentNames?.length > 0) {
      return componentNames.map((componentName, index) => (
        <div key={index}>{renderComponent(componentName)}</div>
      ));
    }
    return null;
  };

  const renderComponent = (name: ValidSections) => {
    const commonProps = {
      color1,
      color2,
      editableSection,
      setEditableSectionId,
      editBlurEvent: (e: React.FocusEvent<HTMLDivElement, Element>) =>
        editBlurEvent(e),
    };
    const Component = components[name];
    return <Component {...commonProps} />;
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
            </div>
          </div>
          <div className='p-5'>
            <div
              className={`gap-x-2 sm:mt-8 ${
                customLayout?.options?.twoColumns && 'flex flex-col md:flex-row'
              }`}
            >
              <div
                className={`w-full ${
                  customLayout?.options?.twoColumns && 'sm:w-2/4'
                }`}
              >
                {renderedMainComponents}
              </div>
              <div className='sm:w-2/4'>
                {customLayout?.options?.twoColumns && renderedRightComponents}
              </div>
            </div>
          </div>
        </EditorCover>
      ) : null}
    </>
  );
}
