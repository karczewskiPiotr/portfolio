import { useState, useEffect } from 'react';

export const useWindowWidth = (): { width: number } => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = (): void => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  });

  return { width };
};
