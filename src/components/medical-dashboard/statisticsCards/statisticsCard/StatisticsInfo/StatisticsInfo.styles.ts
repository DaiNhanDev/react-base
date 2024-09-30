import { BaseTypography } from 'components/common/BaseTypography/BaseTypography';
import { FONT_SIZE, FONT_WEIGHT, Media } from 'styles/themes/constants';
import styled from 'styled-components';

export const Title = styled(BaseTypography.Text)`
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.bold};

  ${Media.md()} {
    font-size: ${FONT_SIZE.md};
  }

  ${Media.xl()} {
    font-size: ${FONT_SIZE.lg};
  }
`;

export const Text = styled(BaseTypography.Text)`
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.medium};
`;

export const IconWrapper = styled.span`
  font-size: 0.625rem;
`;
