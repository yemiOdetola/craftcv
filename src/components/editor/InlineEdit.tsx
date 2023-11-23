import React, { useState } from 'react';

interface InlineEditProps {
  text: string;
  onSave: (val: string) => void;
  className: string;
}

const InlineEdit = ({ className, text, onSave }: InlineEditProps) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

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
      {...{ className }}
      onClick={handleClick}
      onDoubleClick={handleClick}
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
