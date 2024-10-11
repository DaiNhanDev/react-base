import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import { errorActions } from './errors';
import { loadingActions } from './loading';

type Callback = () => void;
export function* sagaCustomize(callbackAction: Callback, loadingName: string) {
  try {
    yield put(loadingActions.addLoading(loadingName));
    if (!!callbackAction) {
      yield callbackAction();
    }
  } catch (error: AxiosError | unknown) {
    yield put(errorActions.setError(error));
  } finally {
    yield put(loadingActions.removeLoading(loadingName));
  }
}
