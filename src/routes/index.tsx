/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import { NotFoundPage } from 'screens/NotFoundPage';
import PrivateRoute from './privateRoute';

import PublicRoute from './publicRoute';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './constant';
import CustomRoute from './customRoute';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {PRIVATE_ROUTES.map((routeConfig) => (
          <PrivateRoute key={routeConfig.path} {...routeConfig} />
        ))}
        {PUBLIC_ROUTES.map((routeConfig) => (
          <PublicRoute key={routeConfig.path} {...routeConfig} />
        ))}
        <CustomRoute path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default AppRoutes;
