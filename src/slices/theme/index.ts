import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { useSelector, useDispatch } from 'react-redux';
import { getThemeFromStorage } from 'styles';
import { ThemeKeyType, ThemeState } from './types';
import { selectTheme, selectThemeKey } from './selectors';

const themeKey = getThemeFromStorage() || 'system';
export const initialState: ThemeState = {
  selected: themeKey,
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeKeyType>) {
      return {
        ...state,
        selected: action.payload,
      };
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

  const changeTheme = (payload) => dispatch(actions.changeTheme(payload));
  return { changeTheme, theme, themeKey };
};

export default slice;
