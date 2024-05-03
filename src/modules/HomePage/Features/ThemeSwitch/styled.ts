import { FormLabel } from 'components/FormLabel';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${FormLabel} {
    margin-bottom: 0.625rem;
  }
`;

const Themes = styled.div`
  display: flex;

  .radio {
    margin-right: 1.5rem;
  }
`;

export { Wrapper, Themes };
