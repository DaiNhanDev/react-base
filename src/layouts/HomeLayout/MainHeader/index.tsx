import { WithChildrenProps } from 'types/generalTypes';
import React from 'react';
import * as S from './styled';

interface MainHeaderProps extends WithChildrenProps {
  isTwoColumnsLayout: boolean;
}

export const MainHeader: React.FC<MainHeaderProps> = ({
  isTwoColumnsLayout,
  children,
}) => {
  return (
    <S.Header $isTwoColumnsLayoutHeader={isTwoColumnsLayout}>
      {children}
    </S.Header>
  );
};
