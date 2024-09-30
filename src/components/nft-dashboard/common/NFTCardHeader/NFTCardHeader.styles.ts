import { BaseRow } from 'components/common/BaseRow/BaseRow';
import { BaseTypography } from 'components/common/BaseTypography/BaseTypography';
import { FONT_SIZE, Media } from 'styles/themes/constants';
import styled from 'styled-components';

export const WrapperRow = styled(BaseRow)`
  margin-bottom: 1.5rem;

  ${Media.xl()} {
    margin-bottom: 2.625rem;
  }
`;

export const Title = styled(BaseTypography.Title)`
  &.ant-typography {
    margin-bottom: 0;

    font-size: ${FONT_SIZE.md};

    ${Media.xl()} {
      font-size: ${FONT_SIZE.lg};
    }
  }
`;
