import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import StudentDashboard from '../components/dashboard/StudentDashboard';
import AdvisorDashboard from '../components/dashboard/AdvisorDashboard';
import KaprodiDashboard from '../components/dashboard/KaprodiDashboard';
import HeadDashboard from '../components/dashboard/HeadDashboard';
import AdminDashboard from '../components/dashboard/AdminDashboard';

const Dashboard = () => {
  const { user, hasRole } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  // Route to role-specific dashboard
  if (hasRole('student')) {
    return <StudentDashboard />;
  }

  if (hasRole('advisor')) {
    return <AdvisorDashboard />;
  }

  if (hasRole('kaprodi')) {
    return <KaprodiDashboard />;
  }

  if (hasRole('head')) {
    return <HeadDashboard />;
  }

  if (hasRole('admin')) {
    return <AdminDashboard />;
  }

  return <div>Access denied</div>;
};

export default Dashboard;
