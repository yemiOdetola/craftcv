'use client';
import React, { useRef, useState } from 'react';
import {
  PiBookmarkDuotone,
  PiBookOpenText,
  PiPenDuotone,
  PiCircleHalfBold,
  PiBooksDuotone,
  PiShapesFill,
  PiArrowsInDuotone,
  PiSwatchesDuotone,
  PiCertificateDuotone,
  PiShootingStarDuotone,
  PiParachuteDuotone,
  PiCurrencyCnyDuotone,
  PiDatabaseDuotone,
  PiFlaskDuotone,
  PiMedalDuotone,
  PiTrashDuotone,
} from 'react-icons/pi';
import { Container } from '@/components/common';

const sections: any = {
  Education: <PiBookOpenText size={48} />,
  Experiences: <PiPenDuotone size={48} />,
  'Technical Skills': <PiShapesFill size={48} />,
  Awards: <PiMedalDuotone size={48} />,
  Interests: <PiParachuteDuotone size={48} />,
  Volunteers: <PiFlaskDuotone size={48} />,
  Publications: <PiBooksDuotone size={48} />,
  Projects: <PiSwatchesDuotone size={48} />,
  'Soft skills': <PiArrowsInDuotone size={48} />,
  Certifications: <PiCertificateDuotone size={48} />,
  Languages: <PiCurrencyCnyDuotone size={48} />,
  Conferences: <PiCircleHalfBold size={48} />,
  References: <PiDatabaseDuotone size={48} />,
};

export default function CustomTemplate() {
  const [widgets, setWidgets] = useState<string[]>([]);
  const dragStartWidget = useRef<number>(0);
  const dragToWidget = useRef<number>(0);

  const handle0nDrag = (e: React.DragEvent, widgetType: string) => {
    e.dataTransfer.setData('widgetType', widgetType);
  };

  const handle0nDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData('widgetType') as string;
    if (widgetType !== '') {
      setWidgets([...widgets, widgetType]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleRearrange = () => {
    const widgetsCopy = [...widgets];
    const temp = widgetsCopy[dragStartWidget.current];
    widgetsCopy[dragStartWidget.current] = widgetsCopy[dragToWidget.current];
    widgetsCopy[dragToWidget.current] = temp;
    setWidgets(widgetsCopy);
  };

  const removeItemPosition = (idx: number) => {
    const widgetsCopy = [...widgets];
    widgetsCopy.splice(idx, 1);
    setWidgets(widgetsCopy);
  };

  return (
    <main className='bg-white'>
      <Container className='min-h-screen bg-white'>
        <div className='mx-auto max-w-2xl pt-12 lg:mx-0'>
          <h2 className='font-display text-2xl font-medium tracking-tighter text-blue-600 sm:text-3xl'>
            Create a custom template
          </h2>
        </div>
        <div className='gap-x-7 align-top lg:flex'>
          <div className='flex h-96 w-full flex-wrap items-center gap-x-2 lg:w-2/6'>
            {Object.keys(sections).map((key, index) => (
              <div
                className='cs-width mt-2 break-all border border-dotted border-gray-400 px-2 py-3'
                key={`widget-${index}`}
                draggable
                onDragStart={(e) => handle0nDrag(e, key)}
              >
                <span className='text-sm'>{key}</span>
              </div>
            ))}
          </div>
          <div className='mt-2 w-full lg:w-4/6'>
            <div
              className='cs-height overflow-y-auto overflow-x-hidden border-2 border-gray-600 p-2'
              onDrop={handle0nDrop}
              onDragOver={handleDragOver}
            >
              {widgets.map((widget, index) => (
                <div
                  className='relative mb-3 flex w-full items-center gap-x-2 border-2 border-dotted border-indigo-500 p-2 py-4 transition-all duration-300 hover:cursor-move hover:bg-indigo-50'
                  key={index}
                  draggable
                  onDragStart={() => (dragStartWidget.current = index)}
                  onDragEnter={() => (dragToWidget.current = index)}
                  onDragEnd={handleRearrange}
                  onDragOver={handleDragOver}
                >
                  <div
                    onClick={() => removeItemPosition(index)}
                    className='absolute right-1 top-1 cursor-pointer p-2 text-red-400 opacity-30 transition-all duration-300 hover:opacity-100'
                  >
                    <PiTrashDuotone size={16} />
                  </div>
                  <span className='opacity-25'>{sections[widget]}</span>
                  <span>{widget}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
