import { BaseButton } from 'components/common/BaseButton/BaseButton';
import { Media } from 'styles/themes/constants';
import styled from 'styled-components';

export const Btn = styled(BaseButton)`
  margin: 0.5rem 0 1.5rem 0;
  width: 100%;

  ${Media.md()} {
    max-width: 10rem;
  }

  ${Media.xl()} {
    max-width: unset;
  }
`;
