import styled from 'styled-components';
import { BORDER_RADIUS, Media } from 'styles/themes/constants';
import { BaseImage } from '../common/BaseImage/BaseImage';
import { BaseTypography } from '../common/BaseTypography/BaseTypography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 1.25rem;
  border-radius: ${BORDER_RADIUS};

  background-color: var(--background-color);

  ${Media.md()} {
    padding: 2.5rem 6.25rem 6.25rem;
  }

  ${Media.xl()} {
    flex-direction: row-reverse;
    justify-content: center;
    padding: 12.5rem 3.5rem;
  }
`;

export const Image = styled(BaseImage)`
  margin-bottom: 4rem;

  ${Media.xxl()} {
    margin-bottom: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Media.xl()} {
    margin-right: 7.5rem;
  }
`;

export const Title = styled(BaseTypography.Text)`
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 1rem;

  color: var(--text-main-color);

  ${Media.md()} {
    font-size: 3rem;
    margin-bottom: 1.75rem;
  }

  ${Media.xl()} {
    font-size: 4rem;
    margin-bottom: 2.25rem;
  }
`;

export const Text = styled(Title)`
  font-size: 0.875rem;
  margin-bottom: 1.25rem;

  ${Media.md()} {
    font-size: 1.12rem;
    margin-bottom: 1.45rem;
  }

  ${Media.xl()} {
    font-size: 1.5rem;
    margin-bottom: 1.8rem;
  }
`;
