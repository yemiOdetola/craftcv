import { Popoverlay } from '../common';

export function EditorGeneralMenu() {
  const addRandomtheme = () => {
    console.log('add theme');
  };

  const removeTheme = () => {
    console.log('remove theme');
  };

  const changeLaytout = () => {
    console.log('changeLaytout:');
  };
  const items = [
    {
      label: 'Change Layout',
      action: changeLaytout,
    },
    {
      label: 'Add random theme',
      action: addRandomtheme,
    },
    {
      label: 'Remove Theme',
      action: removeTheme,
    },
  ];
  return (
    <Popoverlay title='General'>
      <div className='relative bg-white p-4'>
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <button
              key={`general-${index}`}
              onClick={item.action}
              className={`item flex w-full cursor-pointer py-3 pl-3 ${
                isLastItem ? '' : 'border-b'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </Popoverlay>
  );
}
