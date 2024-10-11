import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import RequireAuth from 'components/router/RequireAuth';
import MainLayout from 'layouts/HomeLayout/MainLayout';
import RequireAuth from './RequireAuth';
import AuthRouter from './AuthRouter';

const AuthLayout = React.lazy(() => import('layouts/AuthLayout'));

import { Dashboard } from 'modules/Dashboard/Loadable';
import { LoginPage } from 'modules/Auth/Login/Loadable';
import { PageNofound } from 'modules/Error/Notfound/Loadable';
import { ServerError } from 'modules/Error/ServerError/Loadable';
import { ButtonsPage } from 'modules/UIComponents/Button/Loadable';
import { UsersManagament } from 'modules/Users/Loadable';

const Logout = React.lazy(() => import('./Logout'));

export const Home = '/';

export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );
  const authLayout = (
    <AuthRouter>
      <AuthLayout />
    </AuthRouter>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Home} element={protectedLayout}>
          <Route index element={<Dashboard />} />
          <Route path="users-management">
            <Route index element={<UsersManagament />} />
          </Route>
          <Route path="ui-components">
            <Route path="button" element={<ButtonsPage />} />
          </Route>
        </Route>
        <Route path="/auth" element={authLayout}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<PageNofound />} />
        <Route path="/server-error" element={<ServerError />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};
