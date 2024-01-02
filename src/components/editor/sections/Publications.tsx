import React, { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const { saveWithPath, removeFromPath } = useEditorActions();
  const resume = useResume();
  const publications = resume.publications;

  const removeSection = (key: string) => {
    removeFromPath(['publications', key]);
  };

  return (
    <div className='py-3'>
      <Heading id='publications'>Publications</Heading>
      {publications &&
        Object.keys(publications).map((key, index) => {
          const publication = publications[key];
          return (
            <div
              className='relative mb-2 text-sm'
              key={`publication-${index}`}
              onClick={() => setEditableSectionId(key)}
              onBlur={editBlurEvent}
              onMouseEnter={() => setIsHovered(key)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {isHovered == key ? (
                <button
                  className='absolute right-4 inline-block p-2 opacity-0 transition-opacity duration-200'
                  style={{ opacity: isHovered ? 1 : 0 }}
                  onClick={() => removeSection(key)}
                >
                  <PiTrashSimpleDuotone size={20} />
                </button>
              ) : null}
              <InlineEdit
                text={publication?.type}
                editable={editableSection == key}
                className='font-light'
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
                className='font-medium'
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
                className='font-light'
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
  );
}
