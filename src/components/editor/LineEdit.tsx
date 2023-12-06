import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { useResume } from '@/store';

interface LineEditProps {
  text: string;
  className?: string;
  editable?: boolean;
  dottedActive?: boolean;
  style?: any;
  id?: any;
  onSave: (val: string) => void;
  onParentClick?: () => void;
  onBlurEv?: () => void;
}

const LineEdit = ({
  className,
  text,
  editable,
  style,
  dottedActive,
  onSave,
  id,
  onParentClick,
}: LineEditProps) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const inputRef: MutableRefObject<any> = useRef(null);
  const resume = useResume();

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
    onSave(editedText);
  };

  const addNewInputField = (rms: any, pathArray: any[]) => {
    if (!Array.isArray(pathArray) || pathArray.length === 0) {
      return rms;
    }
    const updateRecursively = (obj: any, path: string[]) => {
      if (path.length === 1) {
        obj[path[0]].push('');
        return;
      }
      if (!obj[path[0]]) {
        obj[path[0]] = {};
      }
      updateRecursively(obj[path[0]], path.slice(1));
    };
    updateRecursively(rms, pathArray);
    setTimeout(() => {
      const newFieldIndex =
        rms.experiences.experience0.responsibilities.length - 1;
      const newFieldRef = document.getElementById(
        `responsibility-${newFieldIndex}`
      );
      if (newFieldRef) {
        newFieldRef.focus();
      }
    }, 100);
    onSave(editedText);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('enter key is prsed');
      addNewInputField(resume, [
        'experiences',
        'experience0',
        'responsibilities',
      ]);
    } else if (e.key === 'Backspace' && editedText === '') {
      e.preventDefault();
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

export default LineEdit;
