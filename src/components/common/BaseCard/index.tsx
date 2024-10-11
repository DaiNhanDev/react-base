import React from 'react';
import { CardProps } from 'antd';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './styled';

export const BaseCard: React.FC<CardProps> = ({
  className,
  size,
  children,
  ...props
}) => {
  const { isTablet } = useResponsive();

  return (
    <S.Card
      size={size ? size : isTablet ? 'default' : 'small'}
      bordered={false}
      {...props}
    >
      {children}
    </S.Card>
  );
};
