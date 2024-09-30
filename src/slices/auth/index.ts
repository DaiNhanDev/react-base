import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useDispatch } from 'react-redux';
import { initialStates } from 'slices/initialStates';
import { useSelectorData } from 'slices/selectors';

import { saga } from './saga';
import { ResetPasswordRequest, SignUpRequest } from 'apis/auth.api';
import { AuthState } from './types';

const name = 'auth';
const initialState: AuthState = initialStates[name];
const slice = createSlice({
  name,
  initialState,
  reducers: {
    doLogin: (
      state,
      action: PayloadAction<{ email: string; password: string }>,
    ) => {},
    doLoginSuccess: (state) => {},
    doResetPassword: (state, action: PayloadAction<ResetPasswordRequest>) => {},
    doResetPasswordSuccess: (state) => {},
    doSignUp: (state, action: PayloadAction<SignUpRequest>) => { },
    doSignUpSuccess: (state) => {},
    doVerifySecurityCode: (state, action: PayloadAction<SignUpRequest>) => { },
    doVerifySecurityCodeSuccess: (state) => {},
    doSetNewPassword: (state, action: PayloadAction<SignUpRequest>) => { },
    doSetNewPasswordSuccess: (state) => {},
    doLogout: (state) => {},
  },
});

export const { actions, reducer } = slice;

export const useAuth = () => {
  const { actions, name, reducer } = slice;

  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: slice.name, saga });
  const dispatch = useDispatch();

  const doLogin = (payload: { email: string; password: string }) =>
    dispatch(actions.doLogin(payload));
  const state = useSelectorData(name) as AuthState;

  return {
    doLogin,
    ...state,
  };
};
