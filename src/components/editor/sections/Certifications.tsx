import React, { useState } from 'react';
import { PiTrashSimpleDuotone } from 'react-icons/pi';
import { useEditorActions } from '@/utils/useEditorActions';
import { InlineEdit } from '@/components/editor';
import { useResume } from '@/store';
import Heading from './Heading';

interface CertificationsProps {
  color1: string;
  editableSection: null | string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: string) => void;
}

export default function Certifications({
  editableSection,
  color1,
  editBlurEvent,
  setEditableSectionId,
}: CertificationsProps) {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const { saveWithPath, removeSection } = useEditorActions();
  const resume = useResume();
  const certifications = resume.certifications;

  return (
    <div className='py-3'>
      <Heading id='certifications'>Certifications</Heading>
      {certifications &&
        Object.keys(certifications).map((key: any, index: number) => {
          const certificate = certifications[key];
          return (
            <div
              className='relative mb-2 text-sm'
              key={`certification-${index}`}
              onClick={() => setEditableSectionId(key)}
              onBlur={editBlurEvent}
              onMouseEnter={() => setIsHovered(key)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {isHovered == key ? (
                <button
                  className='absolute right-4 inline-block p-2 opacity-0 transition-opacity duration-200'
                  style={{ opacity: isHovered ? 1 : 0 }}
                  onClick={() => removeSection(key, 'certifications')}
                >
                  <PiTrashSimpleDuotone size={20} />
                </button>
              ) : null}
              <InlineEdit
                text={certificate?.name}
                editable={editableSection == key}
                className='font-semibold'
                placeholder='Certification name'
                dottedActive
                onSave={(val) =>
                  saveWithPath(['certifications', key], {
                    ...certificate,
                    name: val,
                  })
                }
              />
              <div className='flex items-center gap-x-2 text-xs font-bold text-green-700'>
                <InlineEdit
                  text={certificate?.issued}
                  editable={editableSection == key}
                  style={{ color: `#${color1}` }}
                  placeholder='Date Issued'
                  onSave={(val) =>
                    saveWithPath(['certifications', key], {
                      ...certificate,
                      issued: val,
                    })
                  }
                />
                <div>-</div>
                <InlineEdit
                  text={certificate?.expiry}
                  editable={editableSection == key}
                  style={{ color: `#${color1}` }}
                  placeholder='Expiry date'
                  onSave={(val) =>
                    saveWithPath(['certifications', key], {
                      ...certificate,
                      expiry: val,
                    })
                  }
                />
              </div>
              <InlineEdit
                text={certificate?.description}
                editable={editableSection == key}
                placeholder='Brief description'
                className='font-medium'
                onSave={(val) =>
                  saveWithPath(['certifications', key], {
                    ...certificate,
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
