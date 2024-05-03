import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => {
  return state.loading || initialState;
};

export const selectLoading = createSelector([selectDomain], (data) => {
  return data.loading;
});
