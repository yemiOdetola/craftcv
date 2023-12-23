import React from 'react';
import { InlineEdit } from '@/components/editor';
import { useEditorActions } from '@/utils/useEditorActions';
import { useResume } from '@/store';
import Heading from './Heading';

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
      <Heading id='interests'>Executive Summary</Heading>
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
