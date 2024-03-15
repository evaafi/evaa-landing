import { useState, useEffect } from 'react';

const isMatched = (query: string) => {
  return window.matchMedia(query).matches;
};

export const useIsMobile = (maxWidth: number = 767) => {
  const query = `(max-width: ${maxWidth}px)`;
  const [isMobile, setIsMobile] = useState(isMatched(query));

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleResize = () => setIsMobile(mediaQuery.matches);

    // Add event listener
    mediaQuery.addEventListener('change', handleResize);

    // Remove event listener on cleanup
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, [query]); // Empty array ensures effect is only run on mount and unmount

  return isMobile;
};

export const useIsLargeScreen = (maxWidth: number = 1439) => {
  const query = `(min-width: ${maxWidth}px)`;
  const [isLargeScreen, setIsLargeScreen] = useState(isMatched(query));

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleResize = () => setIsLargeScreen(mediaQuery.matches);

    // Add event listener
    mediaQuery.addEventListener('change', handleResize);

    // Remove event listener on cleanup
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, [query]); // Empty array ensures effect is only run on mount and unmount

  return isLargeScreen;
};
