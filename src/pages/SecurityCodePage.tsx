import React from 'react';
import { SecurityCodeForm } from 'components/auth/SecurityCodeForm/SecurityCodeForm';
import { useTranslation } from 'react-i18next';
import { PageTitle } from 'components/common/PageTitle/PageTitle';

const SecurityCodePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.securityCode')}</PageTitle>
      <SecurityCodeForm />
    </>
  );
};

export default SecurityCodePage;
