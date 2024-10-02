import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from 'components/common/Forms/BaseButtonsForm/BaseButtonsForm';
import { BaseCard } from 'components/common/BaseCard/BaseCard';
import { NotificationsTypes } from 'components/profile/profileCard/profileFormNav/nav/notifications/NotificationsTypes/NotificationsTypes';
import * as S from './Notifications.styles';

export const Notifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseCard>
      <BaseButtonsForm.Item>
        <BaseButtonsForm.Title>
          {t('profile.nav.notifications.settings')}
        </BaseButtonsForm.Title>
      </BaseButtonsForm.Item>
      <S.Description>
        {t('profile.nav.notifications.description')}
      </S.Description>
      <NotificationsTypes />
    </BaseCard>
  );
};
