import React from 'react';
import { PiTrashSimpleDuotone } from 'react-icons/pi';
import { useResume } from '@/store';
import { InlineEdit } from '@/components/editor';
import { useEditorActions } from '@/utils/useEditorActions';
import Heading from './Heading';

interface ContactProps {
  color1: string;
  editableSection: null | string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
}

export default function Contact({
  editableSection,
  editBlurEvent,
  setEditableSectionId,
  color1,
}: ContactProps) {
  const { saveWithPath, removeFromPath } = useEditorActions();
  const resume = useResume();
  const publications = resume.publications;

  const removeSection = (key: string) => {
    removeFromPath(['publications', key]);
  };

  return (
    <div className='py-3'>
      <Heading id='publications'>Publications</Heading>
      <div className='my-1'>
        {publications &&
          Object.keys(publications).map((key, index) => {
            const publication = publications[key];
            return (
              <div
                className='flex flex-col'
                key={`publication-${index}`}
                onClick={() => setEditableSectionId(key)}
                onBlur={editBlurEvent}
              >
                <button className='p-2' onClick={() => removeSection(key)}>
                  <PiTrashSimpleDuotone size={20} />
                </button>
                <InlineEdit
                  text={publication?.type}
                  editable={editableSection == key}
                  className='text-xs font-light text-gray-700'
                  placeholder='Publication (Publisher, Issues, Pages)'
                  dottedActive
                  onSave={(val) =>
                    saveWithPath(['publications', key], {
                      ...publication,
                      type: val,
                    })
                  }
                />
                <InlineEdit
                  text={publication?.title}
                  editable={editableSection == key}
                  className='text-sm'
                  style={{ color: `#${color1}` }}
                  placeholder='Publication title'
                  onSave={(val) =>
                    saveWithPath(['publications', key], {
                      ...publication,
                      title: val,
                    })
                  }
                />
                <InlineEdit
                  text={publication?.institution}
                  editable={editableSection == key}
                  placeholder='List of authors'
                  className='text-xs font-medium'
                  onSave={(val) =>
                    saveWithPath(['publications', key], {
                      ...publication,
                      authors: val,
                    })
                  }
                />
                <InlineEdit
                  text={publication?.description}
                  editable={editableSection == key}
                  placeholder='Brief description'
                  className='text-sm font-light text-gray-700'
                  onSave={(val) =>
                    saveWithPath(['publications', key], {
                      ...publication,
                      description: val,
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
