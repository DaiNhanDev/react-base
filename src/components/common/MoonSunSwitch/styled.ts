import { BORDER_RADIUS } from 'styles';
import { BaseButton } from 'components/Common';
import styled, { css } from 'styled-components';

interface BtnProps {
  $isFirstActive: boolean;
}

export const Btn = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  &.ant-btn-icon-only.ant-btn-sm {
    height: 1.875rem;
  }
`;

export const ButtonGroup = styled.div<BtnProps>`
  display: inline-flex;
  padding: 0.325rem;
  column-gap: 0.325rem;

  border-radius: ${BORDER_RADIUS};

  background: ${({theme}) => `rgba(${theme.app.primaryRGB}, 0.1)`};

  ${(props) =>
    props.$isFirstActive
      ? css`
          & > ${Btn}:first-of-type {
            background: ${({theme}) => theme.app.primary};
            color: ${({theme}) => theme.antd.colorTextSecondary};
          }
        `
      : css`
          & > ${Btn}:last-of-type {
            background: ${({theme}) => theme.app.warning};
            color: ${({theme}) => theme.antd.colorTextSecondary};
          }
        `}

  &:not(:last-of-type) {
    margin-bottom: 0.625rem;
  }
`;
