import React from 'react';
import { Navigate } from 'react-router-dom';

const Logout: React.FC = () => {
  return <Navigate to="/auth/login" replace />;
};

export default Logout;
