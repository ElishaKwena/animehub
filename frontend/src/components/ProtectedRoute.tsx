import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children?: React.ReactNode; // Optional if using <Outlet>
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  isAuthenticated, 
  children 
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Use either:
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;