import React, { useId } from 'react'
import Image from 'next/image';

interface TemplateProps {
  template: any;
  templateIndex: number;
  selected?: boolean;
  select?: () => void;
}

export default function Template({ template, templateIndex, select, selected }: TemplateProps) {
  const id = useId();
  console.log('selected', selected);
  return (
    <div key={templateIndex} className="transition duration-300 cursor-pointer" onClick={select}>
      <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
        <div className={`absolute inset-0 rounded ${selected && 'border-2 border-l-4 border-blue-600'}`}>
          <Image
            className="absolute inset-0 h-full w-full object-cover transition group-hover:outline-blue-600"
            src={template.image}
            alt=""
            priority
            sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      </div>
      <span className="mt-4 font-display text-sm tracking-tight text-gray-500">
        {template.name}
      </span>
    </div>
  )
}
