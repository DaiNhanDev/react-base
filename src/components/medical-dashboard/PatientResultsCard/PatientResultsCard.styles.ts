import styled, { css } from 'styled-components';
import { CalendarOutlined } from '@ant-design/icons';
import { FONT_SIZE, Media } from 'styles/themes/constants';
import { BaseTypography } from 'components/common/BaseTypography/BaseTypography';

interface IconProps {
  isActive: boolean;
}

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CalendarIcon = styled(CalendarOutlined)`
  color: ${({ theme }) => theme.antd.colorPrimary};

  ${Media.md()} {
    color: var(--text-main-color);
  }
`;

export const MobileTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2rem;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${FONT_SIZE.xs};
`;

export const Text = styled(BaseTypography.Text)`
  margin-left: 0.5rem;
  line-height: 1;
  font-size: ${FONT_SIZE.xxs};
  color: var(--text-main-color);

  ${Media.md()} {
    font-size: ${FONT_SIZE.xs};
  }
`;

export const Description = styled(BaseTypography.Text)`
  margin-top: 0.625rem;
  font-size: ${FONT_SIZE.xxs};

  ${Media.md()} {
    font-size: ${FONT_SIZE.xs};
  }
`;

export const IconWrapper = styled.div<IconProps>`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isActive
      ? css`
          background-color: ${({ theme }) => theme.antd.colorPrimary};
          color: ${({ theme }) => theme.antd.colorTextSecondary};
        `
      : css`
          background-color: var(--timeline-background-color);
          color: ${({ theme }) => theme.antd.colorPrimary};
        `}
  font-size: 1.15rem;
`;
