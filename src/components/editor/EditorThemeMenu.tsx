import { groupColors } from '@/utils/helper';
import { Popoverlay } from '../common'

const themes = groupColors(2);

export function EditorThemeMenu() {
  return (
    <Popoverlay title="Change Theme">
      <div className="relative grid bg-white px-2 py-4">
        <h4 className='text-xl  mb-2'>Choose pair</h4>
        <div className="flex flex-wrap">
          {themes.map((theme, index) => {
            const selected = index == 3;
            return (
              <div key={`theme-${index}`} className={`flex flex-wrap justify-between overflow-hidden rounded-3xl cursor-pointer border-2
            border-transparent transition-all duration-500 mr-2 my-2 ${selected ? 'border-indigo-600 animate-pulse' : ''}`}>
                <div className="w-14 h-10" style={{ backgroundColor: `#${theme[0] || '#F7BD80'}` }} />
                <div className="w-14 h-10" style={{ backgroundColor: `#${theme[1] || '#B54A71'}` }} />
              </div>
            )
          })}
        </div>
      </div>
    </Popoverlay>
  )
}

