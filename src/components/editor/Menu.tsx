import React from 'react';
import { EditorFontMenu } from './EditorFontMenu';
import { EditorThemeMenu } from './EditorThemeMenu';
import { EditorGeneralMenu } from './EditorGeneralMenu';
import {
  useFontFamily,
  useEditorTheme,
  useMainStore,
  useLoading,
  useIsCustom,
} from '@/store';
import { Loading } from '../common';
import Link from 'next/link';

export default function Menu() {
  const { changeEditorTheme, changeFontFamily } = useMainStore();
  const fontFamily = useFontFamily();
  const loading = useLoading();
  const editorTheme = useEditorTheme();
  const isCustom = useIsCustom();
  const setFontFamily = (fontFamily: string) => changeFontFamily(fontFamily);
  const setEditorTheme = (theme: string[]) => changeEditorTheme(theme);

  const printDocument = () => {
    if (!loading) {
      window.print();
    }
  };

  return (
    <div className='fixed left-0 right-0 top-0 z-10 flex items-center bg-white p-2 shadow-md'>
      <div className='mx-auto w-1/2 rounded p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/templates' className='text-xl font-bold'>
              {`<-`} Back
            </Link>
            <div className='ml-4 flex items-center gap-x-4'>
              <EditorFontMenu
                changeFont={setFontFamily}
                fontFamily={fontFamily}
              />
              <EditorThemeMenu
                changeTheme={setEditorTheme}
                editorTheme={editorTheme}
              />

              {isCustom ? <EditorGeneralMenu /> : null}
            </div>
          </div>
        </div>
      </div>
      <div className='mr-4 flex items-center gap-4'>
        <button
          className='flex w-28 items-center justify-center gap-x-2 rounded bg-blue-600 px-3 py-3 text-white hover:bg-blue-600'
          onClick={printDocument}
        >
          {loading ? <Loading /> : null}
          <span className='ml-1'>{loading ? 'Wait..' : 'Preview'}</span>
        </button>
      </div>
    </div>
  );
}
