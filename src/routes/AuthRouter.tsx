import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'slices';

const AuthRouter: React.FC<PropsWithChildren> = ({ children }) => {
  const { authenticated } = useAuth();
  return !authenticated ? <>{children}</> : <Navigate to="/" replace />;
};

export default AuthRouter;
