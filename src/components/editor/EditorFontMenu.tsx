import { Popoverlay } from '../common';
import { PiCheckCircleDuotone } from 'react-icons/pi';

const fonts = [
  {
    title: 'Ubuntu',
    key: 'ubuntu',
  },
  {
    title: 'CF Spaceship',
    key: 'cfspaceship',
  },
  {
    title: 'Cabin',
    key: 'cabin',
  },
  {
    title: 'Glitch Goblin',
    key: 'glitchgoblin',
  },
  {
    title: 'Sparky Stones',
    key: 'sparkystones',
  },
  {
    title: 'Ronny Siswadi',
    key: 'ronnysiswadi',
  },
  {
    title: 'Sunny Spells',
    key: 'sunnyspells',
  },
  {
    title: 'Motley Forces',
    key: 'motleyforces',
  },
];
interface EditorFontMenuProps {
  fontFamily: string;
  changeFont: (e: string) => void;
}

export function EditorFontMenu({
  fontFamily,
  changeFont,
}: EditorFontMenuProps) {
  return (
    <Popoverlay title='Edit Font' className='lg:max-w-sm'>
      <div className='relative gap-y-3 bg-white p-4'>
        {fonts.map((font, index) => {
          const selected: boolean = font.key == fontFamily;
          const isLastItem = index === fonts.length - 1;
          return (
            <button
              key={`font-${index}`}
              onClick={() => changeFont(font.key)}
              className={`item flex w-full cursor-pointer py-3 pl-3 ${
                selected ? 'font-semibold' : ''
              } ${isLastItem ? '' : 'border-b'}`}
            >
              {selected ? (
                <PiCheckCircleDuotone
                  className={`mr-2 h-6 w-6 animate-pulse text-indigo-600 ring-indigo-500`}
                />
              ) : null}
              {font.title}
            </button>
          );
        })}
      </div>
    </Popoverlay>
  );
}
