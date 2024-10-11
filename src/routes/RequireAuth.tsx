import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'slices';

const RequireAuth: React.FC<PropsWithChildren> = ({ children }) => {
  const { authenticated } = useAuth();
  return authenticated ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

export default RequireAuth;
