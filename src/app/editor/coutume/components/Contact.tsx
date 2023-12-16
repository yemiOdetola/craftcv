import React from 'react';
import { InlineEdit } from '@/components/editor';
import { getIconByType } from '../../Icons';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';

interface ContactProps {
  editableSection: null | string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
}

export default function Contact({
  editableSection,
  editBlurEvent,
  setEditableSectionId,
}: ContactProps) {
  const { saveWithPath } = useEditorActions();
  const resume = useResume();
  const contact = resume.contact;
  return (
    <div className='py-3'>
      <h2 className='font-poppins text-top-color text-lg font-bold'>Contact</h2>
      <div
        className='my-1'
        onClick={() => setEditableSectionId('contact')}
        onBlur={editBlurEvent}
      >
        {contact &&
          Object.keys(contact).map((key, index) => {
            if (contact[key] !== 'contact') {
              return (
                <div
                  className='mb-1 flex items-center'
                  key={`resume-contact-${index}`}
                >
                  <span className='font-sm w-6 text-gray-700'>
                    {getIconByType(key)}
                  </span>
                  <InlineEdit
                    text={contact[key]}
                    editable={editableSection == 'contact'}
                    className='ml-2'
                    dottedActive
                    onSave={(val) => saveWithPath(['contact', key], val)}
                  />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
