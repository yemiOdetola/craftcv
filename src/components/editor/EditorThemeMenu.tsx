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
  return (
    <Popoverlay title='Change Theme'>
      <div className='relative grid bg-white px-2 py-4'>
        <h4 className='mb-2 text-xl'>Choose pair</h4>
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
