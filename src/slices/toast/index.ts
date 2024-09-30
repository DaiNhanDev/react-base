import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/redux-injectors';
import { useSelectorData } from 'slices/selectors';
import { initialStates } from 'slices/initialStates';
import { NotificationParams } from './types';

// const name = 'toast';

// const slice = createSlice({
//   name,
//   initialState: initialStates[name],
//   reducers: {
//     setNotification(state, action: PayloadAction<NotificationParams>) {
//       state.notification = action.payload;
//     },
//     resetNotification: (state) => {
//       state.notification = null;
//     },
//   },
// });

// export const { actions, reducer } = slice;

// export const useNotification = () => {
//   const dispatch = useDispatch();
//   useInjectReducer({ key: slice.name, reducer });

//   const setNotification = (payload: NotificationParams) =>
//     dispatch(actions.setNotification(payload));
//   const resetNotification = () => dispatch(actions.resetNotification());

//   const notification = useSelectorData(slice.name);
//   return {
//     ...notification,
//     setNotification,
//     resetNotification,
//   };
// };
