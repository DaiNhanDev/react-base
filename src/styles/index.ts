import { DefaultTheme } from 'styled-components';
import { BASE_COLORS } from './base.color';
import { antComponentsLightColorTheme, antLightColorTheme } from './themes/light';
import { antComponentsDarkColorTheme, antDarkColorTheme } from './themes/dark';
import { hexToRGB } from 'utils/utils';

export * from './themes/light';
export * from './themes/dark';
export * from './constants';
export * from './media';
export * from './ThemeProvider';
export * from './utils';

const appLightTheme = {
  primary: '#01509A',
  spinnerBase: '#f42f25',
  primaryRGB: hexToRGB('#01509A'),
  warning: '#FFB155'
};

export type BaseTheme = typeof BASE_COLORS;
export type AppTheme = typeof appLightTheme;
const lightTheme: DefaultTheme = {
  antd: {},
  base: BASE_COLORS,
  app: appLightTheme,
};

const appDarkTheme: AppTheme = {
  primary: '#339CFD',
  primaryRGB: hexToRGB('#339CFD'),
  spinnerBase: '#339CFD',
  warning: '#FFB765',
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

export const componentsTheme = {
  light: antComponentsLightColorTheme,
  dark: antComponentsDarkColorTheme,
};

export const tokensTheme = {
  light: antLightColorTheme,
  dark: antDarkColorTheme,
};

export type ThemeKeyType = keyof typeof themes;
