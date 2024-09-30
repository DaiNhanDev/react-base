import styled from 'styled-components';
import { Media } from 'styles/themes/constants';
import { BaseTypography } from 'components/common/BaseTypography/BaseTypography';

export const BaseFormTitle = styled(BaseTypography.Text)`
  font-weight: 700;
  font-size: 1rem;
  display: block;

  ${Media.md()} {
    font-size: 1.125rem;
  }
`;
