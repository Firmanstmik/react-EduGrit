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
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Route to role-specific dashboard */}
        {hasRole('student') && <StudentDashboard />}
        {hasRole('advisor') && <AdvisorDashboard />}
        {hasRole('kaprodi') && <KaprodiDashboard />}
        {hasRole('head') && <HeadDashboard />}
        {hasRole('admin') && <AdminDashboard />}
        
        {!hasRole(['student', 'advisor', 'kaprodi', 'head', 'admin']) && (
          <div className="text-center py-12">
            <p className="text-gray-600">Access denied</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
