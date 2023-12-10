'use client';
import React, { Fragment, useRef, useState } from 'react';
import {
  PiBookOpenText,
  PiPenDuotone,
  PiCircleHalfBold,
  PiBooksDuotone,
  PiShapesFill,
  PiArrowsInDuotone,
  PiSwatchesDuotone,
  PiCertificateDuotone,
  PiParachuteDuotone,
  PiCurrencyCnyDuotone,
  PiDatabaseDuotone,
  PiFlaskDuotone,
  PiMedalDuotone,
  PiTrashDuotone,
} from 'react-icons/pi';
import { Container, Toggle } from '@/components/common';

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

interface DropColumnProps {
  widgets: string[];
  onDrop: (e: any) => void;
  position: 'left' | 'right';
}

export default function CustomTemplate() {
  const [widgets, setWidgets] = useState<string[]>([]);
  const [leftWidgets, setLeftWidgets] = useState<string[]>([]);
  const [rightWidgets, setRightWidgets] = useState<string[]>([]);
  const [twoColumns, setTwoColumns] = useState(false);
  const dragStartWidget = useRef<number>(0);
  const dragToWidget = useRef<number>(0);

  const handle0nDrag = (e: React.DragEvent, widgetType: string) => {
    e.dataTransfer.setData('widgetType', widgetType);
  };

  const handleLeftOnDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData('widgetType') as string;
    if (widgetType !== '') {
      setLeftWidgets([...leftWidgets, widgetType]);
    }
  };

  const handleRight0nDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData('widgetType') as string;
    if (twoColumns) {
      setRightWidgets([...rightWidgets, widgetType]);
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

  const removeItemPosition = (idx: number, position: string) => {
    if (position === 'right') {
      const rightWidgetsCopy = [...rightWidgets];
      rightWidgetsCopy.splice(idx, 1);
      setRightWidgets(rightWidgetsCopy);
    } else {
      const leftWidgetsCopy = [...leftWidgets];
      leftWidgetsCopy.splice(idx, 1);
      setLeftWidgets(leftWidgetsCopy);
    }
  };

  const DropColumn = ({ widgets, position, onDrop }: DropColumnProps) => {
    return (
      <div
        className={`h-[480px] overflow-y-auto overflow-x-hidden p-2 lg:h-[600px] ${
          twoColumns && 'w-1/2'
        } ${position == 'left' && 'border-l-0'}`}
        onDrop={onDrop}
        onDragOver={handleDragOver}
      >
        {widgets.map((widget, index) => (
          <div
            className='relative mb-3 flex w-full items-center gap-x-2 border-2 border-dotted 
          border-indigo-500 p-2 py-4 transition-all duration-300 hover:cursor-move hover:bg-indigo-50'
            key={index}
            draggable
            onDragStart={() => (dragStartWidget.current = index)}
            onDragEnter={() => (dragToWidget.current = index)}
            onDragEnd={handleRearrange}
            onDragOver={handleDragOver}
          >
            <div
              onClick={() => removeItemPosition(index, position)}
              className='absolute right-1 top-1 cursor-pointer p-2 text-red-400 opacity-30 transition-all duration-300 hover:opacity-100'
            >
              <PiTrashDuotone size={16} />
            </div>
            <span className='opacity-25'>{sections[widget]}</span>
            <span>{widget}</span>
          </div>
        ))}
      </div>
    );
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
          <div className='w-full lg:w-2/6'>
            <div className='my-4 flex w-full justify-between gap-x-3 pr-2'>
              <h5>Two column format</h5>
              <Toggle
                active={twoColumns}
                setActive={() => setTwoColumns(!twoColumns)}
                labelSr='Use two colum format'
              />
            </div>
            <div className='my-4 flex w-full justify-between gap-x-3 pr-2'>
              <h5>Allow duplicate sections</h5>
              <Toggle
                active={twoColumns}
                setActive={() => setTwoColumns(!twoColumns)}
                labelSr='Use two colum format'
              />
            </div>
            <div className='flex h-96 flex-wrap items-center gap-x-2'>
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
          </div>
          <div className={`mt-2 w-full lg:w-4/6`}>
            <div
              className={`h-[480px] w-full overflow-y-auto overflow-x-hidden border-2 border-gray-400 lg:h-[600px] ${
                twoColumns && 'flex items-center'
              }`}
            >
              <DropColumn
                onDrop={(e) => handleLeftOnDrop(e)}
                widgets={leftWidgets}
                position='left'
              />
              {twoColumns ? (
                <DropColumn
                  onDrop={(e) => handleRight0nDrop(e)}
                  widgets={rightWidgets}
                  position='right'
                />
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
