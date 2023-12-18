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
  const [count, setCount] = useState<number>(1);
  const { saveWithPath } = useEditorActions();

  // const getUniqueID = () => {
  //   return Math.random().toString(36).substring(2, 15);
  // };

  const addSection = () => {
    let sectionData: any = basetemplate[id];
    sectionData = sectionData[Object.keys(sectionData)[0]];
    let uid = Math.random().toString(36).substring(2, 15);
    sectionData.id = uid;
    if (allowNew) {
      setCount(count + 1);
      saveWithPath([id, uid], sectionData);
    }
  };

  return (
    <div className='flex cursor-pointer items-center'>
      <h2 className={`text-lg font-bold ${className}`}>{children}</h2>
      {allowNew ? (
        <button className='p-2' onClick={addSection}>
          <PiPlusBold size={20} />
        </button>
      ) : null}
    </div>
  );
}
