import React, { useId } from 'react';
import Image from 'next/image';

interface TemplateProps {
  template: any;
  templateIndex: number;
  selected?: boolean;
  select?: () => void;
}

export default function Template({
  template,
  templateIndex,
  select,
  selected,
}: TemplateProps) {
  const id = useId();
  console.log('selected', selected);
  return (
    <div
      key={templateIndex}
      className='cursor-pointer transition duration-300'
      onClick={select}
    >
      <div className='rounded-4xl group relative h-[21rem] transform overflow-hidden'>
        <div
          className={`inset-0 rounded ${
            selected && 'border-2 border-l-4 border-blue-600'
          }`}
        >
          <Image
            className='inset-0 h-full w-full object-cover transition group-hover:outline-blue-600'
            src={template.image}
            alt='template preview'
            priority
            width={1020}
            height={1230}
          />
        </div>
      </div>
      <span className='font-display mt-2 block text-sm tracking-tight text-gray-500'>
        {template.name}
      </span>
    </div>
  );
}
