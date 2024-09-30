import styled from 'styled-components';
import { Media } from 'styles/themes/constants';
import { BaseLayout } from 'components/common/BaseLayout/BaseLayout';

export const LayoutMaster = styled(BaseLayout)`
  height: 100vh;
`;

export const LayoutMain = styled(BaseLayout)`
  ${Media.md()} {
    margin-left: 80px;
  }

  ${Media.xl()} {
    margin-left: unset;
  }
`;
