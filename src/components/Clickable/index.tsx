import styled from 'styled-components';

export const Clickable = styled.div<{
  background?: string;
  disabled?: boolean;
}>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.2s;
  background: ${({ theme, background }) =>
    background ? theme[background] : 'transparent'};
  display: flex;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }

  &.disabled {
    cursor: auto;
    opacity: 0.5;
  }
`;
