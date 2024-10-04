import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useResponsive } from 'hooks/useResponsive';
import { Header } from 'components/Header';
import MainSider from '../Sider/MainSider';
import MainContent from '../MainContent';
import { MainHeader } from '../MainHeader';
import * as S from './styled';

const MainLayout: React.FC = () => {
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true);
  const [siderCollapsed, setSiderCollapsed] = useState(true);
  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <S.LayoutMaster>
      <MainSider
        isCollapsed={siderCollapsed}
        setCollapsed={setSiderCollapsed}
      />
      <S.LayoutMain>
        <MainHeader>
          <Header
            toggleSider={toggleSider}
            isSiderOpened={!siderCollapsed}
            isTwoColumnsLayout={isTwoColumnsLayout}
          />
        </MainHeader>
        <MainContent id="main-content">
          <div>
            <Outlet />
          </div>
        </MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
