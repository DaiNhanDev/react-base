import React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useThemeSlice } from 'slices';

interface IProps {
  children: JSX.Element;
}

export const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const { theme } = useThemeSlice();

  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(children)}
    </OriginalThemeProvider>
  );
};
