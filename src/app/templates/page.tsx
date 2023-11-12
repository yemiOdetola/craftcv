'use client'
import { Footer } from "@/components/common/Footer";
import { Container, Navbar } from "@/components/common";
import Image from 'next/image';


import placeholder from '@/images/placeholder/generator.png'
import { useEffect, useId, useState } from "react";
import { Tab } from "@headlessui/react";

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
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState('horizontal')

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
                      <span className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900">
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
                className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                unmount={false}
              >
                {template.templates.map((template: any, templateIndex: number) => (
                  <div key={templateIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={
                          `absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6
                          ${[
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][templateIndex % 3]}`
                        }
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${templateIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={template.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-slate-900">
                      {template.name}
                    </h3>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
      <Footer />
    </main>
  );
}





