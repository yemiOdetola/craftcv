import React, { ReactNode } from 'react'
import { Menu } from '@/components/editor'

export default function EditorCover({ children }: any) {
  return (
    <div className="w-full bg-white py-32">
      <Menu />
      <div className="w-full lg:w-11/12 xl:w-4/6 min-h-screen mx-auto editor-container p-8 shadow shadow-gray-400 rounded-lg">
        {children}
      </div>
    </div>
  )
}
