import styled from 'styled-components';
import { Media } from 'styles/themes/constants';
import { BaseTypography } from 'components/common/BaseTypography/BaseTypography';
import { BaseDivider } from 'components/common/BaseDivider/BaseDivider';

export const Text = styled(BaseTypography.Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 0.875rem;
  font-weight: 600;

  & > a {
    display: block;
  }

  ${Media.md()} {
    font-size: 1rem;
  }
`;

export const ItemsDivider = styled(BaseDivider)`
  margin: 0;
`;
