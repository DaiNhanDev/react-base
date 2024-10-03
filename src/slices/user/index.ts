import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useDispatch } from 'react-redux';
import { initialStates } from 'slices/initialStates';
import { useSelectorData } from 'slices/selectors';

import { saga } from './saga';
import { UserState } from './types';
import { UserModel } from 'models';

const name = 'user';
const slice = createSlice({
  name,
  initialState: initialStates[name],
  reducers: {
    setUser: (state, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
    },
  },
});

export const { actions, reducer } = slice;

export const useUser = () => {
  const { actions, name, reducer } = slice;

  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga });
  const dispatch = useDispatch();

  const setUser = (payload) => dispatch(actions.setUser(payload));
  const state: UserState = useSelectorData(name) as UserState;

  return {
    setUser,
    ...state,
  };
};
