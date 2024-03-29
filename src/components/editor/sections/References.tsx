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
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const { saveWithPath, removeSection } = useEditorActions();
  const resume = useResume();
  const references = resume.references;

  return (
    <div className='py-3'>
      <Heading id='references'>References</Heading>
      {references &&
        Object.keys(references).map((key: any, index: number) => {
          const reference = references[key];
          return (
            <div
              className='relative mb-2 text-sm'
              key={`resume-education-${index}`}
              onClick={() => setEditableSectionId(key)}
              onBlur={editBlurEvent}
              onMouseEnter={() => setIsHovered(key)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {isHovered == key ? (
                <button
                  className='absolute right-4 inline-block p-2 opacity-0 transition-opacity duration-200'
                  style={{ opacity: isHovered ? 1 : 0 }}
                  onClick={() => removeSection(key, 'references')}
                >
                  <PiTrashSimpleDuotone size={20} />
                </button>
              ) : null}
              <InlineEdit
                text={reference?.name}
                editable={editableSection == key}
                className='font-semibold'
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
                className='font-bold text-green-700'
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
                className='font-medium'
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
  );
}
