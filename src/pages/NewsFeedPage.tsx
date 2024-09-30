import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from 'components/common/PageTitle/PageTitle';
import { NewsFeed } from 'components/apps/newsFeed/NewsFeed';

const NewsFeedPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.feed')}</PageTitle>
      <NewsFeed />
    </>
  );
};

export default NewsFeedPage;
