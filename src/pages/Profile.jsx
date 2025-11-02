import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import Card from '../components/Card';
import toast from 'react-hot-toast';

const Profile = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('info');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nim: '',
    prodi: '',
    semester: '',
    advisor: ''
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        nim: user.nim || '',
        prodi: user.prodi || '',
        semester: user.semester || '',
        advisor: user.advisor || ''
      });
    }
  }, [user]);

  const handleInfoSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Mock API call
      setTimeout(() => {
        toast.success(t('profile.updateSuccess'));
        setLoading(false);
      }, 1000);
    } catch (error) {
      toast.error(t('profile.updateError'));
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('Password baru tidak cocok');
      return;
    }
    
    setLoading(true);
    
    try {
      // Mock API call
      setTimeout(() => {
        toast.success('Password berhasil diubah');
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      toast.error('Gagal mengubah password');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('profile.title')}
          </h1>
          <p className="text-lg text-gray-600">
            Kelola informasi profil Anda
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('info')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'info'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {t('profile.personalInfo')}
            </button>
            <button
              onClick={() => setActiveTab('password')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'password'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {t('profile.changePassword')}
            </button>
          </nav>
        </div>

        {/* Personal Information Tab */}
        {activeTab === 'info' && (
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {t('profile.personalInfo')}
            </h2>
            <form onSubmit={handleInfoSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('profile.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('profile.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="nim" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('profile.nim')}
                  </label>
                  <input
                    type="text"
                    id="nim"
                    name="nim"
                    value={formData.nim}
                    onChange={handleChange}
                    className="input-field"
                    disabled={user?.role === 'student'}
                  />
                </div>
                <div>
                  <label htmlFor="prodi" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('profile.prodi')}
                  </label>
                  <select
                    id="prodi"
                    name="prodi"
                    value={formData.prodi}
                    onChange={handleChange}
                    className="input-field"
                    disabled={user?.role === 'student'}
                  >
                    <option value="">Pilih Program Studi</option>
                    <option value="TI">Teknik Informatika</option>
                    <option value="SI">Sistem Informasi</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('profile.semester')}
                  </label>
                  <select
                    id="semester"
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    className="input-field"
                    disabled={user?.role === 'student'}
                  >
                    <option value="">Pilih Semester</option>
                    <option value="1">Semester 1</option>
                    <option value="3">Semester 3</option>
                    <option value="5">Semester 5</option>
                    <option value="7">Semester 7</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="advisor" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('profile.advisor')}
                  </label>
                  <input
                    type="text"
                    id="advisor"
                    name="advisor"
                    value={formData.advisor}
                    onChange={handleChange}
                    className="input-field"
                    disabled={user?.role === 'student'}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-primary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? t('common.loading') : t('common.save')}
                </button>
              </div>
            </form>
          </Card>
        )}

        {/* Change Password Tab */}
        {activeTab === 'password' && (
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {t('profile.changePassword')}
            </h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('profile.currentPassword')}
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('profile.newPassword')}
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('profile.confirmPassword')}
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="input-field"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-primary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? t('common.loading') : 'Ubah Password'}
                </button>
              </div>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Profile;
