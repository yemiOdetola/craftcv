import React, { useState, useEffect, useRef, MutableRefObject } from 'react';

interface InlineEditProps {
  text: string;
  className?: string;
  editable?: boolean;
  dottedActive?: boolean;
  style?: any;
  onSave: (val: string) => void;
  onParentClick?: () => void;
  onBlurEv?: () => void;
}

const InlineEdit = ({
  className,
  text,
  editable,
  style,
  dottedActive,
  onSave,
  onBlurEv,
  onParentClick,
}: InlineEditProps) => {
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

  // 

  return (
    <div
      className={`p-1 outline-none ${className} 
      ${editable && !dottedActive && 'border-b border-gray-600 py-1'}
      ${editable && dottedActive && 'underline decoration-2 decoration-dashed underline-offset-4'}`}
      style={style}
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
