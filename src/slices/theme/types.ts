import { themes } from 'styles';

export type ThemeKeyType = keyof typeof themes;

export interface ThemeState {
  selected: ThemeKeyType;
}
