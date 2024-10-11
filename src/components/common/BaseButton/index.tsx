import React from 'react';
import { ButtonProps as AntButtonProps, Button as AntdButton } from 'antd';

import { Button } from './styled';

export const { Group: ButtonGroup } = AntdButton;

export interface BaseButtonProps extends AntButtonProps {}


export const BaseButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, BaseButtonProps>(
  ({ children, ...props }, ref) => (
    <Button ref={ref}  {...props} >
      {children}
    </Button>
  ),
);
