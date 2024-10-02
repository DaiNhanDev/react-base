import React from 'react';
import * as S from './MoonSunSwitch.styles';
import { MoonIcon } from 'components/common/Icons/MoonIcon';
import { SunIcon } from 'components/common/Icons/SunIcon';

interface MoonSunSwitchProps {
  isMoonActive: boolean;
  onClickMoon: () => void;
  onClickSun: () => void;
}

export const MoonSunSwitch: React.FC<MoonSunSwitchProps> = ({
  isMoonActive,
  onClickMoon,
  onClickSun,
}) => {
  return (
    <S.ButtonGroup $isFirstActive={isMoonActive}>
      <S.Btn
        size="small"
        type="link"
        icon={<MoonIcon />}
        onClick={onClickMoon}
      />
      <S.Btn size="small" type="link" icon={<SunIcon />} onClick={onClickSun} />
    </S.ButtonGroup>
  );
};
