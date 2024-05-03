import * as React from 'react';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { PageWrapper } from '../PageWrapper';

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${(p) => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${(p) => p.theme.background};
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${(p) =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <PageWrapper>
        <Logo />
        <Nav />
      </PageWrapper>
    </Wrapper>
  );
};
