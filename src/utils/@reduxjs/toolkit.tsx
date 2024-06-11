import {
  createSlice as createSliceOriginal,
  SliceCaseReducers,
  CreateSliceOptions,
  SliceSelectors,
} from '@reduxjs/toolkit';
import { RootStateKeyType } from '../types/injector-typings';

/* Wrap createSlice with stricter Name options */

/* istanbul ignore next */
export const createSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends RootStateKeyType,
  ReducerPath extends string = Name,
  Selectors extends SliceSelectors<State> = SliceSelectors<State>,
>(
  options: CreateSliceOptions<
    State,
    CaseReducers,
    Name,
    ReducerPath,
    Selectors
  >,
) => {
  return createSliceOriginal(options);
};
