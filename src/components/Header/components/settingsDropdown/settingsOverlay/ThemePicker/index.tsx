import React from 'react';
import { MoonSunSwitch } from 'components/Common';
import { useThemeSlice } from 'slices';
import { ThemeKeyType } from 'styles';

export const ThemePicker: React.FC = () => {
  const { themeKey, changeTheme } = useThemeSlice();

  const handleClickButton = (theme: ThemeKeyType) => {
    changeTheme(theme);
  };

  return (
    <MoonSunSwitch
      isMoonActive={themeKey === 'dark'}
      onClickMoon={() => handleClickButton('dark')}
      onClickSun={() => handleClickButton('light')}
    />
  );
};
