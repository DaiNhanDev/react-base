import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from 'components/common/PageTitle/PageTitle';
import { LockForm } from 'components/auth/LockForm/LockForm';

const LockPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.lock')}</PageTitle>
      <LockForm />
    </>
  );
};

export default LockPage;
