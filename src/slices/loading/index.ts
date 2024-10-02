import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { useDispatch } from 'react-redux';
import { initialStates } from 'slices/initialStates';
import { useSelectorData } from 'slices/selectors';
import { LoadingState } from './types';

export const initialState: LoadingState = {
  loading: false,
};
const name = 'loading';
const slice = createSlice({
  name,
  initialState: initialStates[name],
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { actions: loadingActions, reducer: loadingReducer } = slice;

export const useLoading = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  const dispatch = useDispatch();
  const { actions } = slice;

  const loading: LoadingState = useSelectorData(name) as LoadingState;

  const setLoading = (payload) => dispatch(actions.setLoading(payload));
  return { setLoading, ...loading };
};

// export default slice;
