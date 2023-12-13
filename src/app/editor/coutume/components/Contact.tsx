import React from 'react';
import { InlineEdit } from '@/components/editor';
import { getIconByType } from '../../Icons';

interface ContactProps {
  contact: any;
  editable: boolean;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: () => void;
  onSave: () => void;
}

export default function Contact({
  contact,
  editable,
  editBlurEvent,
  setEditableSectionId,
  onSave,
}: ContactProps) {
  return (
    <div className='my-1' onClick={setEditableSectionId} onBlur={editBlurEvent}>
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
                  editable={editable}
                  className='ml-2'
                  dottedActive
                  onSave={onSave}
                />
              </div>
            );
          }
        })}
    </div>
  );
}
