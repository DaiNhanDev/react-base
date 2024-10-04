import React from 'react';
import { ProfileOverlay } from '../ProfileOverlay';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './styled';
import { BaseAvatar, BaseRow, BaseCol, BasePopover } from 'components';
import { useUserSlice } from 'slices/user';

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();
  const { user } = useUserSlice();

  return user ? (
    <BasePopover content={<ProfileOverlay />} trigger="click">
      <S.ProfileDropdownHeader as={BaseRow} gutter={[10, 10]} align="middle">
        <BaseCol>
          <BaseAvatar src={user.imgUrl} alt="User" shape="circle" size={40} />
        </BaseCol>
        {isTablet && (
          <BaseCol>
            <span>{`${user.firstName} ${user.lastName[0]}`}</span>
          </BaseCol>
        )}
      </S.ProfileDropdownHeader>
    </BasePopover>
  ) : null;
};
