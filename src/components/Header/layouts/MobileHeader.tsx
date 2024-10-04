import React from 'react';
import { NotificationsDropdown } from 'components/Header/components/notificationsDropdown';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown';
import { HeaderSearch } from 'components/Header/components/HeaderSearch';
import { SettingsDropdown } from '../components/settingsDropdown';
import * as S from '../styled';
import { BaseCol, BaseRow } from 'components/Common';

interface MobileHeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  toggleSider,
  isSiderOpened,
}) => {
  return (
    <BaseRow justify="space-between" align="middle">
      <BaseCol>
        <ProfileDropdown />
      </BaseCol>

      <BaseCol>
        <BaseRow align="middle">
          <BaseCol>
            <NotificationsDropdown />
          </BaseCol>

          <BaseCol>
            <HeaderSearch />
          </BaseCol>

          <BaseCol>
            <SettingsDropdown />
          </BaseCol>
        </BaseRow>
      </BaseCol>

      <S.BurgerCol>
        <S.MobileBurger onClick={toggleSider} isCross={isSiderOpened} />
      </S.BurgerCol>
    </BaseRow>
  );
};
