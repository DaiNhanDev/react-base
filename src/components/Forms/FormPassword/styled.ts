import styled from 'styled-components';

export const Wrapper = styled.div<{ width?: number | string }>`
  width: ${({ width }) => width || '100%'};
  display: flex;
  flex-direction: column;
`;
