import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { useEditorActions } from '@/utils/useEditorActions';
import { useMainStore } from '@/store';

interface InlineEditProps {
  text: string;
  useNumber?: boolean;
  className?: string;
  placeholder?: string; //TODO - make this compulsory
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
  placeholder,
  dottedActive,
  elementPath,
  onSave,
  onBlurEv,
  onParentClick,
}: InlineEditProps) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const { setLoading } = useMainStore();
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
    setLoading(false);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      if (elementPath && elementPath.length > 0) {
        e.preventDefault();
        addNewInputField([...elementPath]);
        onSave(editedText);
      }
    } else if (e.key === 'Backspace' && editedText === '') {
      e.preventDefault();
      if (elementPath && elementPath.length > 0) {
        removeInputField([...elementPath]);
      }
    } else {
      setLoading(true);
      setTimeout(() => {
        const innerText = e.target.innerText;
        // TODO: Create a fix
        // if (useNumber || /^\d+$/.test(innerText)) {
        //   setEditedText(innerText);
        // }
        setEditedText(innerText);
      }, 100);
    }
  };

  return (
    <div
      className={`pseudo-element outline-none ${className} 
      ${editable && !dottedActive && 'border-b border-gray-600 py-0.5'}
      ${
        editable &&
        dottedActive &&
        'underline decoration-dashed decoration-2 underline-offset-4'
      }`}
      placeholder={placeholder || 'Type here...'}
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
