import { useEffect, useState } from 'react';

const TABLETBREAKPOINT = 769;
const DESKTOPBREAKPOINT = 1201;
const XLDESKTOPBREAKPOINT = 2560;
export const useBreakpoint = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return {
    isMobile: width < TABLETBREAKPOINT,
    isTablet: width < DESKTOPBREAKPOINT && width >= TABLETBREAKPOINT,
    isDesktop: width >= DESKTOPBREAKPOINT && width < XLDESKTOPBREAKPOINT,
    isXLDesktop: width >= XLDESKTOPBREAKPOINT,
  };
};
