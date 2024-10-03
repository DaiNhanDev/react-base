import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Tables } from 'components/tables/Tables/Tables';
import { PageTitle } from 'components';

const DataTablesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.dataTables')}</PageTitle>
      {/* <Tables /> */}
    </>
  );
};

export default DataTablesPage;
