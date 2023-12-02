'use client';
import { useEffect, useState } from 'react';

export const HydrationZustand = ({ children }: any) => {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return <>{isHydrated ? <div>{children}</div> : null}</>;
};
