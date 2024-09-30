import { BASE_COLORS } from "./base.color";

const lightTheme = {
  base: BASE_COLORS,
};

export const antLightColorTheme = {
  colorPrimary: '#339CFD',
}

export type Theme = typeof lightTheme;

export const darkTheme: Theme = {
  base: BASE_COLORS,
};

export const themes = {
  light: lightTheme,
  // dark: darkTheme,
};
