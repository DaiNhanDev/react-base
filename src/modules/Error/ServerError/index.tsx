import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from 'components';
import serverError from 'assets/images/server-error.svg';
import { Error } from 'components/Error/Error';

const ServerError: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.serverError')}</PageTitle>
      <Error img={serverError} msg={t('serverError.main')} />
    </>
  );
};

export default ServerError;
