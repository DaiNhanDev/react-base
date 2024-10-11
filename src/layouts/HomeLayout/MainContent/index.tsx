import styled, { css } from 'styled-components';
import { LAYOUT, Media } from 'styles';
import { BaseLayout } from 'components';

const { mobile, desktop } = LAYOUT;
export default styled(BaseLayout.Content)`
  padding: ${mobile.paddingVertical} ${mobile.paddingHorizontal};
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${Media.md} {
    padding: ${desktop.paddingVertical} ${desktop.paddingHorizontal};
  }
`;
