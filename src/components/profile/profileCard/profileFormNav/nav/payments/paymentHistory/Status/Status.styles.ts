import styled from 'styled-components';
import { Media } from 'styles/themes/constants';
import { BaseTag } from 'components/common/BaseTag/BaseTag';

export const StatusTag = styled(BaseTag)`
  padding: 0.375rem 0;
  min-width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  ${Media.md()} {
    min-width: 6.5rem;
  }
`;
