import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../Card';

const AdvisorDashboard = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    semester: 'all',
    gritLevel: 'all'
  });

  useEffect(() => {
    // Mock data for advisor dashboard
    setTimeout(() => {
      setData({
        totalStudents: 25,
        completedSurveys: 20,
        pendingSurveys: 5,
        students: [
          { id: 1, name: 'Rizal', nim: 'TI19220004', semester: 3, gritScore: 85, status: 'completed' },
          { id: 2, name: 'Melinda', nim: 'TI19220005', semester: 5, gritScore: 72, status: 'completed' },
          { id: 3, name: 'Nora', nim: 'TI19220006', semester: 3, gritScore: 58, status: 'pending' },
          { id: 4, name: 'Herman', nim: 'TI19220007', semester: 5, gritScore: 91, status: 'completed' },
          { id: 5, name: 'Hasan', nim: 'TI19220008', semester: 3, gritScore: 65, status: 'completed' }
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  const getFilteredStudents = () => {
    if (!data) return [];
    
    let filtered = data.students;
    
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
          {t('dashboard.advisor.title')}
        </h1>
        <p className="text-gray-600">
          {t('dashboard.advisor.assignedStudents')}
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {data.totalStudents}
            </div>
            <div className="text-gray-600">{t('dashboard.advisor.totalStudents')}</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {data.completedSurveys}
            </div>
            <div className="text-gray-600">{t('dashboard.advisor.completedSurveys')}</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {data.pendingSurveys}
            </div>
            <div className="text-gray-600">{t('dashboard.advisor.pendingSurveys')}</div>
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
                  Status
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
                      student.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {student.status === 'completed' ? 'Selesai' : 'Pending'}
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

export default AdvisorDashboard;
