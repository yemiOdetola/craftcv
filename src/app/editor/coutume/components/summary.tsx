import React from 'react';
import { InlineEdit } from '@/components/editor';

interface SummaryProps {
  text: string;
  editable: boolean;
  editBlurEvent: (e: any) => void;
  setEditableSectionId: () => void;
  onSave: () => void;
}

export default function Summary({
  text,
  editable,
  editBlurEvent,
  setEditableSectionId,
  onSave,
}: SummaryProps) {
  return (
    <div onClick={setEditableSectionId} onBlur={(e) => editBlurEvent(e)}>
      <InlineEdit text={text} editable={editable} onSave={onSave} />
    </div>
  );
}
