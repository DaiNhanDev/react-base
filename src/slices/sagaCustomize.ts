import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import { errorActions } from './errors';
import { loadingActions } from './loading';

export function* sagaCustomize(callbackAction) {
  try {
    yield put(loadingActions.setLoading(true));
    yield callbackAction();
  } catch (error: AxiosError | unknown) {
    yield put(errorActions.setError(error));
  } finally {
    yield put(loadingActions.setLoading(false));
  }
}
