import React, { useMemo, ReactNode } from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BaseNotification } from 'components/Common';
import { capitalize } from 'utils/utils';

import { notificationsSeverities } from 'constants/notificationsSeverities';
import * as S from './styled';
import { NotificationType, BaseSpace, BaseCol, BaseRow } from 'components';
import { Mention, Message } from '..';
export type Notification = Mention | Message;

interface NotificationsOverlayProps {
  notifications: Notification[];
  setNotifications: (state: Notification[]) => void;
}

export const NotificationsOverlay: React.FC<NotificationsOverlayProps> = ({
  notifications,
  setNotifications,
  ...props
}) => {
  const { t } = useTranslation();

  const noticesList = useMemo(
    () =>
      notifications.map((notification, index) => {
        const type = notificationsSeverities.find(
          (dbSeverity) => dbSeverity.id === notification.id,
        )?.name;

        return (
          <BaseNotification
            key={index}
            type={type || 'warning'}
            title={capitalize(type || 'warning')}
            description={t(notification.description)}
            {...(type === 'mention' && {
              mentionIconSrc: (notification as Mention).userIcon,
              title: (notification as Mention).userName,
              description: (
                <Trans i18nKey={(notification as Mention).description}>
                  <S.LinkBtn type="link" href={(notification as Mention).href}>
                    {
                      {
                        place: t((notification as Mention).place),
                      } as unknown as ReactNode // todo: remove casting
                    }
                  </S.LinkBtn>
                </Trans>
              ),
            })}
          />
        );
      }),
    [notifications, t],
  );

  return (
    <S.NoticesOverlayMenu {...props}>
      <BaseRow gutter={[20, 20]}>
        <BaseCol span={24}>
          {notifications.length > 0 ? (
            <BaseSpace
              direction="vertical"
              size={10}
              split={<S.SplitDivider />}
            >
              {noticesList}
            </BaseSpace>
          ) : (
            <S.Text>{t('header.notifications.noNotifications')}</S.Text>
          )}
        </BaseCol>
        <BaseCol span={24}>
          <BaseRow gutter={[10, 10]}>
            {notifications.length > 0 && (
              <BaseCol span={24}>
                <S.Btn type="primary" onClick={() => setNotifications([])}>
                  {t('header.notifications.readAll')}
                </S.Btn>
              </BaseCol>
            )}
            <BaseCol span={24}>
              <S.Btn type="link">
                <Link to="/">{t('header.notifications.viewAll')}</Link>
              </S.Btn>
            </BaseCol>
          </BaseRow>
        </BaseCol>
      </BaseRow>
    </S.NoticesOverlayMenu>
  );
};
