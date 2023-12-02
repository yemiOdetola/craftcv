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

const glitchgoblin: any = localFont({
  src: '../../assets/fonts/GlitchGoblin-Regular.ttf',
  variable: '--font-glitchgoblin',
  display: 'swap',
});

const motleyforces: any = localFont({
  src: '../../assets/fonts/MotleyForces-Regular.ttf',
  variable: '--font-motleyforces',
  display: 'swap',
});

const sparkystones: any = localFont({
  src: '../../assets/fonts/SparkyStones-Regular.ttf',
  variable: '--font-sparkystones',
  display: 'swap',
});

const ronysiswadi: any = localFont({
  src: '../../assets/fonts/Ronysiswadi-Architect.ttf',
  variable: '--font-ronysiswadi',
  display: 'swap',
});

const cabin: any = localFont({
  src: '../../assets/fonts/Cabin.ttf',
  variable: '--font-cabin',
  display: 'swap',
});

const sunnyspells: any = localFont({
  src: '../../assets/fonts/SunnySpells-Regular.ttf',
  variable: '--font-sunnyspells',
  display: 'swap',
});

export default function EditorCover({ className, children }: EditorCoverProps) {
  return (
    <div className={`w-full bg-white py-32`}>
      <Menu />
      <div
        className={`editor-container mx-auto min-h-screen w-full rounded-lg p-8 shadow shadow-gray-400 lg:w-11/12 xl:w-4/6 
          ${className} ${ubuntu.variable} ${cabin.variable} ${cfspaceship.variable} ${sparkystones.variable} ${glitchgoblin.variable} ${motleyforces.variable} ${ronysiswadi.variable} ${sunnyspells.variable}`}
      >
        {children}
      </div>
    </div>
  );
}
