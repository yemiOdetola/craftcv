import React from 'react';
import { useEditorActions } from '@/utils/useEditorActions';
import { InlineEdit } from '@/components/editor';
import { useResume } from '@/store';

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
  const { saveWithPath } = useEditorActions();
  const resume = useResume();
  const certifications = resume.certifications;
  return (
    <div className='py-3'>
      <h2 className='font-poppins text-top-color text-lg font-bold'>
        Certifications
      </h2>
      <div className='flex flex-col space-y-1'>
        {certifications &&
          Object.keys(certifications).map((key: any, index: number) => {
            const certificate = certifications[key];
            return (
              <div
                className='flex flex-col'
                key={`resume-education-${index}`}
                onClick={() => setEditableSectionId(certificate.id)}
                onBlur={editBlurEvent}
              >
                <InlineEdit
                  text={certificate?.name}
                  editable={editableSection == certificate.id}
                  className='text-xs font-semibold text-gray-700'
                  placeholder='Certification name'
                  dottedActive
                  onSave={(val) =>
                    saveWithPath(['certifications', key], {
                      ...certificate,
                      name: val,
                    })
                  }
                />
                <div className='flex items-center gap-x-4'>
                  <InlineEdit
                    text={certificate?.issued}
                    editable={editableSection == certificate.id}
                    className='text-sm font-bold text-green-700'
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
                    editable={editableSection == certificate.id}
                    className='text-sm font-medium text-green-700'
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
                  editable={editableSection == certificate.id}
                  placeholder='Brief description'
                  className='text-sm font-medium text-gray-700'
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
    </div>
  );
}
