import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'hooks/reduxHooks';
import * as S from './TopUpBalanceButton.styles';
import { useThemeSlice } from 'slices';

export const TopUpBalanceButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  const { t } = useTranslation();
  const { themeKey } = useThemeSlice();

  return (
    <S.TopUpButton
      type={themeKey === 'dark' ? 'dashed' : 'primary'}
      block
      onClick={onClick}
    >
      {t('nft.topUpBalance')}
    </S.TopUpButton>
  );
};
