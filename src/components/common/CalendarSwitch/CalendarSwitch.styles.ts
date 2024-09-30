import { FONT_SIZE, Media } from 'styles/themes/constants';
import styled from 'styled-components';
import { BaseTypography } from '../BaseTypography/BaseTypography';

export const CalendarSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled(BaseTypography.Text)`
  font-weight: bold;
  font-size: ${FONT_SIZE.xs};

  ${Media.md()} {
    font-size: ${FONT_SIZE.lg};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  & > * {
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
`;
