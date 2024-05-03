import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => {
  return state.errors || initialState;
};

export const selectError = createSelector([selectDomain], (errors) => {
  return errors.error;
});
