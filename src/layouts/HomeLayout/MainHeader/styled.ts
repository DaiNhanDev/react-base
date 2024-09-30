import { BaseLayout } from 'components/common/BaseLayout/BaseLayout';
import { Media, LAYOUT } from 'styles/themes/constants';
import styled, { css } from 'styled-components';

interface Header {
  $isTwoColumnsLayoutHeader: boolean;
}

const { desktop } = LAYOUT;
export const Header = styled(BaseLayout.Header) <Header>`
  line-height: 1.5;

  ${Media.md()} {
    padding: ${desktop.paddingVertical} ${desktop.paddingHorizontal};
    height: ${desktop.headerHeight};
  }

  ${Media.md()} {
    ${(props) =>
    props?.$isTwoColumnsLayoutHeader &&
    css`
        padding: 0;
      `}
  }
`;
