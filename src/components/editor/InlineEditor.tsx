import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { useEditorActions } from '@/utils/useEditorActions';

interface InlineEditProps {
  text: string;
  className?: string;
  id?: string;
  editable?: boolean;
  dottedActive?: boolean;
  elementPath?: any[];
  style?: any;
  onSave: (val: string) => void;
  onParentClick?: () => void;
  onBlurEv?: () => void;
}

const InlineEdit = ({
  className,
  text,
  id,
  editable,
  style,
  dottedActive,
  elementPath,
  onSave,
  onBlurEv,
  onParentClick,
}: InlineEditProps) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const { addNewInputField, removeInputField } = useEditorActions();
  const inputRef: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleClick = () => {
    setEditing(true);
    onParentClick && onParentClick();
  };

  const handleBlur = () => {
    const nextActiveElement = document.activeElement;
    if (nextActiveElement && inputRef.current.contains(nextActiveElement)) {
      return;
    }
    setEditing(false);
    onBlurEv && onBlurEv();
    onSave(editedText);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (elementPath && elementPath.length > 0) {
        addNewInputField([...elementPath]);
        onSave(editedText);
      }
    } else if (e.key === 'Backspace' && editedText === '') {
      e.preventDefault();
      console.log('backspaced');
      if (elementPath && elementPath.length > 0) {
        removeInputField([...elementPath]);
      }
    } else {
      setTimeout(() => {
        setEditedText(e.target.innerText);
      }, 100);
    }
  };

  return (
    <div
      className={`p-1 outline-none ${className} 
      ${editable && !dottedActive && 'border-b border-gray-600 py-1'}
      ${
        editable &&
        dottedActive &&
        'underline decoration-dashed decoration-2 underline-offset-4'
      }`}
      style={style}
      ref={inputRef}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      id={id}
      contentEditable={editable}
      suppressContentEditableWarning={true}
    >
      {text}
    </div>
  );
};

export default InlineEdit;
