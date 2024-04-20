import React from 'react';

interface LoadingProps {
  className?: string;
}
export default function Loading({ className }: LoadingProps) {
  return <div className={`loading-box ${className}`} />;
}
