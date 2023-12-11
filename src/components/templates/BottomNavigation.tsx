import React, { ReactNode } from 'react';
import { Button, Container } from '../common';

interface BottomNavigationProps {
  // from: string;
  // to: string;
  children: ReactNode;
}

export default function BottomNavigation({ children }: BottomNavigationProps) {
  return (
    <div className='fixed bottom-0 left-0 right-0 w-full bg-white p-8 shadow-lg shadow-black'>
      <Container className='flex justify-end gap-4'>{children}</Container>
    </div>
  );
}
