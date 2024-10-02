import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { RootStateKeyType } from 'utils/types/injector-typings';
import { initialStates } from './initialStates';

export const selectDomain = (state: RootState) => state;

export const useSelectorData = (
  key: RootStateKeyType,
): RootState[RootStateKeyType] => {
  const selectState = createSelector(
    selectDomain,
    (state) => state[key] || initialStates[key],
  );
  const state = useSelector(selectState);

  return state;
};
