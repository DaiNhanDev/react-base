import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT, Media } from 'styles/themes/constants';
import { BaseButton } from 'components/common/BaseButton/BaseButton';

export const Description = styled.div`
  margin-bottom: 1.875rem;
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.regular};

  ${Media.xs()} {
    font-size: ${FONT_SIZE.xxs};
  }

  ${Media.md()} {
    font-size: ${FONT_SIZE.xs};
  }
`;

export const SubmitButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  width: 100%;
  margin-top: 1.125rem;
  margin-bottom: 1rem;
`;
