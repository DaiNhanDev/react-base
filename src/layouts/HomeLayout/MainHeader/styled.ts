import { BaseLayout } from 'components';
import { Media, LAYOUT } from 'styles';
import styled, { css } from 'styled-components';

interface Header {
  $isTwoColumnsLayoutHeader: boolean;
}

const { desktop } = LAYOUT;
export const Header = styled(BaseLayout.Header)<Header>`
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
