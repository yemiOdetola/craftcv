import React, { ReactNode, useState } from 'react';
import { PiPlusBold } from 'react-icons/pi';
import { basetemplate, ValidSections } from '@/store/basetemplate';
import { useEditorActions } from '@/utils/useEditorActions';

type HeadingProps = {
  children: ReactNode;
  id: ValidSections;
  className?: string;
};

const adder = [
  'education',
  'experiences',
  'projects',
  'certifications',
  'awards',
  'publications',
  'references',
];

export default function Heading({ children, id, className }: HeadingProps) {
  const [allowNew] = useState(adder.includes(id));
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState<number>(1);
  const { saveWithPath } = useEditorActions();

  const addSection = () => {
    let sectionData: any = basetemplate[id];
    const uid = Math.random().toString(36).substring(2, 15);
    sectionData = sectionData[Object.keys(sectionData)[0]];
    sectionData.id = uid;
    if (allowNew) {
      setCount(count + 1);
      saveWithPath([id, uid], sectionData);
    }
  };

  return (
    <>
      <div
        className='relative flex cursor-pointer items-center'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className={`text-lg font-bold ${className}`}>{children}</h2>
        {allowNew && isHovered ? (
          <button
            className='ml-2 inline-block opacity-0 transition-opacity duration-200'
            style={{ opacity: isHovered ? 1 : 0 }}
            onClick={addSection}
          >
            <PiPlusBold size={20} />
          </button>
        ) : null}
      </div>
    </>
  );
}