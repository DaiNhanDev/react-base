import { takeLatest } from 'redux-saga/effects';

import { sagaCustomize } from '../sagaCustomize';

import { actions } from '.';

export function* getMeSaga({ type }) {
  yield sagaCustomize(function* () {
    // const response = yield call(getMe);
    // yield put(actions.getMeSuccess(response.data));
  }, type);
}

export function* saga() {
  yield takeLatest(actions.setUser.type, getMeSaga);
}
