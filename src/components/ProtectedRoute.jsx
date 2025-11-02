import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, roles = [], requireSurveyAccess = false }) => {
  const { user, hasRole, canAccessSurvey } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roles.length > 0 && !hasRole(roles)) {
    return <Navigate to="/dashboard" replace />;
  }

  if (requireSurveyAccess && !canAccessSurvey()) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
