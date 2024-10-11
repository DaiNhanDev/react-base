import React, { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet-async';

export const PageTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Helmet>
      <title>{children} | Tokyo Deal Admin</title>
    </Helmet>
  );
};
