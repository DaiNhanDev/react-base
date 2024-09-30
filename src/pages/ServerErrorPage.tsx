import React from 'react';
import { useTranslation } from 'react-i18next';
import { Error } from 'components/Error/Error';
import { PageTitle } from 'components/common/PageTitle/PageTitle';
import serverError from 'assets/images/server-error.svg';

const ServerErrorPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.serverError')}</PageTitle>
      <Error img={serverError} msg={t('serverError.main')} />
    </>
  );
};

export default ServerErrorPage;
