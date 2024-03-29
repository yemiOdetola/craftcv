'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  PiBookOpenText,
  PiPenDuotone,
  // PiCircleHalfBold,
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
import { Button, Container, Loading, Toggle } from '@/components/common';
import { BottomNavigation } from '@/components/templates';
import { basetemplate } from '@/store/basetemplate';
import { useCustomLayout, useLoading, useMainStore, useResume } from '@/store';
import { isObjectEmpty } from '@/utils/helper';

const sections: any = {
  education: <PiBookOpenText size={48} />,
  experiences: <PiPenDuotone size={48} />,
  awards: <PiMedalDuotone size={48} />,
  interests: <PiParachuteDuotone size={48} />,
  publications: <PiBooksDuotone size={48} />,
  projects: <PiSwatchesDuotone size={48} />,
  certifications: <PiCertificateDuotone size={48} />,
  languages: <PiCurrencyCnyDuotone size={48} />,
  references: <PiDatabaseDuotone size={48} />,
  'technical skills': <PiShapesFill size={48} />,
  'soft skills': <PiArrowsInDuotone size={48} />,
  // volunteers: <PiFlaskDuotone size={48} />,
  // conferences: <PiCircleHalfBold size={48} />,
};

interface DropColumnProps {
  widgets: string[];
  position: 'left' | 'right';
  // onDrop: (e: any) => void;
  // handleReorder: (e: any) => void;
}
const vh = 648;
export default function CustomTemplate() {
  const router = useRouter();
  const resume = useResume();
  const customLayout = useCustomLayout();
  const {
    updateCustomLayout,
    updateLayoutDimension,
    setLoading,
    updateResume,
  } = useMainStore();
  const [leftWidgets, setLeftWidgets] = useState<string[]>([]);
  const [rightWidgets, setRightWidgets] = useState<string[]>([]);
  const [rwh, setRWh] = useState<any>(`[${vh}px]`);
  const [lwh, setLWh] = useState<any>(vh);
  const [editInProgress, setEditInProgress] = useState(false);
  const [twoColumns, setTwoColumns] = useState<boolean>(true);
  const [populate, setPopulate] = useState<boolean>(false);
  const dragStartWidget = useRef<number>(0);
  const dragToWidget = useRef<number>(0);
  const loading = useLoading();
  const setLayout = (layout: string) => updateCustomLayout(layout);

  useEffect(() => {
    if (!isObjectEmpty(customLayout) && customLayout?.layout) {
      if (customLayout?.layout?.left) {
        setLeftWidgets(customLayout.layout.left);
      }
      if (customLayout?.layout?.right) {
        setRightWidgets(customLayout.layout.right);
      }
      setEditInProgress(true);
    }
  }, [customLayout]);

  useEffect(() => {
    setLWh(vh / leftWidgets.length - 2);
  }, [lwh, leftWidgets]);

  useEffect(() => {
    setRWh(vh / rightWidgets.length - 2);
  }, [rwh, rightWidgets]);

  const handle0nDrag = (e: React.DragEvent, widgetType: string) => {
    e.dataTransfer.setData('widgetType', widgetType);
  };

  const handleOnDrop = (e: any, position: string) => {
    const widgetType = e.dataTransfer.getData('widgetType') as string;
    const rlWidgets = [...leftWidgets, ...rightWidgets];
    // TODO: hmm, should I accept duplicate widget on seperate columns?? - nah, don't
    if (widgetType !== '' && !rlWidgets.includes(widgetType)) {
      if (position == 'left') {
        setLeftWidgets([...leftWidgets, widgetType]);
      } else {
        setRightWidgets([...rightWidgets, widgetType]);
      }
    } else {
      console.log('errrhhhmmmmm, nope!');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleReorder = (e: any, position: string) => {
    dragStartWidget.current = 0;
    const lwc = [...leftWidgets];
    const rwc = [...rightWidgets];
    if (position == 'left') {
      const temp = lwc[dragStartWidget.current];
      lwc[dragStartWidget.current] = lwc[dragToWidget.current];
      lwc[dragToWidget.current] = temp;
      setLeftWidgets(lwc);
    } else {
      const temp = rwc[dragStartWidget.current];
      rwc[dragStartWidget.current] = rwc[dragToWidget.current];
      rwc[dragToWidget.current] = temp;
      setRightWidgets(rwc);
    }
  };

  const onDragEnter = (e: any, position: string, index: number) => {
    if (e?.target?.parentElement?.id !== position) {
      return;
    }
    dragToWidget.current = index;
  };

  const removeItemPosition = (idx: number, position: string) => {
    if (window.confirm('Remove this item?')) {
      if (position === 'right') {
        const rightWidgetsCopy = [...rightWidgets];
        rightWidgetsCopy.splice(idx, 1);
        setRightWidgets(rightWidgetsCopy);
      } else {
        const leftWidgetsCopy = [...leftWidgets];
        leftWidgetsCopy.splice(idx, 1);
        setLeftWidgets(leftWidgetsCopy);
      }
    }
  };

  const prepareTemplate = () => {
    setLoading(true);
    const customOptions: any = {};
    customOptions['base'] = {};
    const allSections = [...leftWidgets, ...rightWidgets];
    allSections.map((sec) => {
      sec = sec.toLowerCase();
      customOptions[sec] = basetemplate[sec];
      customOptions['base'][sec] = basetemplate[sec];
    });
    let placements: any = { left: [...leftWidgets] };
    if (twoColumns) {
      placements = { left: [...leftWidgets], right: [...rightWidgets] };
    }
    customOptions.layout = placements;
    customOptions.options = {
      twoColumns: twoColumns,
      populate: populate,
    };
    customOptions.custom = true;
    setLayout(customOptions);
    if (!editInProgress) {
      updateLayoutDimension(['w-6/12', 'w-6/12']);
    }

    if (!isObjectEmpty(resume)) {
      if (window.confirm('Do you want to clear your current progress?')) {
        updateResume({});
      }
    }
    router.push('/editor/coutume');
  };

  const DropColumn = ({ widgets, position }: DropColumnProps) => {
    return (
      <div
        className={`tpheight h-[480px] overflow-x-hidden p-2 ${
          twoColumns && 'w-1/2'
        }`}
        id={`${position}`}
        onDrop={(e) => handleOnDrop(e, position)}
        onDragOver={handleDragOver}
      >
        {widgets.map((widget, index) => (
          <div
            className={`widget relative flex w-full items-center border-2 border-dotted border-indigo-500 
            p-2 transition-all duration-300 hover:cursor-move hover:bg-indigo-50`}
            style={{ height: position == 'left' ? `${lwh}px` : `${rwh}px` }}
            key={index}
            draggable
            onDragStart={() => (dragStartWidget.current = index)}
            onDragEnter={(e) => onDragEnter(e, position, index)}
            onDragEnd={(e) => handleReorder(e, position)}
            onDragOver={handleDragOver}
          >
            <div
              onClick={() => removeItemPosition(index, position)}
              className='absolute right-1 top-1 cursor-pointer p-2 text-red-400 opacity-30 transition-all duration-300 hover:scale-150 hover:opacity-100'
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

  const toggleTwoColumns = () => {
    if (twoColumns == true) {
      setRightWidgets([]);
    }
    setTwoColumns(!twoColumns);
  };

  return (
    <main className='bg-white'>
      <Container className='min-h-screen bg-white'>
        <div className='mx-auto max-w-2xl pt-12 lg:mx-0 lg:mb-6'>
          <h2 className='font-display mb-8 text-4xl font-medium tracking-tighter text-blue-600 sm:text-4xl'>
            Create a custom template 🧱
          </h2>
          {/* <p>This is the order your resume template is going to display</p> */}
        </div>
        <div className='gap-x-7 align-top lg:flex'>
          <div className='w-full lg:w-2/6'>
            <div className='my-4 flex w-full justify-between gap-x-3 pr-2'>
              <h5>Two column format</h5>
              <Toggle
                active={twoColumns}
                setActive={toggleTwoColumns}
                labelSr='Use two colum format'
              />
            </div>
            <div className='my-4 flex w-full justify-between gap-x-3 pr-2'>
              <h5>Populate sections</h5>
              <Toggle
                active={populate}
                setActive={() => setPopulate(!populate)}
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
              className={`tpheight h-[480px] w-full overflow-y-auto overflow-x-hidden border-2 border-gray-400 ${
                twoColumns && 'flex items-center'
              }`}
            >
              <DropColumn widgets={leftWidgets} position='left' />
              {twoColumns ? (
                <DropColumn widgets={rightWidgets} position='right' />
              ) : null}
            </div>
          </div>
        </div>
      </Container>
      <BottomNavigation>
        <Button href='/' className='bg-gray-300 px-8 py-3 text-gray-500'>
          Cancel
        </Button>
        <Button
          onClick={prepareTemplate}
          className='w-36 px-2 py-3 transition-all duration-300'
          disabled={loading}
        >
          {loading ? <Loading className='h-4 w-4' /> : null}
          <span className='ml-2'>Continue</span>
        </Button>
      </BottomNavigation>
    </main>
  );
}
