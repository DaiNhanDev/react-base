import React, { useState } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { NotificationsOverlay } from './NotificationsOverlay';
import { BasePopover, BaseBadge, BaseButton } from 'components/Common';
import styled from 'styled-components';
import { Media } from 'styles';

export const HeaderActionWrapper = styled.div`
  cursor: pointer;

  & > .ant-btn > span[role='img'],
  .ant-badge {
    font-size: 1.25rem;

    ${Media.md()} {
      font-size: 1.625rem;
    }
  }

  & .ant-badge {
    display: inline-block;
  }
`;

export interface Message {
  id: number;
  description: string;
}

export interface Mention extends Message {
  userName: string;
  userIcon: string;
  place: string;
  href: string;
}

export type Notification = Mention | Message;

export const notificationsData = [
  {
    id: 2,
    description: 'header.notifications.loginAttempt',
  },
  {
    id: 1,
    description: 'header.notifications.successPayment',
  },
  {
    id: 3,
    description: 'header.notifications.serverError',
  },
  {
    id: 4,
    description: 'header.notifications.mention',
    userName: 'Steve Manson',
    userIcon:
      'https://res.cloudinary.com/lapkinthegod/image/upload/v1629187274/young-male-doctor-white-uniform_x7dcrs.jpg',
    place: 'medical-dashboard.latestScreenings.title',
    href: `/#latest-screenings`,
  },
];

export const NotificationsDropdown: React.FC = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(notificationsData);
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
