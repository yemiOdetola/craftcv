import React, { useState, useEffect, useRef, MutableRefObject } from 'react';

interface InlineEditProps {
  text: string;
  className?: string;
  onSave: (val: string) => void;
  onParentClick?: () => void;
  editable?: boolean;
  onBlurEv?: () => void;
}


const InlineEdit = ({ className, text, editable, onSave, onBlurEv, onParentClick }: InlineEditProps) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
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
    console.log('document.activeElement: ', document.activeElement);
    console.log('inputRef.current: ', inputRef.current);
    const nextActiveElement = document.activeElement;
    if (nextActiveElement && inputRef.current.contains(nextActiveElement)) {
      return;
    }

    setEditing(false);
    onBlurEv && onBlurEv();
    onSave(editedText);
  };


  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    setEditedText(e.target.innerText);
  };

  return (
    <div
      className={`outline-none p-1 ${className} 
      ${editable && 'underline underline-offset-4 py-2 decoration-dashed decoration-2'}`}
      ref={inputRef}
      onClick={handleClick}
      onBlur={handleBlur}
      contentEditable={editable}
      suppressContentEditableWarning={true}
      onChange={handleChange}
    >
      {text}
    </div>
  );
};

export default InlineEdit;
