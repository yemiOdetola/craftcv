import React, { useState } from 'react';
import { useEditorActions } from '@/utils/useEditorActions';
import { InlineEdit } from '@/components/editor';
import { useResume } from '@/store';
import Heading from './Heading';
import { PiTrashSimpleDuotone } from 'react-icons/pi';

interface ReferenceProps {
  color1: string;
  editableSection: null | string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
}

export default function Reference({
  editableSection,
  color1,
  editBlurEvent,
  setEditableSectionId,
}: ReferenceProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { saveWithPath, removeFromPath } = useEditorActions();
  const resume = useResume();
  const references = resume.references;
  const removeSection = (key: string) => {
    removeFromPath(['references', key]);
  };

  return (
    <div className='py-3'>
      <Heading id='references'>References</Heading>
      <div className='flex flex-col space-y-1'>
        {references &&
          Object.keys(references).map((key: any, index: number) => {
            const reference = references[key];
            return (
              <div
                className='relative mb-6 flex flex-col'
                key={`resume-education-${index}`}
                onClick={() => setEditableSectionId(key)}
                onBlur={editBlurEvent}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? (
                  <button
                    className='absolute right-4 inline-block p-2 opacity-0 transition-opacity duration-200'
                    style={{ opacity: isHovered ? 1 : 0 }}
                    onClick={() => removeSection(key)}
                  >
                    <PiTrashSimpleDuotone size={20} />
                  </button>
                ) : null}
                <InlineEdit
                  text={reference?.name}
                  editable={editableSection == key}
                  className='text-xs font-semibold text-gray-700'
                  placeholder='Reference name (Position)'
                  dottedActive
                  onSave={(val) =>
                    saveWithPath(['references', key], {
                      ...reference,
                      name: val,
                    })
                  }
                />
                <InlineEdit
                  text={reference?.relationship}
                  editable={editableSection == key}
                  className='text-sm font-bold text-green-700'
                  style={{ color: `#${color1}` }}
                  placeholder='Relationship'
                  onSave={(val) =>
                    saveWithPath(['references', key], {
                      ...reference,
                      relationship: val,
                    })
                  }
                />
                <InlineEdit
                  text={reference?.contact}
                  editable={editableSection == key}
                  placeholder='Email address or Phone number'
                  className='text-sm font-medium text-gray-700'
                  onSave={(val) =>
                    saveWithPath(['references', key], {
                      ...reference,
                      contact: val,
                    })
                  }
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
