import React, { useState, useEffect, useRef, MutableRefObject } from 'react';

interface InlineEditProps {
  text: string;
  className: string;
  onSave: (val: string) => void;
  onParentClick?: () => void;
  editable?: boolean;
  blurEv?: () => void;
}


const InlineEdit = ({ className, text, editable, onSave, blurEv, onParentClick }: InlineEditProps) => {
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
    setEditing(false);
    blurEv && blurEv();
    onSave(editedText);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSpanElement>) => {
    setEditedText(e.target.innerText);
  };

  return (
    <span
      className={`outline-none ${className} ${editable && 'underline underline-offset-4 decoration-dashed decoration-1'}`}
      ref={inputRef}
      onClick={handleClick}
      onBlur={handleBlur}
      contentEditable={editable}
      suppressContentEditableWarning={true}
      onChange={handleChange}
    >
      {text}
    </span>
  );
};

export default InlineEdit;
