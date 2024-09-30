import { themes } from 'styled';

export type ThemeKeyType = keyof typeof themes | 'system';
export type ThemeType = keyof typeof themes;

export interface ThemeState {
  selected: ThemeKeyType;
  theme: ThemeType;
}
