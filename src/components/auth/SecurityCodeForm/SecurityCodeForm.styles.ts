import { FONT_SIZE, FONT_WEIGHT, Media } from 'styles/themes/constants';
import styled from 'styled-components';

export const ImageWrapper = styled.div`
  margin-bottom: 1.875rem;
`;

export const VerifyEmailDescription = styled.div`
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

export const NoCodeText = styled.div`
  margin-top: 1rem;
  color: ${({theme}) => theme.antd.colorPrimary};
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.regular};
  text-decoration: underline;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
