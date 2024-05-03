import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { useSelector, useDispatch } from 'react-redux';

import { BroadcastState } from './types';
import { selectBroadcast } from './selectors';

export const initialState: BroadcastState = {
  boardcastChannel: null,
};

const slice = createSlice({
  name: 'broadcast',
  initialState,
  reducers: {
    setBroadcastChannel: (
      state,
      action: PayloadAction<{ broadcast: BroadcastChannel }>,
    ) => {
      state.boardcastChannel = action.payload.broadcast;
    },
  },
});

export const { actions, reducer } = slice;

export const useBroadcast = () => {
  const { actions, name, reducer } = slice;

  useInjectReducer({ key: name, reducer });
  const dispatch = useDispatch();

  const setBroadcastChannel = (payload: { broadcast: BroadcastChannel }) =>
    dispatch(actions.setBroadcastChannel(payload));
  const state = useSelector(selectBroadcast);

  return {
    setBroadcastChannel,
    ...state,
  };
};
