import React from 'react';
import * as S from './styled';
import { MoonIcon } from 'components/Common/Icons/MoonIcon';
import { SunIcon } from 'components/Common/Icons/SunIcon';

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
