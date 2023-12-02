import React, { ReactNode } from 'react';
import { Menu } from '@/components/editor';
import localFont from 'next/font/local';

interface EditorCoverProps {
  children: ReactNode;
  className?: string;
}

const ubuntu: any = localFont({
  src: '../../assets/fonts/Ubuntu.ttf',
  variable: '--font-ubuntu',
  display: 'swap',
});

const cfspaceship: any = localFont({
  src: '../../assets/fonts/CfSpaceship.ttf',
  variable: '--font-cfspaceship',
  display: 'swap',
});

const swansea: any = localFont({
  src: '../../assets/fonts/Swansea.ttf',
  variable: '--font-swansea',
  display: 'swap',
});

const clearsans: any = localFont({
  src: '../../assets/fonts/ClearSans.ttf',
  variable: '--font-clearsans',
  display: 'swap',
});

const hack: any = localFont({
  src: '../../assets/fonts/Hack.ttf',
  variable: '--font-hack',
  display: 'swap',
});

const cabin: any = localFont({
  src: '../../assets/fonts/Cabin.ttf',
  variable: '--font-cabin',
  display: 'swap',
});

export default function EditorCover({ className, children }: EditorCoverProps) {
  return (
    <div className={`w-full bg-white py-32`}>
      <Menu />
      <div
        className={`editor-container mx-auto min-h-screen w-full rounded-lg p-8 shadow shadow-gray-400 lg:w-11/12 xl:w-4/6 
          ${className} ${ubuntu.variable} ${cabin.variable} ${cfspaceship.variable} ${swansea.variable} ${clearsans.variable} ${hack.variable}`}
      >
        {children}
      </div>
    </div>
  );
}
