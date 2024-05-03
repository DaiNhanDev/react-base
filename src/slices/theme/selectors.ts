import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { themes, isSystemDark } from 'styles';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.theme || initialState;

export const selectTheme = createSelector([selectDomain], (theme) => {
  if (theme.selected === 'system') {
    return isSystemDark ? themes.dark : themes.light;
  }
  if (!theme.selected) return themes.light;
  return themes[theme.selected];
});

export const selectThemeKey = createSelector(
  [selectDomain],
  (theme) => theme.selected || 'system',
);
