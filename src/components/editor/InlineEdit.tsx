import React, {
  useState,
  useEffect,
  useRef,
  MutableRefObject,
  KeyboardEvent,
} from 'react';

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
    console.log('editedText::::::::', editedText);
    const nextActiveElement = document.activeElement;
    if (nextActiveElement && inputRef.current.contains(nextActiveElement)) {
      return;
    }
    setEditing(false);
    onBlurEv && onBlurEv();
    onSave(editedText);
  };

  // const handleKeyDown = (e: any) => {
  //   console.log('e: ', e);
  //   setEditedText(e.target.innerHTML);
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     console.log('enter key is pressed');
  //   } else if (e.key === 'Backspace') {
  //     if (editedText === '') {
  //       e.preventDefault();
  //     }
  //   }
  // };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('enter key is pressed');
      onSave(editedText); // Save the edited text when Enter is pressed
      setEditing(false);
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
      contentEditable={editable}
      suppressContentEditableWarning={true}
    >
      {text}
    </div>
  );
};

export default InlineEdit;
