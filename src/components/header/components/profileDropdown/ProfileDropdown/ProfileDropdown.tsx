import React from 'react';
import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';
// import { useAppSelector } from 'hooks/reduxHooks';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './ProfileDropdown.styles';
import { BasePopover } from 'components/common/BasePopover/BasePopover';
import { BaseCol } from 'components/common/BaseCol/BaseCol';
import { BaseRow } from 'components/common/BaseRow/BaseRow';
import { BaseAvatar } from 'components/common/BaseAvatar/BaseAvatar';
import { useUser } from 'slices/user';

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();
  const { user } = useUser();
  // const user = useAppSelector((state) => state.user.user);

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
