import React from 'react';
import { InlineEdit } from '@/components/editor';
import { getIconByType } from '../../Icons';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';

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
  const { saveWithPath } = useEditorActions();
  const resume = useResume();
  const awards = resume.awards;

  return (
    <div className='py-3'>
      <h2 className='font-poppins text-top-color text-lg font-bold'>Awards</h2>
      <div className='my-1' onBlur={editBlurEvent}>
        {awards &&
          Object.keys(awards).map((key, index) => {
            const award = awards[key];
            return (
              <div
                className='flex flex-col'
                key={`award-${index}`}
                onClick={() => setEditableSectionId(award.id)}
                onBlur={editBlurEvent}
              >
                <InlineEdit
                  text={award?.title}
                  editable={editableSection == award.id}
                  className='text-xs font-light text-gray-700'
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
                  editable={editableSection == award.id}
                  className='text-sm'
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
                  editable={editableSection == award.id}
                  placeholder='Institution the award is issued from'
                  className='text-sm font-bold text-green-700'
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
                  editable={editableSection == award.id}
                  placeholder='Brief description'
                  className='text-sm text-gray-700 font-light'
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
