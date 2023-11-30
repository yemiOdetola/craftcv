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
    title: 'Swansea',
    key: 'swansea',
  },
  {
    title: 'Clear Sans',
    key: 'clearsans',
  },
  {
    title: 'Hack',
    key: 'hack',
  },
  {
    title: 'Cabin',
    key: 'cabin',
  },
];
interface EditorFontMenuProps {
  fontFamily: string;
  onChange: (e: string) => void;
}

export function EditorFontMenu({ fontFamily, onChange }: EditorFontMenuProps) {
  return (
    <Popoverlay title='Edit Font' className='lg:max-w-sm'>
      <div className='relative gap-y-3 bg-white p-4'>
        {fonts.map((font, index) => {
          const selected: boolean = font.key == fontFamily;
          return (
            <button
              key={`font-${index}`}
              onClick={() => onChange(font.key)}
              className={`item flex w-full cursor-pointer border-b py-3 pl-3 ${
                selected ? 'font-semibold' : ''
              }`}
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
