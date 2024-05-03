import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'components/NavBar';
import { PageWrapper } from 'components/PageWrapper';
import { Features } from './Features';

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Features />
      </PageWrapper>
    </>
  );
};
