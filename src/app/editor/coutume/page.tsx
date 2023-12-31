'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { EditorCover, InlineEdit } from '@/components/editor';
import {
  useCustomLayout,
  useEditorTheme,
  useFontFamily,
  useLayoutDimension,
  useMainStore,
  useResume,
} from '@/store';
import { getFontFamilyStyle, isObjectEmpty } from '@/utils/helper';
import { useSectionRenderer } from '@/utils/SectionRenderer';
import { useEditorActions } from '@/utils/useEditorActions';
import { ValidSections } from '@/store/basetemplate';

export default function Coutume() {
  const router = useRouter();
  const fontFamily = useFontFamily();
  const customLayout = useCustomLayout();
  const editorTheme = useEditorTheme();
  const { renderComponent } = useSectionRenderer();
  const layoutDimension = useLayoutDimension();
  const { updateResume } = useMainStore();
  const { saveWithPath } = useEditorActions();
  const [resume] = useState(useResume());
  const [color1, color2] = editorTheme;
  const [editableSection, setEditableSectionId] = useState<string | null>(null);

  const commonProps = {
    color1,
    color2,
    editableSection,
    setEditableSectionId,
    editBlurEvent: (e: React.FocusEvent<HTMLDivElement, Element>) =>
      editBlurEvent(e),
  };

  useEffect(() => {
    if (isObjectEmpty(customLayout) && isObjectEmpty(resume)) {
      router.push('/templates/custom');
    } else if (isObjectEmpty(resume) && !isObjectEmpty(customLayout['base'])) {
      updateResume(customLayout['base']);
    } else if (!isObjectEmpty(resume)) {
      const layoutItems = [
        ...customLayout?.layout?.left,
        ...customLayout?.layout?.right,
      ];
      const cresume = { ...resume };
      layoutItems.map((item) => {
        if (!cresume[item]) {
          cresume[item] = customLayout[item];
        }
      });
      updateResume(cresume);
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
        <div key={index}>{renderComponent(componentName, commonProps)}</div>
      ));
    }
    return null;
  };

  const renderedMainComponents = renderComponents(customLayout?.layout?.left);
  const renderedRightComponents = renderComponents(customLayout?.layout?.right);

  return (
    <>
      {!isObjectEmpty(customLayout) ? (
        <EditorCover className={`${getFontFamilyStyle(fontFamily)}`}>
          <main>
            <header className='bg-top-color flex w-full rounded-t-lg sm:px-2'>
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
            </header>
            <div className='p-5'>
              <div
                className={`sm:mt-8 ${
                  customLayout?.options?.twoColumns &&
                  'flex flex-col gap-x-2 sm:flex-row'
                }`}
              >
                <div
                  className={`pr-4 ${
                    customLayout?.options?.twoColumns && `${layoutDimension[0]}`
                  }`}
                >
                  {renderedMainComponents}
                </div>
                {customLayout?.options?.twoColumns ? (
                  <div className={`pr-4 ${layoutDimension[1]}`}>
                    {renderedRightComponents}
                  </div>
                ) : null}
              </div>
            </div>
          </main>
        </EditorCover>
      ) : null}
    </>
  );
}
