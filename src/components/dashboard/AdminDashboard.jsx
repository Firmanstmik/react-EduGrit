import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../Card';

const AdminDashboard = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Mock data for admin dashboard
    setTimeout(() => {
      setData({
        totalUsers: 150,
        students: 120,
        advisors: 15,
        kaprodi: 2,
        admins: 1,
        surveyStatus: 'open',
        surveyStartDate: '2024-01-01',
        surveyEndDate: '2024-03-31',
        recentAspirations: [
          { id: 1, text: 'Kami membutuhkan lebih banyak praktikum...', date: '2024-01-20', isAnonymous: true },
          { id: 2, text: 'Fasilitas laboratorium perlu diperbaiki', date: '2024-01-19', isAnonymous: false },
          { id: 3, text: 'Jadwal kuliah terlalu padat', date: '2024-01-18', isAnonymous: true }
        ],
        users: [
          { id: 1, name: 'Ahmad Rizki', username: '2021001', role: 'student', email: 'ahmad@student.stmik.ac.id', status: 'active' },
          { id: 2, name: 'Dr. Budi Santoso', username: 'dosen001', role: 'advisor', email: 'budi@stmik.ac.id', status: 'active' },
          { id: 3, name: 'Prof. Maya Sari', username: 'kaprodi_ti', role: 'kaprodi', email: 'maya@stmik.ac.id', status: 'active' }
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  const toggleSurveyStatus = () => {
    setData(prev => ({
      ...prev,
      surveyStatus: prev.surveyStatus === 'open' ? 'closed' : 'open'
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('dashboard.admin.title')}
        </h1>
        <p className="text-gray-600">
          {t('dashboard.admin.userManagement')}
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {data.totalUsers}
            </div>
            <div className="text-gray-600">Total Users</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {data.students}
            </div>
            <div className="text-gray-600">Mahasiswa</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {data.advisors}
            </div>
            <div className="text-gray-600">Dosen PA</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {data.kaprodi}
            </div>
            <div className="text-gray-600">Kaprodi</div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'users', label: 'Manajemen User' },
            { id: 'survey', label: 'Kontrol Survey' },
            { id: 'aspirations', label: 'Aspirasi Terbaru' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Status Survey
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status:</span>
                <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                  data.surveyStatus === 'open' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {data.surveyStatus === 'open' ? 'Terbuka' : 'Tertutup'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tanggal Mulai:</span>
                <span className="text-gray-900">{new Date(data.surveyStartDate).toLocaleDateString('id-ID')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tanggal Berakhir:</span>
                <span className="text-gray-900">{new Date(data.surveyEndDate).toLocaleDateString('id-ID')}</span>
              </div>
              <button
                onClick={toggleSurveyStatus}
                className={`w-full py-2 px-4 rounded-md text-sm font-medium ${
                  data.surveyStatus === 'open'
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {data.surveyStatus === 'open' ? 'Tutup Survey' : 'Buka Survey'}
              </button>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              User Distribution
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Mahasiswa:</span>
                <span className="font-medium">{data.students}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dosen PA:</span>
                <span className="font-medium">{data.advisors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Kaprodi:</span>
                <span className="font-medium">{data.kaprodi}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Admin:</span>
                <span className="font-medium">{data.admins}</span>
              </div>
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'users' && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {t('admin.userManagement.title')}
            </h3>
            <button className="btn-primary">
              {t('admin.userManagement.createUser')}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('admin.userManagement.role')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t('admin.userManagement.status')}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.username}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {t(`roles.${user.role}`)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status === 'active' ? t('admin.userManagement.active') : t('admin.userManagement.inactive')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-primary-600 hover:text-primary-900 mr-3">
                        {t('common.edit')}
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        {t('common.delete')}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {activeTab === 'aspirations' && (
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Aspirasi Terbaru
          </h3>
          <div className="space-y-4">
            {data.recentAspirations.map((aspiration) => (
              <div key={aspiration.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-gray-500">
                    {new Date(aspiration.date).toLocaleDateString('id-ID')}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    aspiration.isAnonymous 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {aspiration.isAnonymous ? 'Anonim' : 'Teridentifikasi'}
                  </span>
                </div>
                <p className="text-gray-900">{aspiration.text}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default AdminDashboard;
