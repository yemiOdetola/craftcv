import React, { useState, useEffect, useRef, MutableRefObject } from 'react';

interface InlineEditProps {
  text: string;
  onSave: (val: string) => void;
  className: string;
}


const InlineEdit = ({ className, text, onSave }: InlineEditProps) => {
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
  };

  const handleBlur = () => {
    setEditing(false);
    onSave(editedText);
  };

  const handleChange = (e: any) => {
    setEditedText(e.target.innerText);
  };

  return (
    <div
      className={`outline-none ${className} ${isEditing && 'underline underline-offset-4 decoration-dashed decoration-1'}`}
      ref={inputRef}
      onClick={handleClick}
      // onDoubleClick={handleClick}
      onBlur={handleBlur}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      onChange={handleChange}
    >
      {text}
    </div>
  );
};

export default InlineEdit;
