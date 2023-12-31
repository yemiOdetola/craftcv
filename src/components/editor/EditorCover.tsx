import React, { ReactNode, useEffect, useState } from 'react';
import { Menu } from '@/components/editor';
import localFont from 'next/font/local';
import { useCustomLayout, useLayoutDimension, useMainStore } from '@/store';

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

const splitSizes: any = {
  0: ['w-4/12', 'w-8/12'],
  1: ['w-5/12', 'w-7/12'],
  2: ['w-6/12', 'w-6/12'],
  3: ['w-7/12', 'w-5/12'],
  4: ['w-8/12', 'w-4/12'],
};

export default function EditorCover({ className, children }: EditorCoverProps) {
  const customLayout = useCustomLayout();
  const layoutDimension = useLayoutDimension();
  const { updateLayoutDimension } = useMainStore();
  const [slidePosition, setSlidePosition] = useState<number | string>(2);

  useEffect(() => {
    Object.keys(splitSizes).map((key: any) => {
      if (JSON.stringify(splitSizes[key]) == JSON.stringify(layoutDimension)) {
        setSlidePosition(key);
      }
    });
    //TODO: fix slider to position on init
  }, [layoutDimension]);

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSlidePosition(val);
    updateLayoutDimension(splitSizes[val]);
  };

  return (
    <div className={`w-full bg-white py-32`}>
      <Menu />
      <div
        className={`is-printable editor-container print:w-5xl mx-auto my-auto min-h-screen w-full max-w-4xl rounded-lg shadow shadow-gray-300 sm:max-w-5xl sm:p-9 print:shadow-none
          ${className} ${ubuntu.variable} ${cabin.variable} ${cfspaceship.variable} ${sparkystones.variable} ${glitchgoblin.variable} 
          ${motleyforces.variable} ${ronysiswadi.variable} ${sunnyspells.variable}`}
      >
        {children}
      </div>
      {customLayout?.options?.twoColumns ? (
        <div className='range-slider'>
          <input
            type='range'
            className='custom-range'
            min={0}
            max={4}
            step={1}
            value={slidePosition}
            onChange={(e) => handleSlider(e)}
          />
        </div>
      ) : null}
    </div>
  );
}
