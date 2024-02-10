'use client';
import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Container, Loading } from '@/components/common';
import { BottomNavigation, Template } from '@/components/templates';
import {
  amitpachange,
  thomashighbaugh,
  jakeryan,
  odetolaazeez,
} from '@/store/resume';
import { useLoading, useMainStore, useResume, useResumeType } from '@/store';
import { isObjectEmpty } from '@/utils/helper';

const templates: any = [
  {
    name: 'Most Popular',
    hits: '12090 hits',
    templates: [
      {
        name: 'Amit Pachange',
        image: '/images/amit.png',
        href: '/editor/amit-pachange',
        base: amitpachange,
        idx: 'amit-pachange',
      },
      {
        name: 'Jake Ryan',
        image: '/images/jake.png',
        href: '/editor/jake-ryan',
        base: jakeryan,
        idx: 'jake-ryan',
      },
      {
        name: 'Thomas Highbaugh',
        image: '/images/thomas.png',
        href: '/editor/thomas-highbaugh',
        base: thomashighbaugh,
        idx: 'thomas-highbaugh',
      },
      {
        name: 'Odetola Azeez',
        image: '/images/azeez.png',
        href: '/editor/odetola-azeez',
        base: odetolaazeez,
        idx: 'odetola-azeez',
      },
    ],
  },
  {
    name: 'User submissions',
    hits: '5239 hits',
    templates: [
      {
        name: 'Thomas Highbaugh',
        image: '/images/thomas.png',
        href: '/editor/thomas-highbaugh',
        base: thomashighbaugh,
        idx: 'thomas-highbaugh',
      },
      {
        name: 'Amit Pachange',
        image: '/images/amit.png',
        href: '/editor/amit-pachange',
        base: amitpachange,
        idx: 'amit-pachange',
      },
      {
        name: 'Odetola Azeez',
        image: '/images/azeez.png',
        href: '/editor/odetola-azeez',
        base: odetolaazeez,
        idx: 'odetola-azeez',
      },
      {
        name: 'Jake Ryan',
        image: '/images/jake.png',
        href: '/editor/jake-ryan',
        base: jakeryan,
        idx: 'jake-ryan',
      },
    ],
  },
];

export default function Templates() {
  const { updateResume, updateCustomLayout, updateResumeType } = useMainStore();
  const router = useRouter();
  const resume = useResume();
  const resumeType = useResumeType();
  const [tabOrientation, setTabOrientation] = useState('horizontal');
  const [selectedTemplate, selectTemplate] = useState<any>(null);
  const setLayout = (layout: any) => updateCustomLayout(layout);
  const setType = (type: string) => updateResumeType(type);
  const loading = useLoading();

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange(matches: any) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  const gotoTemplate = () => {
    const customOptions: any = {};
    customOptions.custom = false;
    setLayout(customOptions);
    setType(selectedTemplate.idx);

    if (resumeType !== selectedTemplate.idx && !isObjectEmpty(resume)) {
      if (window.confirm('Do you want to clear your saved resume?')) {
        updateResume({});
      }
    }
    updateResume(selectedTemplate.base);
    router.push(selectedTemplate.href);
  };

  return (
    <main className='bg-white'>
      <Container className='min-h-screen bg-white pb-32'>
        <div className='mx-auto flex items-baseline gap-x-4 pt-24 lg:mx-0'>
          <h2 className='font-display text-4xl font-medium tracking-tighter text-blue-600 md:text-5xl'>
            Choose a template
          </h2>
          <Link
            href='/templates/custom'
            className='text-xl font-medium text-gray-700 underline'
          >
            or customize a layout
          </Link>
        </div>
        <Tab.Group
          as='div'
          className='mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-12 lg:grid-cols-4'
          vertical={tabOrientation === 'vertical'}
        >
          <div className='relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0'>
            <div className='absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block' />
            <Tab.List className='grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left'>
              {({ selectedIndex }) =>
                templates.map((template: any, dayIndex: number) => (
                  <div key={template.name} className='relative lg:pl-8'>
                    <div className='relative'>
                      <div className='font-mono text-sm text-gray-500'>
                        <Tab className='focus:outline-none'>
                          <span className='absolute inset-0' />
                          {template.hits}
                        </Tab>
                      </div>
                      <span
                        className={`mt-1.5 block text-2xl font-semibold tracking-tight 
                      ${
                        dayIndex === selectedIndex
                          ? 'text-blue-700'
                          : 'text-slate-600'
                      }`}
                      >
                        {template.name}
                      </span>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className='lg:col-span-3'>
            {templates.map((template: any) => (
              <Tab.Panel
                key={template.name}
                className='grid grid-cols-1 gap-x-8 gap-y-10 outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3'
                unmount={false}
              >
                {template.templates.map((template: any, index: number) => (
                  <Template
                    selected={selectedTemplate?.name == template.name}
                    select={() => selectTemplate(template)}
                    key={index}
                    {...{ template, index }}
                  />
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>

      <BottomNavigation>
        <Button href='-1' className='bg-transparent px-8 py-3 text-red-600'>
          Cancel
        </Button>

        <Button
          onClick={gotoTemplate}
          className='w-36 px-2 py-3 transition-all duration-300'
          disabled={loading || !selectedTemplate}
        >
          {loading ? <Loading className='h-4 w-4' /> : null}
          <span className='ml-2'>Continue</span>
        </Button>
      </BottomNavigation>
    </main>
  );
}
