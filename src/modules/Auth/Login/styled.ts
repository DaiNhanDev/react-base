import { BaseButton } from 'components/Common';
import styled from 'styled-components';
import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, Media } from 'styles';

export const FormWrapper = styled.div`
  padding: 2.5rem;
  width: 31.75rem;
  background-color: ${({ theme }) => `rgba(${theme.app.backgroundRGB}, 0.93)`};
  border-radius: ${BORDER_RADIUS};

  ${Media.xs} {
    padding: 2.5rem 1.25rem;
    width: 20.75rem;
    max-height: calc(100vh - 3rem);
  }

  ${Media.md} {
    padding: 2.5rem;
    width: 31.75rem;
    max-height: calc(100vh - 3rem);
  }
`;

export const FormTitle = styled.div`
  color: ${({ theme }) => theme.app.primary};
  ${Media.xs} {
    margin-bottom: 0.625rem;
    font-size: ${FONT_SIZE.lg};
    font-weight: ${FONT_WEIGHT.bold};
    line-height: 1.5625rem;
  }

  ${Media.md} {
    margin-bottom: 0.875rem;
    font-size: ${FONT_SIZE.xxl};
    font-weight: ${FONT_WEIGHT.bold};
    line-height: 1.9375rem;
  }

  ${Media.xl} {
    margin-bottom: 0.9375rem;
    font-size: ${FONT_SIZE.xxxl};
    font-weight: ${FONT_WEIGHT.extraBold};
    line-height: 2.125rem;
  }
`;

export const LoginDescription = styled.div`
  margin-bottom: 1.875rem;
  color: ${({ theme }) => theme.app.textMain};
  font-size: ${FONT_SIZE.xs};

  ${Media.xs} {
    margin-bottom: 1.5625rem;
    font-weight: ${FONT_WEIGHT.bold};
  }

  ${Media.md} {
    margin-bottom: 1.75rem;
    font-weight: ${FONT_WEIGHT.regular};
  }

  ${Media.xl} {
    margin-bottom: 1.875rem;
  }
`;

export const RememberMeText = styled.span`
  color: ${({ theme }) => theme.app.primary};
  font-size: ${FONT_SIZE.xs};
`;

export const ForgotPasswordText = styled.span`
  color: ${({ theme }) => theme.app.textLight};
  font-size: ${FONT_SIZE.xs};
  text-decoration: underline;
`;

export const SubmitButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  width: 100%;
  margin-top: 24px;
`;
