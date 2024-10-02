import { BaseAvatar } from 'components/common/BaseAvatar/BaseAvatar';
import { BaseRow } from 'components/common/BaseRow/BaseRow';
import { BaseTypography } from 'components/common/BaseTypography/BaseTypography';
import { FONT_SIZE, FONT_WEIGHT, Media } from 'styles/themes/constants';
import styled from 'styled-components';

interface ScreeningsRowProps {
  $isActive: boolean;
}

interface PercentageProps {
  $isDowngrade: boolean;
}

interface Importance {
  $isPrimary: boolean;
  $isSecondary: boolean;
}

export const ScreeningsRow = styled(BaseRow)<ScreeningsRowProps>`
  cursor: pointer;
  transition: all 0.3s ease;

  .ant-typography {
    font-weight: ${(props) =>
      props.$isActive ? FONT_WEIGHT.bold : FONT_WEIGHT.regular};
  }
`;

export const Avatar = styled(BaseAvatar)<Importance>`
  position: relative;

  ${(props) =>
    (props.$isPrimary &&
      `border: 2px solid ${({ theme }) => theme.antd.colorPrimary}`) ||
    (props.$isSecondary && `border 2px solid var(--error-color)`)}
`;

export const Name = styled(BaseTypography.Text)<Importance>`
  white-space: nowrap;

  font-size: ${FONT_SIZE.xs};

  font-weight: ${FONT_WEIGHT.semibold};

  color: ${(props) =>
    (props.$isPrimary && '${({theme}) => theme.antd.colorPrimary}') ||
    (props.$isSecondary && 'var(--error-color)')};

  ${Media.xl()} {
    font-size: ${FONT_SIZE.md};
  }
`;

export const Percentage = styled(BaseTypography.Text)<PercentageProps>`
  font-size: ${FONT_SIZE.xs};

  color: ${(props) =>
    props.$isDowngrade ? 'var(--error-color)' : 'var(--success-color)'};

  ${Media.xl()} {
    font-size: ${FONT_SIZE.md};
  }
`;
