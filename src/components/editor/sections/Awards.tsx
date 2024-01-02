import React, { useState } from 'react';
import { InlineEdit } from '@/components/editor';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';
import Heading from './Heading';
import { PiTrashSimpleDuotone } from 'react-icons/pi';

interface AwardsProps {
  editableSection: null | string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
  color1: string;
}

export default function Awards({
  editableSection,
  editBlurEvent,
  setEditableSectionId,
  color1,
}: AwardsProps) {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const { saveWithPath, removeFromPath } = useEditorActions();
  const resume = useResume();
  const awards = resume.awards;

  const removeSection = (key: string) => {
    removeFromPath(['awards', key]);
  };

  return (
    <div className='py-2'>
      <Heading id='awards'>Awards</Heading>
      <div onBlur={editBlurEvent}>
        {awards &&
          Object.keys(awards).map((key, index) => {
            const award = awards[key];
            return (
              <div
                className='relative mb-2 text-sm'
                key={`award-${index}`}
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
                  text={award?.title}
                  editable={editableSection == key}
                  className='font-light'
                  placeholder='Award Name/Title'
                  dottedActive
                  onSave={(val) =>
                    saveWithPath(['awards', key], {
                      ...award,
                      title: val,
                    })
                  }
                />
                <InlineEdit
                  text={award?.year}
                  editable={editableSection == key}
                  placeholder='Year awarded'
                  onSave={(val) =>
                    saveWithPath(['awards', key], {
                      ...award,
                      year: val,
                    })
                  }
                />
                <InlineEdit
                  text={award?.institution}
                  editable={editableSection == key}
                  placeholder='Institution the award is issued from'
                  className='text-xs font-bold text-green-700'
                  style={{ color: `#${color1}` }}
                  onSave={(val) =>
                    saveWithPath(['awards', key], {
                      ...award,
                      institution: val,
                    })
                  }
                />
                <InlineEdit
                  text={award?.description}
                  editable={editableSection == key}
                  placeholder='Brief description'
                  className='font-light'
                  onSave={(val) =>
                    saveWithPath(['awards', key], {
                      ...award,
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
