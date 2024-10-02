import { themes } from 'styles';

export type ThemeKeyType = keyof typeof themes | 'system';

export interface ThemeState {
  selected: ThemeKeyType;
}
