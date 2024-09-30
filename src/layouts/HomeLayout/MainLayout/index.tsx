import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  MEDICAL_DASHBOARD_PATH,
  NFT_DASHBOARD_PATH,
} from 'components/router/AppRouter';
import { useResponsive } from 'hooks/useResponsive';
import { References } from 'components/common/References/References';
import { Header } from 'components/header/Header';
import MainSider from '../Sider/MainSider';
import MainContent from '../MainContent';
import { MainHeader } from '../MainHeader';
import * as S from './styled';

const MainLayout: React.FC = () => {
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true);
  const [siderCollapsed, setSiderCollapsed] = useState(true);
  const { isDesktop } = useResponsive();
  const location = useLocation();

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  useEffect(() => {
    setIsTwoColumnsLayout(
      [MEDICAL_DASHBOARD_PATH, NFT_DASHBOARD_PATH].includes(
        location.pathname,
      ) && isDesktop,
    );
  }, [location.pathname, isDesktop]);

  return (
    <S.LayoutMaster>
      <MainSider
        isCollapsed={siderCollapsed}
        setCollapsed={setSiderCollapsed}
      />
      <S.LayoutMain>
        <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}>
          <Header
            toggleSider={toggleSider}
            isSiderOpened={!siderCollapsed}
            isTwoColumnsLayout={isTwoColumnsLayout}
          />
        </MainHeader>
        <MainContent id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
          <div>
            <Outlet />
          </div>
          {!isTwoColumnsLayout && <References />}
        </MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
