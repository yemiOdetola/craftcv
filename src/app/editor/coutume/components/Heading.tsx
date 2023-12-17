import React, { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
}
