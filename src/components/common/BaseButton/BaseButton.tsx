import React from 'react';
import { ButtonProps as AntButtonProps, Button as AntdButton } from 'antd';
import { Severity } from 'interfaces/interfaces';
import * as S from './BaseButton.styles';

export const { Group: ButtonGroup } = AntdButton;

export interface BaseButtonProps extends AntButtonProps {
  severity?: Severity;
  noStyle?: boolean;
}

export const BaseButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement | null,
  BaseButtonProps
>(({ className, severity, noStyle, children, ...props }, ref) => (
  <S.Button
    ref={ref}
    className={className}
    $noStyle={noStyle}
    {...props}
    $severity={severity}
  >
    {children}
  </S.Button>
));
