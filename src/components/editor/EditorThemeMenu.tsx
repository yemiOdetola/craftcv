import { arraysEqual, groupColors } from '@/utils/helper';
import { Popoverlay } from '../common';

const themes = groupColors(2);

interface EditorThemeMenuProps {
  editorTheme: string[];
  changeTheme: (e: string[]) => void;
}

export function EditorThemeMenu({
  changeTheme,
  editorTheme,
}: EditorThemeMenuProps) {
  console.log('editorThemeeditorTheme: ', editorTheme);

  const flipColors = () => {
    editorTheme = editorTheme.reverse();
    changeTheme(editorTheme);
  };

  return (
    <Popoverlay title='Change Theme'>
      <div className='relative grid bg-white px-2 py-4'>
        <div className='mb-2 flex items-center justify-between border-b-2 p-2 text-gray-700'>
          <h4 className='mb-2 text-lg font-semibold'>
            Select your color combo
          </h4>
          {/* <button
            className='flex border-none bg-none p-2 text-sm text-gray-600'
            onClick={flipColors}
          >
            Switch
            <span className='rotate-180'>
              <PiArrowsDownUpDuotone size={20} />
            </span>
          </button> */}
        </div>
        <div className='flex flex-wrap'>
          {themes.map((theme, index) => {
            const selected = arraysEqual(editorTheme, theme);
            return (
              <div
                key={`theme-${index}`}
                className={`my-2 mr-2 flex cursor-pointer flex-wrap justify-between overflow-hidden
                rounded-3xl border-2 border-transparent transition-all duration-500 hover:scale-110 ${
                  selected ? 'animate-pulse border-indigo-600' : ''
                }`}
                onClick={() => changeTheme(theme)}
              >
                <div
                  className='h-10 w-14'
                  style={{ backgroundColor: `#${theme[0] || '#F7BD80'}` }}
                />
                <div
                  className='h-10 w-14'
                  style={{ backgroundColor: `#${theme[1] || '#B54A71'}` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Popoverlay>
  );
}
