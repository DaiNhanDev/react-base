import React from 'react';
import { useTranslation } from 'react-i18next';
import { SecuritySettings } from 'components/profile/profileCard/profileFormNav/nav/SecuritySettings/SecuritySettings';
import { PageTitle } from 'components/common/PageTitle/PageTitle';

const SecuritySettingsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('profile.nav.securitySettings.title')}</PageTitle>
      <SecuritySettings />
    </>
  );
};

export default SecuritySettingsPage;
