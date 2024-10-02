import styled, { css } from 'styled-components';
import { BurgerIcon } from 'components/common/Burger/BurgerIcon';
import { GitHubButton } from 'components/header/components/GithubButton/GitHubButton';
import { LAYOUT, Media } from 'styles/themes/constants';
import { BaseCollapse } from '../common/BaseCollapse/BaseCollapse';
import { BaseCol } from '../common/BaseCol/BaseCol';

export const HeaderActionWrapper = styled.div`
  cursor: pointer;

  & > .ant-btn > span[role='img'],
  .ant-badge {
    font-size: 1.25rem;

    ${Media.md()} {
      font-size: 1.625rem;
    }
  }

  & .ant-badge {
    display: inline-block;
  }
`;

export const DropdownCollapse = styled(BaseCollapse)`
  & > .ant-collapse-item > .ant-collapse-header {
    font-weight: 600;
    font-size: 0.875rem;

    color: ${({ theme }) => theme.antd.colorPrimary};

    ${Media.md()} {
      font-size: 1rem;
    }
  }

  & > .ant-collapse-item-disabled > .ant-collapse-header {
    cursor: default;

    & > span[role='img'] {
      display: none;
    }
  }
`;

export const BurgerCol = styled(BaseCol)`
  z-index: 999;
  display: flex;
`;

export const MobileBurger = styled(BurgerIcon)`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: -0.5rem;
  color: var(--text-main-color);

  ${(props) =>
    props.isCross &&
    css`
      color: ${({ theme }) => theme.antd.colorTextSecondary};
    `};
`;

export const SearchColumn = styled(BaseCol)`
  padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
`;

interface ProfileColumn {
  $isTwoColumnsLayout: boolean;
}

export const ProfileColumn = styled(BaseCol)<ProfileColumn>`
  ${Media.md()} {
    ${(props) =>
      props?.$isTwoColumnsLayout &&
      css`
        background-color: var(--sider-background-color);
        padding: ${LAYOUT.desktop.paddingVertical}
          ${LAYOUT.desktop.paddingHorizontal};
      `}
  }
`;

export const GHButton = styled(GitHubButton)`
  display: none;

  ${Media.lg()} {
    display: block;
  }
`;
