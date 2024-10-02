import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { themes, isSystemDark } from 'styles';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state;

export const selectThemeData = createSelector(
  selectDomain,
  ({ theme = initialState }) => {
    if (theme.selected === 'system') {
      return isSystemDark ? themes.light : themes.light;
    }
    if (!theme.selected) return themes.light;
    return themes[theme.selected];
  },
);

export const selectThemeKey = createSelector(
  selectDomain,
  ({ theme = initialState }) => theme.selected || 'light',
);