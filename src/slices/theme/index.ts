import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { useSelector, useDispatch } from 'react-redux';
import { getThemeFromStorage, ThemeKeyType } from 'styles';
import { ThemeState } from './types';
import { selectThemeData, selectThemeKey } from './selectors';

const themeKey = getThemeFromStorage();

export const initialState: ThemeState = {
  selected: 'light',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeKeyType>) {
      state.selected = action.payload;
    },
  },
});

export const { actions: themeActions, reducer } = slice;

export const useThemeSlice = () => {
  const { actions, name, reducer } = slice;

  useInjectReducer({ key: name, reducer });
  const dispatch = useDispatch();

  const themeKey: ThemeKeyType = useSelector(selectThemeKey);
  const theme = useSelector(selectThemeData);

  const changeTheme = (payload) => dispatch(actions.changeTheme(payload));

  return { changeTheme, theme, themeKey };
};

export default slice;
