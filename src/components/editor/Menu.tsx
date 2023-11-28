import React from 'react'
import { Popoverlay } from '../common'
import { EditorFontMenu } from './EditorFontMenu'
import { EditorSpacingMenu } from './EditorSpacingMenu'
import { EditorThemeMenu } from './EditorThemeMenu'
import { useActions, useFontFamily } from '@/store'


export default function Menu() {
  const { setFontFamily } = useActions()
  const fontFamily = useFontFamily();

  const changeFontStyle = (fontFamily: string) => setFontFamily(fontFamily);
  return (
    <div className="bg-white fixed top-0 left-0 right-0 p-2 shadow-md z-10 flex items-center">
      <div className="w-1/2 mx-auto p-4 rounded">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">Resume Editor</span>
            <div className="flex items-center gap-x-4 ml-4">
              <EditorFontMenu onChange={changeFontStyle} fontFamily={fontFamily} />
              <EditorThemeMenu />
              <EditorSpacingMenu />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mr-4">
        <button className="bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 rounded">Preview</button>
        <button className="bg-blue-600 hover:bg-blue-600 text-white px-4 py-2 rounded">Save</button>
      </div>
    </div>
  )
}
