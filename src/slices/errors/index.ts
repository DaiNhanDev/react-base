import { AxiosError } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { useDispatch } from 'react-redux';
import { initialStates } from 'slices/initialStates';
import { useSelectorData } from 'slices/selectors';
import { ErrorState } from './types';

export const initialState: ErrorState = {
  error: null,
};
const name = 'errors';
const slice = createSlice({
  name,
  initialState: initialStates[name],
  reducers: {
    setError(state, action: PayloadAction<AxiosError | unknown>) {
      state.error = action.payload;
    },
  },
});

export const { actions: errorActions, reducer } = slice;

export const useError = () => {
  const { actions, name, reducer } = slice;

  useInjectReducer({ key: name, reducer });
  const dispatch = useDispatch();

  const error: ErrorState = useSelectorData(name) as ErrorState;

  const setError = (payload) => dispatch(actions.setError(payload));
  return { setError, ...error };
};

export default slice;
