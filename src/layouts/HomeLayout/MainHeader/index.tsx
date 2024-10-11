import React, { PropsWithChildren } from 'react';
import { Header } from './styled';

interface MainHeaderProps extends PropsWithChildren {}

export const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
  return <Header>{children}</Header>;
};
