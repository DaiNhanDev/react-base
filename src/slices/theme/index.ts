import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { useSelector, useDispatch } from 'react-redux';
import { getThemeFromStorage } from 'styled';
import { ThemeKeyType, ThemeState, ThemeType } from './types';
import { selectTheme, selectThemeData, selectThemeKey } from './selectors';

const themeKey = getThemeFromStorage() || 'system';
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

export const defaultTheme =
  (localStorage.getItem('theme') as ThemeType) || preferredTheme;

localStorage.setItem('theme', defaultTheme);

export const initialState: ThemeState = {
  selected: themeKey,
  theme: defaultTheme
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeKeyType>) {
      state.selected = action.payload;
    },
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.theme = action.payload;
    },
  },
});

export const { actions: themeActions, reducer } = slice;

export const useThemeSlice = () => {
  const { actions, name, reducer } = slice;

  useInjectReducer({ key: name, reducer });
  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);
  const themeKey = useSelector(selectThemeKey);
  const themeData = useSelector(selectThemeData);

  const changeTheme = (payload) => dispatch(actions.changeTheme(payload));
  const setTheme = (payload) => dispatch(actions.setTheme(payload));

  return { changeTheme, setTheme, theme, themeData, themeKey };
};

export default slice;
