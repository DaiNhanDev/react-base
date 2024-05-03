import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useSelector, useDispatch } from 'react-redux';

import { UserModel } from 'models';
import { saga } from './saga';
import { AuthState } from './types';
import { selectAuth } from './selectors';

export const initialState: AuthState = {
  loading: false,
  authenticated: false,
  user_profile: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>,
    ) => {
      state.loading = true;
    },
    loginSuccess: (state) => {
      state.authenticated = true;
    },
    getMe: (state) => {
      state.loading = true;
    },
    getMeSuccess: (state, action: PayloadAction<UserModel>) => {
      state.loading = false;
      state.authenticated = true;
      state.user_profile = action.payload;
    },
    logout: (state) => {
      state.loading = false;
      state.user_profile = null;
    },
  },
});

export const { actions, reducer } = slice;

export const useAuth = () => {
  const { actions, name, reducer } = slice;

  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: slice.name, saga });
  const dispatch = useDispatch();

  const login = (payload: { email: string; password: string }) =>
    dispatch(actions.login(payload));
  const getMe = () => dispatch(actions.getMe());
  const state = useSelector(selectAuth);

  return {
    login,
    getMe,
    ...state,
  };
};
