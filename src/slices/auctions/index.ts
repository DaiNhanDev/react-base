import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useSelector, useDispatch } from 'react-redux';
import { PayloadAction } from '@reduxjs/toolkit';

import { saga } from './saga';
import { AuctionsState } from './types';
import { selectCategories } from './selectors';

export const initialState: AuctionsState = {
  loading: false,
  categories: [],
  products: [],
  error: null,
  productDetail: null,
};

const slice = createSlice({
  name: 'auctions',
  initialState,
  reducers: {
    getCategories: () => {},
    getCategoriesSuccess: (state, action: PayloadAction<any[]>) => {
      state.categories = action.payload;
    },
    getProducts: (state, action: PayloadAction<string>) => {},
    getProductsSuccess: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload;
    },
    getProductDetail: (state, action: PayloadAction<string>) => {
      state.productDetail = null;
    },
    getProductDetailSuccess: (state, action: PayloadAction<any[]>) => {
      state.productDetail = action.payload;
    },
  },
});

export const { actions, reducer } = slice;

export const useAuctions = () => {
  const { actions, name, reducer } = slice;

  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: slice.name, saga });
  const dispatch = useDispatch();

  const getCategories = () => dispatch(actions.getCategories());
  const getProducts = (payload) => dispatch(actions.getProducts(payload));
  const getProduct = (payload) => dispatch(actions.getProductDetail(payload));

  const state = useSelector(selectCategories);

  return {
    getCategories,
    getProducts,
    getProduct,
    ...state,
  };
};
