import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getCategories,
  getProductsByCategory,
  getProduct,
} from 'apis/auctions';

import { sagaCustomize } from '../sagaCustomize';

import { actions } from '.';

export function* getCategoriesSaga() {
  yield sagaCustomize(function* () {
    const response = yield call(getCategories);
    const { data } = response;
    yield put(actions.getCategoriesSuccess(data));
  });
}

export function* getProductsSaga({ payload }: PayloadAction<string>) {
  yield sagaCustomize(function* () {
    const response = yield call(getProductsByCategory, payload);
    const { data } = response;
    yield put(actions.getProductsSuccess(data));
  });
}

export function* getProductDetailSaga({ payload }: PayloadAction<string>) {
  console.log('====> payload: ', payload);

  yield sagaCustomize(function* () {
    const response = yield call(getProduct, payload);
    console.log('=====> getProductsSaga', response);

    const { data } = response;
    yield put(actions.getProductDetailSuccess(data));
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
  yield takeLatest(actions.getCategories.type, getCategoriesSaga);
  yield takeLatest(actions.getProducts.type, getProductsSaga);
  yield takeLatest(actions.getProductDetail.type, getProductDetailSaga);
}
