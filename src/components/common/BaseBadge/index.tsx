import React from 'react';
import { BadgeProps, Badge } from 'antd';
import * as S from './styled';

export type BaseBadgeProps = BadgeProps;

interface BaseBadgeInterface extends React.FC<BaseBadgeProps> {
  Ribbon: typeof Badge.Ribbon;
}
export type Severity = 'success' | 'error' | 'info' | 'warning';

export const mapBadgeStatus = (status: BaseBadgeProps['status']): Severity => {
  if (!status || status === 'default' || status === 'processing') {
    return 'info';
  }

  return status;
};

export const BaseBadge: BaseBadgeInterface = ({
  status,
  children,
  count,
  ...props
}) => (
  <S.Badge
    {...(status
      ? count
        ? { count, severity: mapBadgeStatus(status) }
        : { status }
      : { count })}
    {...props}
  >
    {children}
  </S.Badge>
);

BaseBadge.Ribbon = Badge.Ribbon;
