import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from 'components';
import error404 from 'assets/images/error404.svg';
import { Error } from 'components/Error/Error';

const PageNofound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.serverError')}</PageTitle>
      <Error img={error404} msg={t('serverError.main')} />
    </>
  );
};

export default PageNofound;
