import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import MainSider from '../Sider/MainSider';
import MainContent from '../MainContent';
import { MainHeader } from '../MainHeader';
import * as S from './styled';

const MainLayout: React.FC = () => {
  return (
    <S.LayoutMaster>
      <MainSider />
      <S.LayoutMain>
        <MainHeader>
          <Header />
        </MainHeader>
        <MainContent id="main-content">
          <Outlet />
        </MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
