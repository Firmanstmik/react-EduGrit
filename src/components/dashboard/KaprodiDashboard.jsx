import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import Card from '../Card';

const KaprodiDashboard = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    semester: 'all',
    gritLevel: 'all'
  });

  useEffect(() => {
    // Mock data for kaprodi dashboard
    setTimeout(() => {
      setData({
        programStudents: user.prodi === 'TI' ? 45 : 38,
        completedSurveys: user.prodi === 'TI' ? 40 : 32,
        highGrit: user.prodi === 'TI' ? 15 : 12,
        moderateGrit: user.prodi === 'TI' ? 20 : 18,
        lowGrit: user.prodi === 'TI' ? 5 : 2,
        students: [
          { id: 1, name: 'Firman Maulana', nim: 'TI19220003', semester: 7, gritScore: 95, prodi: 'TI' },
          { id: 2, name: 'Siti Nurhaliza', nim: '2021002', semester: 5, gritScore: 72, prodi: 'TI' },
          { id: 3, name: 'Budi Santoso', nim: '2021003', semester: 3, gritScore: 58, prodi: 'TI' },
          { id: 4, name: 'Maya Sari', nim: '2021004', semester: 5, gritScore: 91, prodi: 'TI' },
          { id: 5, name: 'Dedi Kurniawan', nim: '2021005', semester: 3, gritScore: 65, prodi: 'TI' }
        ]
      });
      setLoading(false);
    }, 1000);
  }, [user]);

  const getFilteredStudents = () => {
    if (!data) return [];
    
    let filtered = data.students.filter(student => student.prodi === user.prodi);
    
    if (filters.semester !== 'all') {
      filtered = filtered.filter(student => student.semester.toString() === filters.semester);
    }
    
    if (filters.gritLevel !== 'all') {
      filtered = filtered.filter(student => {
        const score = student.gritScore;
        switch (filters.gritLevel) {
          case 'high': return score >= 80;
          case 'moderate': return score >= 60 && score < 80;
          case 'low': return score < 60;
          default: return true;
        }
      });
    }
    
    return filtered;
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
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
          {t('dashboard.kaprodi.title')} - {t(`programs.${user.prodi.toLowerCase()}`)}
        </h1>
        <p className="text-gray-600">
          {t('dashboard.kaprodi.programStudents')}
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {data.programStudents}
            </div>
            <div className="text-gray-600">Total Mahasiswa</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {data.completedSurveys}
            </div>
            <div className="text-gray-600">Survey Selesai</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {data.highGrit}
            </div>
            <div className="text-gray-600">Grit Tinggi</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {data.moderateGrit}
            </div>
            <div className="text-gray-600">Grit Sedang</div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('filters.semester')}
            </label>
            <select
              value={filters.semester}
              onChange={(e) => setFilters(prev => ({ ...prev, semester: e.target.value }))}
              className="input-field"
            >
              <option value="all">{t('filters.all')}</option>
              <option value="1">Semester 1</option>
              <option value="3">Semester 3</option>
              <option value="5">Semester 5</option>
              <option value="7">Semester 7</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('filters.gritLevel')}
            </label>
            <select
              value={filters.gritLevel}
              onChange={(e) => setFilters(prev => ({ ...prev, gritLevel: e.target.value }))}
              className="input-field"
            >
              <option value="all">{t('filters.all')}</option>
              <option value="high">{t('grit.level.high')}</option>
              <option value="moderate">{t('grit.level.moderate')}</option>
              <option value="low">{t('grit.level.low')}</option>
            </select>
          </div>
        </div>

        {/* Students Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mahasiswa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Semester
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('grit.score')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Level
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {getFilteredStudents().map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {student.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {student.nim}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.semester}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getScoreColor(student.gritScore)}`}>
                      {student.gritScore}/100
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      student.gritScore >= 80 
                        ? 'bg-green-100 text-green-800'
                        : student.gritScore >= 60
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {student.gritScore >= 80 ? t('grit.level.high') : 
                       student.gritScore >= 60 ? t('grit.level.moderate') : t('grit.level.low')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default KaprodiDashboard;
