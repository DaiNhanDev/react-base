import React, { useState } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { BaseButton } from 'components/common/BaseButton/BaseButton';
import { BaseBadge } from 'components/common/BaseBadge/BaseBadge';
import { NotificationsOverlay } from 'components/header/components/notificationsDropdown/NotificationsOverlay/NotificationsOverlay';
import {
  notifications as fetchedNotifications,
  Notification,
} from 'apis/notifications.api';
import { HeaderActionWrapper } from 'components/header/Header.styles';
import { BasePopover } from 'components/common/BasePopover/BasePopover';

export const NotificationsDropdown: React.FC = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(fetchedNotifications);
  const [isOpened, setOpened] = useState(false);

  return (
    <BasePopover
      trigger="click"
      content={
        <NotificationsOverlay
          notifications={notifications}
          setNotifications={setNotifications}
        />
      }
      onOpenChange={setOpened}
    >
      <HeaderActionWrapper>
        <BaseButton
          type={isOpened ? 'primary' : 'text'}
          icon={
            <BaseBadge dot>
              <BellOutlined />
            </BaseBadge>
          }
        />
      </HeaderActionWrapper>
    </BasePopover>
  );
};
