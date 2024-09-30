import { BaseTypography } from 'components/common/BaseTypography/BaseTypography';
import { FONT_SIZE, FONT_FAMILY, Media } from 'styles/themes/constants';
import styled from 'styled-components';

export const Title = styled(BaseTypography.Text)`
  padding: 0 4rem 0.75rem 0;

  font-size: ${FONT_SIZE.xs};

  font-family: ${FONT_FAMILY.secondary};

  border-bottom: 0.2px solid var(--border-nft-color);

  ${Media.xl()} {
    font-size: ${FONT_SIZE.md};
  }
`;
