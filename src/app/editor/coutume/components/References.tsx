import React from 'react';
import { useEditorActions } from '@/utils/useEditorActions';
import { InlineEdit } from '@/components/editor';
import { useResume } from '@/store';
import Heading from './Heading';

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
  const { saveWithPath } = useEditorActions();
  const resume = useResume();
  const references = resume.references;
  return (
    <div className='py-3'>
      <Heading id='references'>References</Heading>
      <div className='flex flex-col space-y-1'>
        {references &&
          Object.keys(references).map((key: any, index: number) => {
            const reference = references[key];
            return (
              <div
                className='flex flex-col'
                key={`resume-education-${index}`}
                onClick={() => setEditableSectionId(reference.id)}
                onBlur={editBlurEvent}
              >
                <InlineEdit
                  text={reference?.name}
                  editable={editableSection == reference.id}
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
                  editable={editableSection == reference.id}
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
                  editable={editableSection == reference.id}
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
