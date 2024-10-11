import React from 'react';
import { BaseRow } from 'components/Common';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return <BaseRow justify="space-between" align="middle" />;
};
