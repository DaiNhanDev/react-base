import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { useSelector, useDispatch } from 'react-redux';
import { LoadingState } from './types';
import { selectLoading } from './selectors';

export const initialState: LoadingState = {
  loading: false,
};

const slice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { actions: loadingActions, reducer } = slice;

export const useLoading = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  const dispatch = useDispatch();
  const { actions } = slice;

  const loading = useSelector(selectLoading);

  const setLoading = (payload) => dispatch(actions.setLoading(payload));
  return { setLoading, loading };
};

// export default slice;
