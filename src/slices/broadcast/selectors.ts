import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state;

export const selectBroadcast = createSelector(
  selectDomain,
  ({ broadcast = initialState }) => broadcast,
);
