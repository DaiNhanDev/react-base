import { DefaultTheme } from 'styled-components';
import { BASE_COLORS } from './base.color';
export * from './themes/light';
export * from './themes/dark';
export * from './constants';
export * from './media';
export * from './ThemeProvider';
export * from './utils';

const appLightTheme = {
  spinnerBase: '#f42f25',
};


export type BaseTheme = typeof BASE_COLORS;
export type AppTheme = typeof appLightTheme;
const lightTheme: DefaultTheme = {
  antd: {},
  base: BASE_COLORS,
  app: appLightTheme,
};

const appDarkTheme: AppTheme = {
  spinnerBase: '#339CFD',
};

const darkTheme: DefaultTheme = {
  antd: {},
  base: BASE_COLORS,
  app: appDarkTheme,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeKeyType = keyof typeof themes;
