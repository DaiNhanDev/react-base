import React from 'react';
import styled from 'styled-components';
import { Button as BaseButton, ButtonProps } from 'antd';
import { ButtonType as BaseButtonType } from 'antd/lib/button';
// import Media from '@themes/media';

const ButtonStyled = styled(BaseButton)`
  min-width: 128px;

  &.ant-btn-default {
    border: 1px solid ${({ theme }) => theme.FF3E9D};
    color: ${({ theme }) => theme.FF3E9D};

    &:hover,
    &:disabled,
    &:active {
      opacity: 0.5;
    }
  }

  &.ant-btn-dangerous {
    border: 1px solid ${({ theme }) => theme.danger} !important;
    color: ${({ theme }) => theme.danger} !important;

    &:hover,
    &:disabled,
    &:active {
      opacity: 0.5;
    }
  }

  &.ant-btn-primary {
    background: ${({ theme }) => theme.btnPrimary} !important;
    color: ${({ theme }) => theme.white} !important;
    border: none !important;

    &:hover,
    &:disabled,
    &:active {
      background: ${({ theme }) => theme.btnPrimary} !important;
      color: ${({ theme }) => theme.white} !important;
      opacity: 0.5;
      border: none;
    }
  }

  &.ant-btn-outline {
    background: ${({ theme }) => theme.white} !important;
    color: ${({ theme }) => theme.FF3E9D};
    border: 1px solid ${({ theme }) => theme.FF3E9D};

    &:hover,
    &:disabled,
    &:active {
      background: ${({ theme }) => theme.white} !important;
      color: ${({ theme }) => theme.FF3E9D} !important;

      opacity: 0.5;
      border: 1px solid ${({ theme }) => theme.FF3E9D};
      border-color: ${({ theme }) => theme.btnPrimary};
    }
  }

  &.ant-btn-icon {
    border: none;
    color: ${({ theme }) => theme.white};
    width: 100%;
    min-width: 100%;
    &:hover,
    &:disabled {
      color: ${({ theme }) => theme.white};
      border: none;
      opacity: 0.5;
    }
  }
`;

type ButtonType = BaseButtonType | 'outline' | 'icon';

const Button: React.FC<Omit<ButtonProps, 'type'> & { type?: ButtonType }> = ({
  type,
  ...props
}) => <ButtonStyled type={type as any} {...props} />;

export { Button };
