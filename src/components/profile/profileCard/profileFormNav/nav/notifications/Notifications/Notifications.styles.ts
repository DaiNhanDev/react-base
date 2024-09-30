import { BaseTypography } from 'components/common/BaseTypography/BaseTypography';
import { Media } from 'styles/themes/constants';
import styled from 'styled-components';

export const Description = styled(BaseTypography.Text)`
  display: block;
  font-size: 0.75rem;
  margin-bottom: 1rem;

  ${Media.md()} {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;
