import styled, { css } from 'styled-components';
import { LAYOUT, Media } from 'styles/themes/constants';
import { BaseLayout } from 'components/common/BaseLayout/BaseLayout';

interface HeaderProps {
  $isTwoColumnsLayout: boolean;
}

const { mobile, desktop } = LAYOUT;
export default styled(BaseLayout.Content)<HeaderProps>`
  padding: ${mobile.paddingVertical} ${mobile.paddingHorizontal};
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${Media.md()} {
    padding: ${desktop.paddingVertical} ${desktop.paddingHorizontal};
  }

  ${Media.xl()} {
    ${(props) =>
      props?.$isTwoColumnsLayout &&
      css`
        padding: 0;
      `}
  }
`;
