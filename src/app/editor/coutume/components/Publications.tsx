import React from 'react';
import { InlineEdit } from '@/components/editor';
import { getIconByType } from '../../Icons';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';
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
  const { saveWithPath } = useEditorActions();
  const resume = useResume();
  const publications = resume.publications;
  return (
    <div className='py-3'>
      <Heading>Publications</Heading>
      <div className='my-1'>
        {publications &&
          Object.keys(publications).map((key, index) => {
            const publication = publications[key];
            return (
              <div
                className='flex flex-col'
                key={`publication-${index}`}
                onClick={() => setEditableSectionId(publication.id)}
                onBlur={editBlurEvent}
              >
                <InlineEdit
                  text={publication?.type}
                  editable={editableSection == publication.id}
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
                  editable={editableSection == publication.id}
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
                  editable={editableSection == publication.id}
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
                  editable={editableSection == publication.id}
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
