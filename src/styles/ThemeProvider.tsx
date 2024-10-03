import React from 'react';
import { theme as themeAnt } from 'antd';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useThemeSlice } from 'slices';

interface IProps extends React.PropsWithChildren {}

export const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const { token } = themeAnt.useToken();
  const { theme } = useThemeSlice();
  console.log('====> theme', {...theme, antd: token});
  return (
    <OriginalThemeProvider theme={{ ...theme, antd: token }}>
      {children}
    </OriginalThemeProvider>
  );
};
