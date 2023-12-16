import React from 'react';
import { InlineEdit } from '@/components/editor';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';

interface SummaryProps {
  editableSection: null | string;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: (id: any) => void;
}

export default function Summary({
  editableSection,
  editBlurEvent,
  setEditableSectionId,
}: SummaryProps) {
  const resume = useResume();
  const summary = resume.summary;
  const { saveWithPath } = useEditorActions();
  return (
    <div className='py-3'>
      <h2 className='font-poppins text-top-color text-lg font-bold'>
        Executive Summary
      </h2>
      <div
        onClick={() => setEditableSectionId('about')}
        onBlur={(e) => editBlurEvent(e)}
      >
        <InlineEdit
          text={summary?.text}
          editable={(editableSection = summary.id)}
          onSave={(val) => saveWithPath(['about', 'summary'], val)}
        />
      </div>
    </div>
  );
}
