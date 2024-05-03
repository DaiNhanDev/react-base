import { PayloadAction } from '@reduxjs/toolkit';
import { call, takeLatest, put, select } from 'redux-saga/effects';
import { login, getMe } from 'apis';
import { STORAGE } from 'utils/storage';
import { RootState } from 'types';

import { sagaCustomize } from '../sagaCustomize';

import { actions } from '.';

export function* loginSaga({
  payload,
}: PayloadAction<{ email: string; password: string }>) {
  yield sagaCustomize(function* () {
    const response = yield call(login, payload);
    localStorage.setItem(STORAGE.USER_TOKEN, response.access_token);
    const {
      broadcast: { boardcastChannel },
    }: RootState = yield select();
    if (boardcastChannel) {
      boardcastChannel.postMessage('LOGIN');
    }
    yield put(actions.loginSuccess());
  });
}

export function* getMeSaga() {
  yield sagaCustomize(function* () {
    const response = yield call(getMe);
    yield put(actions.getMeSuccess(response.data));
  });
}

/**
 * Root saga manages watcher lifecycle
 */
export function* saga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.login.type, loginSaga);
  yield takeLatest(actions.getMe.type, getMeSaga);
}
