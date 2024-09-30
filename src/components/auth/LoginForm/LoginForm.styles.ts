import { FONT_SIZE, FONT_WEIGHT, Media } from 'styles/themes/constants';
import styled from 'styled-components';

export const LoginDescription = styled.div`
  margin-bottom: 1.875rem;
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.xs};

  ${Media.xs()} {
    margin-bottom: 1.5625rem;
    font-weight: ${FONT_WEIGHT.bold};
  }

  ${Media.md()} {
    margin-bottom: 1.75rem;
    font-weight: ${FONT_WEIGHT.regular};
  }

  ${Media.xl()} {
    margin-bottom: 1.875rem;
  }
`;

export const RememberMeText = styled.span`
  color: ${({theme}) => theme.antd.colorPrimary};
  font-size: ${FONT_SIZE.xs};
`;

export const ForgotPasswordText = styled.span`
  color: var(--text-light-color);
  font-size: ${FONT_SIZE.xs};
  text-decoration: underline;
`;
