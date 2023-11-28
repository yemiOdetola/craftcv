'use client'
import { useEffect, useId, useState } from "react";
import { Tab } from "@headlessui/react";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common";
import placeholder from '@/assets/images/placeholder/generator.png'
import { BottomNavigation, Template } from "@/components/templates";


const templates: any = [
  {
    name: 'Most Popular',
    hits: '12090 hits',
    templates: [
      {
        name: 'Drakula Montenegro',
        image: placeholder,
      },
      {
        name: 'Jake "pluto" Paul',
        image: placeholder,
      },
      {
        name: 'Jake "pluto" Paul',
        image: placeholder,
      },
    ],
  },
  {
    name: 'User submissions',
    hits: '5239 hits',
    templates: [
      {
        name: 'Drakula Montenegro',
        image: placeholder,
      },
      {
        name: 'Jake "pluto" Paul',
        image: placeholder,
      },
      {
        name: 'Jake "pluto" Paul',
        image: placeholder,
      },
    ],
  },
  {
    name: 'All',
    hits: '18310 hits',
    templates: [
      {
        name: 'Drakula Montenegro',
        image: placeholder,
      },
      {
        name: 'Jake "pluto" Paul',
        image: placeholder,
      },
      {
        name: 'Jake "pluto" Paul',
        image: placeholder,
      },
    ],
  },
]

export default function Templates() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')
  const [selectedTemplate, selectTemplate] = useState<null | number>(null)
  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange(matches: any) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <main className="bg-white">
      <Container className="min-h-screen bg-white">
        {/* <Navbar /> */}
        <div className="mx-auto pt-12 max-w-2xl lg:mx-0">
          <h2 className="font-display text-2xl font-medium tracking-tighter text-blue-600 sm:text-3xl">
            Choose a template
          </h2>
        </div>

        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                templates.map((template: any, dayIndex: number) => (
                  <div key={template.name} className="relative lg:pl-8">
                    <div className="relative">
                      <div
                        className={`
                          font-mono text-sm
                          ${dayIndex === selectedIndex
                            ? 'text-blue-600'
                            : 'text-slate-500'}`
                        }
                      >
                        <Tab className="focus:outline-none">
                          <span className="absolute inset-0" />
                          {template.hits}
                        </Tab>
                      </div>
                      <span className={`mt-1.5 block text-2xl font-semibold tracking-tight 
                      ${dayIndex === selectedIndex
                          ? 'text-blue-800'
                          : 'text-slate-600'}`}>
                        {template.name}
                      </span>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {templates.map((template: any) => (
              <Tab.Panel
                key={template.name}
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 outline-none"
                unmount={false}
              >
                {template.templates.map((template: any, templateIndex: number) => (
                  <Template selected={selectedTemplate == templateIndex} select={() => selectTemplate(templateIndex)} key={templateIndex} {...{ template, templateIndex }} />
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
      <BottomNavigation from="/" to="craft" />
      <Footer />
    </main >
  );
}





