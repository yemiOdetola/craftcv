import React from 'react';
import { Button, Container } from '../common';

interface BottomNavigationProps {
  from: string;
  to: string;
}

export default function BottomNavigation({ from, to }: BottomNavigationProps) {
  return (
    <div className='fixed bottom-0 left-0 right-0 w-full bg-white p-8 shadow-lg shadow-black'>
      <Container className='flex justify-end gap-4'>
        <Button href={from} className='bg-gray-300 px-8 py-3 text-gray-500'>
          Cancel
        </Button>
        <Button href={to} className='px-8 py-3'>
          Continue
        </Button>
      </Container>
    </div>
  );
}
