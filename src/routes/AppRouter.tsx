import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import RequireAuth from 'components/router/RequireAuth';
import MainLayout from 'layouts/HomeLayout/MainLayout';
import RequireAuth from './RequireAuth';

const AuthLayout = React.lazy(() => import('layouts/AuthLayout'));

import { Dashboard } from 'modules/Dashboard/Loadable';
import { DataTables } from 'modules/DataTable/Loadable';

const Logout = React.lazy(() => import('./Logout'));

export const NFT_DASHBOARD_PATH = '/';
export const MEDICAL_DASHBOARD_PATH = '/medical-dashboard';

const AuthLayoutFallback = AuthLayout;
const LogoutFallback = Logout;

export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={NFT_DASHBOARD_PATH} element={protectedLayout}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/auth" element={<AuthLayoutFallback />}></Route>
        <Route path="/logout" element={<LogoutFallback />} />
      </Routes>
    </BrowserRouter>
  );
};
