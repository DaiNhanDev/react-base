import styled from 'styled-components';
import { Media } from 'styles';
import { BaseLayout } from 'components';

export const LayoutMaster = styled(BaseLayout)`
  height: 100vh;
`;

export const LayoutMain = styled(BaseLayout)`
  ${Media.md} {
    margin-left: 80px;
  }

  ${Media.xl} {
    margin-left: unset;
  }
`;
