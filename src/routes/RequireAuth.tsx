import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'slices';

const RequireAuth: React.FC<PropsWithChildren> = ({ children }) => {
  // const token = useAppSelector((state) => state.auth.token);
  const token = useAuth();
  return token ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

export default RequireAuth;
