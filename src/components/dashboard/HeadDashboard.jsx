import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../Card';

const HeadDashboard = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for head dashboard
    setTimeout(() => {
      setData({
        totalStudents: 83,
        tiStudents: 45,
        siStudents: 38,
        completedSurveys: 72,
        highGrit: 27,
        moderateGrit: 38,
        lowGrit: 7,
        programData: [
          { name: 'TI', students: 45, completed: 40, highGrit: 15, moderateGrit: 20, lowGrit: 5 },
          { name: 'SI', students: 38, completed: 32, highGrit: 12, moderateGrit: 18, lowGrit: 2 }
        ],
        semesterData: [
          { semester: 1, total: 20, high: 5, moderate: 12, low: 3 },
          { semester: 3, total: 25, high: 8, moderate: 15, low: 2 },
          { semester: 5, total: 22, high: 9, moderate: 11, low: 2 },
          { semester: 7, total: 16, high: 5, moderate: 9, low: 2 }
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

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
          {t('dashboard.head.title')}
        </h1>
        <p className="text-gray-600">
          {t('dashboard.head.institutionalOverview')}
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {data.totalStudents}
            </div>
            <div className="text-gray-600">{t('dashboard.head.allStudents')}</div>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Program Overview */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Overview Program
          </h3>
          <div className="space-y-4">
            {data.programData.map((program) => (
              <div key={program.name} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900">
                    {program.name === 'TI' ? t('programs.ti') : t('programs.si')}
                  </h4>
                  <span className="text-sm text-gray-600">
                    {program.students} mahasiswa
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-green-600 font-semibold">{program.highGrit}</div>
                    <div className="text-gray-600">Tinggi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-600 font-semibold">{program.moderateGrit}</div>
                    <div className="text-gray-600">Sedang</div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-600 font-semibold">{program.lowGrit}</div>
                    <div className="text-gray-600">Rendah</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Grit Distribution */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Distribusi Grit
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Tinggi', value: data.highGrit },
                  { name: 'Sedang', value: data.moderateGrit },
                  { name: 'Rendah', value: data.lowGrit }
                ]}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {[
                  { name: 'Tinggi', value: data.highGrit },
                  { name: 'Sedang', value: data.moderateGrit },
                  { name: 'Rendah', value: data.lowGrit }
                ].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Semester Analysis */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Analisis per Semester
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.semesterData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="semester" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="high" stackId="a" fill="#10b981" name="Tinggi" />
            <Bar dataKey="moderate" stackId="a" fill="#f59e0b" name="Sedang" />
            <Bar dataKey="low" stackId="a" fill="#ef4444" name="Rendah" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default HeadDashboard;
