import React from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper, BackgroundWrapper, LoginWrapper } from './styled';

const AuthLayout: React.FC = () => {
  return (
    <Wrapper>
      <BackgroundWrapper>
        <LoginWrapper>
          <Outlet />
        </LoginWrapper>
      </BackgroundWrapper>
    </Wrapper>
  );
};

export default AuthLayout;
