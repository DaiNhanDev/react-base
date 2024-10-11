import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { LAYOUT, Media } from 'styles';
import { BaseButton } from 'components/Common/BaseButton';
import { BaseLayout } from 'components/Common/BaseLayout';

export const Sider = styled(BaseLayout.Sider)`
  position: fixed;
  overflow: visible;
  right: 0;
  z-index: 5;
  min-height: 100vh;
  max-height: 100vh;
  .ant-layout-sider-children {
    overflow: auto;
  }

  ${Media.md} {
    right: unset;
    left: 0;
  }

  ${Media.xl} {
    position: unset;
  }
`;

export const CollapseButton = styled(BaseButton)<{ $isCollapsed: boolean }>`
  background:${({ theme }) => theme.app.collapseBackground};

  border: 1px solid ${({ theme }) => theme.app.border};
  transition: all 0.2s ease;
  position: absolute;
  right: 0.5rem;
  top: 20px;

  ${(props) =>
    props.$isCollapsed &&
    css`
      right: -16px;
    `}

  color: ${({ theme }) => theme.antd.colorTextSecondary};

  &:hover {
    color: ${({ theme }) => theme.antd.colorTextSecondary};
    background: ${({ theme }) => theme.antd.colorPrimary};
    border: 1px solid ${({ theme }) => theme.app.border};
  }

  &:focus {
    color: ${({ theme }) => theme.antd.colorTextSecondary};
    background: ${({ theme }) => theme.antd.colorPrimary};
    border: 1px solid ${({ theme }) => theme.app.border};
  }
`;

export const SiderContent = styled.div`
  /* overflow-y: auto; */
  overflow-x: hidden;
  ${Media.md} {}
`;

export const SiderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  width:  100%;
  justify-content: center;
  img {
    width: 75%;
  }
`;

export const SiderLogoDiv = styled.div`
  padding: ${LAYOUT.mobile.headerPadding};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Media.md} {
    padding-top: ${LAYOUT.desktop.paddingVertical};
    padding-bottom: ${LAYOUT.desktop.paddingVertical};
  }
`;
