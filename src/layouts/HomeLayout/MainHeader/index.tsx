import React, { PropsWithChildren } from 'react';
import * as S from './styled';

interface MainHeaderProps extends PropsWithChildren {
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
