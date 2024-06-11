import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state;

export const selectUsername = createSelector(
  selectDomain,
  ({ githubRepoForm = initialState }) => githubRepoForm.username,
);

export const selectLoading = createSelector(
  selectDomain,
  ({ githubRepoForm = initialState }) => githubRepoForm.loading,
);

export const selectError = createSelector(
  selectDomain,
  ({ githubRepoForm = initialState }) => githubRepoForm.error,
);

export const selectRepos = createSelector(
  selectDomain,
  ({ githubRepoForm = initialState }) => githubRepoForm.repositories,
);

export const selectUsers = createSelector(
  selectDomain,
  ({ githubRepoForm = initialState }) => githubRepoForm.users,
);
