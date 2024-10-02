import React from 'react';
import { MoonSunSwitch } from 'components/common/MoonSunSwitch/MoonSunSwitch';
import { useAppDispatch } from 'hooks/reduxHooks';
import { setNightMode } from 'store/slices/nightModeSlice';
import { useThemeSlice } from 'slices';

export const ThemePicker: React.FC = () => {
  const { themeKey, changeTheme } = useThemeSlice();
  const dispatch = useAppDispatch();

  const handleClickButton = (theme) => {
    changeTheme(theme);
    dispatch(setNightMode(false));
  };

  return (
    <MoonSunSwitch
      isMoonActive={themeKey === 'dark'}
      onClickMoon={() => handleClickButton('dark')}
      onClickSun={() => handleClickButton('light')}
    />
  );
};
