import React, { useState } from 'react';

interface InlineEditProps {
  text: string;
  onSave: () => void;
}

const InlineEdit = ({ text, onSave }: InlineEditProps) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDoubleClick = () => {
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
      onDoubleClick={handleDoubleClick}
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
