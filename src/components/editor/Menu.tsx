import React from 'react';
import { EditorFontMenu } from './EditorFontMenu';
import { EditorSpacingMenu } from './EditorSpacingMenu';
import { EditorThemeMenu } from './EditorThemeMenu';
import { useFontFamily, useEditorTheme, useMainStore } from '@/store';

export default function Menu() {
  const { changeEditorTheme, changeFontFamily } = useMainStore();
  const fontFamily = useFontFamily();
  const editorTheme = useEditorTheme();
  const setFontFamily = (fontFamily: string) => changeFontFamily(fontFamily);
  const setEditorTheme = (theme: string[]) => changeEditorTheme(theme);

  return (
    <div className='fixed left-0 right-0 top-0 z-10 flex items-center bg-white p-2 shadow-md'>
      <div className='mx-auto w-1/2 rounded p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <span className='text-xl font-bold'>Resume Editor</span>
            <div className='ml-4 flex items-center gap-x-4'>
              <EditorFontMenu
                changeFont={setFontFamily}
                fontFamily={fontFamily}
              />
              <EditorThemeMenu
                changeTheme={setEditorTheme}
                editorTheme={editorTheme}
              />
              <EditorSpacingMenu />
            </div>
          </div>
        </div>
      </div>
      <div className='mr-4 flex items-center gap-4'>
        <button className='rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-600'>
          Preview
        </button>
        <button className='flex items-center gap-x-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-600'>
          <div className='kinetic'></div>
          {/* <div className='fancy-spinner'>
            <div className='ring'></div>
            <div className='ring'></div>
            <div className='dot'></div>
          </div> */}
          <span className='block'>Save</span>
        </button>
      </div>
    </div>
  );
}
