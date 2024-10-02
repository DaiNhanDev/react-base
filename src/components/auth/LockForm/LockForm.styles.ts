import styled from 'styled-components';
import * as Auth from 'layouts/AuthLayout/styled';
import { FONT_SIZE, FONT_WEIGHT, Media } from 'styles/themes/constants';

export const FormItem = styled(Auth.FormItem)`
  margin-bottom: 1rem;
`;

export const AvatarCircle = styled.div`
  border-radius: 50%;
  background: var(--background-color);
  padding: 1px;
  margin-bottom: 1rem;
  ${Media.xs()} {
    height: 3.6875rem;
    width: 3.6875rem;
  }

  ${Media.md()} {
    height: 4.8125rem;
    width: 4.8125rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Time = styled.div`
  margin-bottom: 1rem;
  color: var(--text-main-color);

  ${Media.xs()} {
    margin-bottom: 0.625rem;
    line-height: 1.5625rem;
    font-size: ${FONT_SIZE.lg};
    font-weight: ${FONT_WEIGHT.bold};
  }

  ${Media.md()} {
    margin-bottom: 1rem;
    line-height: 2.125rem;
    font-size: ${FONT_SIZE.xxxl};
    font-weight: ${FONT_WEIGHT.extraBold};
  }
`;

export const Date = styled.div`
  margin-bottom: 2.5rem;
  color: var(--text-main-color);

  ${Media.xs()} {
    margin-bottom: 3.4375rem;
    line-height: 1.25rem;
    font-size: ${FONT_SIZE.xs};
    font-weight: ${FONT_WEIGHT.semibold};
  }

  ${Media.md()} {
    margin-bottom: 2.5rem;
    line-height: 1.5rem;
    font-size: ${FONT_SIZE.xxl};
    font-weight: ${FONT_WEIGHT.bold};
  }
`;

export const Name = styled.div`
  margin-bottom: 1.5625rem;
  color: var(--text-main-color);

  ${Media.xs()} {
    font-size: ${FONT_SIZE.xs};
    font-weight: ${FONT_WEIGHT.semibold};
  }

  ${Media.md()} {
    font-size: ${FONT_SIZE.md};
  }
`;
