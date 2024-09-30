import { PayloadAction } from '@reduxjs/toolkit';
import { call, takeLatest, put, select } from 'redux-saga/effects';
import { login } from 'apis';
import { STORAGE } from 'utils/storage';
import { RootState } from 'types';

import { sagaCustomize } from '../sagaCustomize';

import { actions } from '.';

export function* loginSaga({
  payload,
}: PayloadAction<{ email: string; password: string }>) {
  yield sagaCustomize(function* () {
    // const response = yield call(login, payload);
    // localStorage.setItem(STORAGE.USER_TOKEN, response.data.token);
    // const {
    //   broadcast: { boardcastChannel },
    // }: RootState = yield select();
    // if (boardcastChannel) {
    //   boardcastChannel.postMessage('LOGIN');
    // }
  });
}

export function* getMeSaga() {
  yield sagaCustomize(function* () {
    // const response = yield call(getMe);
    // yield put(actions.getMeSuccess(response.data));
  });
}

export function* saga() {
}
