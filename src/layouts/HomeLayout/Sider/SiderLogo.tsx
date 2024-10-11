import React from 'react';
import * as S from './MainSider/styled';
import { RightOutlined } from '@ant-design/icons';
import { useResponsive } from 'hooks/useResponsive';
import logo from 'assets/logo.png';
interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = ({
  isSiderCollapsed,
  toggleSider,
}) => {
  const { tabletOnly } = useResponsive();

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to="/">
        <img src={logo} alt="logo" />
      </S.SiderLogoLink>
      {tabletOnly && (
        <S.CollapseButton
          shape="circle"
          size="middle"
          $isCollapsed={isSiderCollapsed}
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )}
    </S.SiderLogoDiv>
  );
};
