import { BaseLayout } from 'components';
import { Media, LAYOUT } from 'styles';
import styled from 'styled-components';

const { desktop } = LAYOUT;
export const Header = styled(BaseLayout.Header)`
  line-height: 1.5;

  ${Media.md()} {
    padding: ${desktop.paddingVertical} ${desktop.paddingHorizontal};
    height: ${desktop.headerHeight};
  }
`;
