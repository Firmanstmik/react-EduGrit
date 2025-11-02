import React from 'react';
import AdminDashboard from '../components/dashboard/AdminDashboard';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AdminDashboard />
      </div>
    </div>
  );
};

export default Admin;
