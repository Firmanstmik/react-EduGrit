import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import Card from '../Card';

const AdminDashboard = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create'); // 'create' or 'edit'
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    role: 'student',
    prodi: 'TI',
    semester: '1',
    status: 'active'
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
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
          { id: 1, name: 'Firman Maulana', username: 'TI19220003', role: 'student', email: 'firman@student.stmik.ac.id', prodi: 'TI', semester: '7', status: 'active' },
          { id: 2, name: 'Rizal', username: 'TI19220004', role: 'student', email: 'rizal@student.stmik.ac.id', prodi: 'TI', semester: '3', status: 'active' },
          { id: 3, name: 'Melinda', username: 'TI19220005', role: 'student', email: 'melinda@student.stmik.ac.id', prodi: 'TI', semester: '5', status: 'active' },
          { id: 4, name: 'Nora', username: 'TI19220006', role: 'student', email: 'nora@student.stmik.ac.id', prodi: 'TI', semester: '3', status: 'active' },
          { id: 5, name: 'Herman', username: 'TI19220007', role: 'student', email: 'herman@student.stmik.ac.id', prodi: 'TI', semester: '5', status: 'active' },
          { id: 6, name: 'Hasan', username: 'TI19220008', role: 'student', email: 'hasan@student.stmik.ac.id', prodi: 'TI', semester: '3', status: 'active' },
          { id: 7, name: 'Jihadul Akbar S.Kom.,M.Kom', username: 'dosen001', role: 'advisor', email: 'jihadul@stmik.ac.id', status: 'active' },
          { id: 8, name: 'Sofiansyah Fadli S.Kom.,M.Kom', username: 'kaprodi_ti', role: 'kaprodi', email: 'sofiansyah@stmik.ac.id', prodi: 'TI', status: 'active' },
          { id: 9, name: 'Dr. Dedi Kurniawan', username: 'kaprodi_si', role: 'kaprodi', email: 'dedi@stmik.ac.id', prodi: 'SI', status: 'active' },
          { id: 10, name: 'Khairul Imtihan S.Kom.,M.Kom', username: 'ketua', role: 'head', email: 'imtihan@stmik.ac.id', status: 'active' },
          { id: 11, name: 'Admin System', username: 'admin', role: 'admin', email: 'admin@stmik.ac.id', status: 'active' }
        ]
      });
      setLoading(false);
    }, 1000);
  };

  const toggleSurveyStatus = () => {
    setData(prev => ({
      ...prev,
      surveyStatus: prev.surveyStatus === 'open' ? 'closed' : 'open'
    }));
    toast.success(`Survey ${data.surveyStatus === 'open' ? 'ditutup' : 'dibuka'}`);
  };

  const openCreateModal = () => {
    setModalMode('create');
    setSelectedUser(null);
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      role: 'student',
      prodi: 'TI',
      semester: '1',
      status: 'active'
    });
    setShowModal(true);
  };

  const openEditModal = (user) => {
    setModalMode('edit');
    setSelectedUser(user);
    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
      password: '',
      role: user.role,
      prodi: user.prodi || 'TI',
      semester: user.semester || '1',
      status: user.status
    });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (modalMode === 'create') {
      // Create new user
      const newUser = {
        id: data.users.length + 1,
        ...formData
      };
      setData(prev => ({
        ...prev,
        users: [...prev.users, newUser],
        totalUsers: prev.totalUsers + 1,
        students: formData.role === 'student' ? prev.students + 1 : prev.students,
        advisors: formData.role === 'advisor' ? prev.advisors + 1 : prev.advisors,
        kaprodi: formData.role === 'kaprodi' ? prev.kaprodi + 1 : prev.kaprodi,
        admins: formData.role === 'admin' ? prev.admins + 1 : prev.admins
      }));
      toast.success('User berhasil ditambahkan!');
    } else {
      // Edit existing user
      setData(prev => ({
        ...prev,
        users: prev.users.map(user => 
          user.id === selectedUser.id 
            ? { ...user, ...formData }
            : user
        )
      }));
      toast.success('User berhasil diupdate!');
    }
    
    setShowModal(false);
  };

  const handleDelete = (userId) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus user ini?')) {
      const userToDelete = data.users.find(u => u.id === userId);
      setData(prev => ({
        ...prev,
        users: prev.users.filter(user => user.id !== userId),
        totalUsers: prev.totalUsers - 1,
        students: userToDelete.role === 'student' ? prev.students - 1 : prev.students,
        advisors: userToDelete.role === 'advisor' ? prev.advisors - 1 : prev.advisors,
        kaprodi: userToDelete.role === 'kaprodi' ? prev.kaprodi - 1 : prev.kaprodi,
        admins: userToDelete.role === 'admin' ? prev.admins - 1 : prev.admins
      }));
      toast.success('User berhasil dihapus!');
    }
  };

  const toggleUserStatus = (userId) => {
    setData(prev => ({
      ...prev,
      users: prev.users.map(user => 
        user.id === userId 
          ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
          : user
      )
    }));
    toast.success('Status user berhasil diubah!');
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
            <button onClick={openCreateModal} className="btn-primary">
              + Tambah User Baru
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
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        user.role === 'student' ? 'bg-blue-100 text-blue-800' :
                        user.role === 'advisor' ? 'bg-green-100 text-green-800' :
                        user.role === 'kaprodi' ? 'bg-yellow-100 text-yellow-800' :
                        user.role === 'head' ? 'bg-purple-100 text-purple-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {t(`roles.${user.role}`)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleUserStatus(user.id)}
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full cursor-pointer ${
                          user.status === 'active' 
                            ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                            : 'bg-red-100 text-red-800 hover:bg-red-200'
                        }`}
                      >
                        {user.status === 'active' ? 'Aktif' : 'Nonaktif'}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button 
                        onClick={() => openEditModal(user)}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Hapus
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

      {/* Modal for Create/Edit User */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {modalMode === 'create' ? 'Tambah User Baru' : 'Edit User'}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Username/NIM *
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password {modalMode === 'edit' && '(kosongkan jika tidak diubah)'}
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="input-field"
                      required={modalMode === 'create'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="student">Mahasiswa</option>
                      <option value="advisor">Dosen PA</option>
                      <option value="kaprodi">Kaprodi</option>
                      <option value="head">Ketua STMIK</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  {(formData.role === 'student' || formData.role === 'kaprodi') && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Program Studi *
                      </label>
                      <select
                        name="prodi"
                        value={formData.prodi}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                      >
                        <option value="TI">Teknik Informatika</option>
                        <option value="SI">Sistem Informasi</option>
                      </select>
                    </div>
                  )}

                  {formData.role === 'student' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Semester *
                      </label>
                      <select
                        name="semester"
                        value={formData.semester}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                      >
                        <option value="1">Semester 1</option>
                        <option value="2">Semester 2</option>
                        <option value="3">Semester 3</option>
                        <option value="4">Semester 4</option>
                        <option value="5">Semester 5</option>
                        <option value="6">Semester 6</option>
                        <option value="7">Semester 7</option>
                        <option value="8">Semester 8</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status *
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="active">Aktif</option>
                      <option value="inactive">Nonaktif</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="btn-secondary"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    {modalMode === 'create' ? 'Tambah User' : 'Simpan Perubahan'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
