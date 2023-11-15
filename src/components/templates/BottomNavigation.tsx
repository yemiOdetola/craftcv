import React from 'react'
import { Button, Container } from '../common'

interface BottomNavigationProps {
  from: string;
  to: string;
}

export default function BottomNavigation({ from, to }: BottomNavigationProps) {
  return (
    <div className="w-full fixed bottom-0 left-0 right-0 bg-white shadow-black shadow-lg p-8">
      <Container className="flex justify-end gap-4">
        <Button href={from} className="py-3 px-8 bg-gray-300 text-gray-500">Cancel</Button>
        <Button href={to} className="py-3 px-8">Continue</Button>
      </Container>
    </div>
  )
}
