/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import { InjectedReducersType } from 'utils/types/injector-typings';
import themeSlice from '../slices/theme';

export const history = createBrowserHistory();

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  return combineReducers({
    router: connectRouter(history),
    theme: themeSlice.reducer,
    ...injectedReducers,
  });
}
