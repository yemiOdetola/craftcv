import { Switch } from '@headlessui/react';
import React from 'react';

interface ToggleProps {
  active: boolean;
  labelSr: string;
  setActive: () => void;
}

export default function Toggle({ active, labelSr, setActive }: ToggleProps) {
  return (
    <div>
      <Switch
        checked={active}
        onChange={setActive}
        className={`${active ? 'bg-indigo-600' : 'bg-gray-200'}
          relative inline-flex h-[24px] w-[56px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className='sr-only'>{labelSr || 'toggle'}</span>
        <span
          aria-hidden='true'
          className={`${active ? 'translate-x-8' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
