import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks/reduxHooks';
import { WithChildrenProps } from 'types/generalTypes';
import { useAuth } from 'slices';

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  // const token = useAppSelector((state) => state.auth.token);
  const token = useAuth();
  return token ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

export default RequireAuth;
