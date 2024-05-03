import { AxiosError } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorState } from './types';
import { selectError } from './selectors';

export const initialState: ErrorState = {
  error: null,
};

const slice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<AxiosError | null>) {
      state.error = action.payload;
    },
  },
});

export const { actions: errorActions, reducer } = slice;

export const useError = () => {
  const { actions, name, reducer } = slice;

  useInjectReducer({ key: name, reducer });
  const dispatch = useDispatch();

  const error = useSelector(selectError);

  const setError = (payload) => dispatch(actions.setError(payload));
  return { setError, error };
};

export default slice;
