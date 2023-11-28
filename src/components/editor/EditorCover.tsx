import React, { ReactNode } from 'react'
import { Menu } from '@/components/editor'


interface EditorCoverProps {
  children: ReactNode;
  className?: string;
}

export default function EditorCover({ className, children }: EditorCoverProps) {
  return (
    <div className={`w-full bg-white py-32 ${className}`}>
      <Menu />
      <div className="w-full lg:w-11/12 xl:w-4/6 min-h-screen mx-auto editor-container p-8 shadow shadow-gray-400 rounded-lg">
        {children}
      </div>
    </div>
  )
}
