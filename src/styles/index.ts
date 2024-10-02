export * from './utils';
import { DefaultTheme } from 'styled-components';
import { BASE_COLORS } from './base.color';
import { antLightColorTheme } from './themes/light';
import { antDarkColorTheme } from './themes/dark';

const appLightTheme = {};

export type BaseTheme = typeof BASE_COLORS;
export type AppTheme = typeof appLightTheme;
const lightTheme: DefaultTheme = {
  antd: antLightColorTheme,
  base: BASE_COLORS,
  app: appLightTheme,
};

const appDarkTheme: AppTheme = {};

const darkTheme: DefaultTheme = {
  antd: antDarkColorTheme,
  base: BASE_COLORS,
  app: appDarkTheme,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
