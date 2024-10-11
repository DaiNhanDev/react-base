import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { useDispatch } from 'react-redux';
import { initialStates } from 'slices/initialStates';
import { useSelectorData } from 'slices/selectors';
import { LoadingState } from './types';

const name = 'loading';
const slice = createSlice({
  name,
  initialState: initialStates[name],
  reducers: {
    addLoading(state, action: PayloadAction<string>) {
      state.loadings = [...state.loadings, action.payload];
    },
    removeLoading(state, action: PayloadAction<string>) {
      state.loadings = state.loadings.filter((f) => f !== action.payload);
    },
  },
});

export const { actions: loadingActions, reducer: loadingReducer } = slice;

export const useLoading = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  const dispatch = useDispatch();
  const { actions } = slice;

  const state = useSelectorData(name) as LoadingState;
  const addLoading = (payload) => dispatch(actions.addLoading(payload));
  const removeLoading = (payload) => dispatch(actions.removeLoading(payload));
  return { addLoading, removeLoading, ...state };
};
