import { DefaultTheme } from 'styled-components';
import { BASE_COLORS } from './base.color';
import { antComponentsLightColorTheme, antLightColorTheme } from './themes/light';
import { hexToRGB } from 'utils/utils';

export * from './themes/light';
export * from './constants';
export * from './media';
export * from './ThemeProvider';
export * from './utils';

const appLightTheme = {
  primary: '#01509A',
  spinnerBase: '#f42f25',
  primaryRGB: hexToRGB('#01509A'),
  backgroundRGB: hexToRGB(BASE_COLORS.white),
  warning: '#FFB155',
  textLight: '9A9B9F',
  textMain: '#404040',
  scroll: '#c5d3e0',
  collapseBackground: 'rgb(0, 108, 207)',
  border: '#cce1f4',
};

export type BaseTheme = typeof BASE_COLORS;
export type AppTheme = typeof appLightTheme;
const lightTheme: DefaultTheme = {
  antd: {},
  base: BASE_COLORS,
  app: appLightTheme,
};
export const themes = {
  light: lightTheme,
};

export const componentsTheme = {
  light: antComponentsLightColorTheme,
};

export const tokensTheme = {
  light: antLightColorTheme,
};

export type ThemeKeyType = keyof typeof themes;
