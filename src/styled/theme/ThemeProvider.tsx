import React from 'react';
import { theme } from 'antd';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useThemeSlice } from 'slices';

interface IProps extends React.PropsWithChildren {}

export const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const { token } = theme.useToken();
  const { themeData } = useThemeSlice();

  return (
    <OriginalThemeProvider theme={{ antd: token, ...themeData }}>
      {children}
    </OriginalThemeProvider>
  );
};
