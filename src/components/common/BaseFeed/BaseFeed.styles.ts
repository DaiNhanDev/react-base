import { Media } from 'styles/themes/constants';
import styled from 'styled-components';

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 1.25rem;

    ${Media.xl()} {
      margin-bottom: 1.5rem;
    }

    ${Media.xxl()} {
      margin-bottom: 2.5rem;
    }
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
`;
