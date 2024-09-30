import styled from 'styled-components';
import { defaultPaddings } from 'constants/defaultPaddings';
import { Media } from 'styles/themes/constants';
import { BaseTypography } from 'components/common/BaseTypography/BaseTypography';

interface ContentWrapperProps {
  isEmptyHistory: boolean;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${(props) =>
    !props.isEmptyHistory &&
    `margin: 0 -${defaultPaddings.mobile[1]}px -${defaultPaddings.mobile[0]}px -${defaultPaddings.mobile[1]}px`};

  ${Media.md()} {
    ${(props) =>
      !props.isEmptyHistory &&
      `margin: 0 -${defaultPaddings.tablet[1]}px -${defaultPaddings.tablet[0]}px -${defaultPaddings.tablet[1]}px`};
  }

  ${Media.xl()} {
    margin: 0;
  }
`;

export const Text = styled(BaseTypography.Text)`
  ${Media.md()} {
    font-size: 1rem;
  }
`;
