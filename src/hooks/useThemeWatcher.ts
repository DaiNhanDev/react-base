import { useEffect, useRef } from 'react';
import { useThemeSlice } from 'slices';

export const useThemeWatcher = (): void => {
  const { themeKey } = useThemeSlice();

  const root = useRef(document.querySelector(':root'));

  useEffect(() => {
    const html = root.current;
    if (html) {
      html.setAttribute('data-no-transition', '');
      html.setAttribute('data-theme', themeKey);
      // remove transition after layout update
      requestAnimationFrame(() => {
        html.removeAttribute('data-no-transition');
      });
    }
  }, [themeKey]);
};
