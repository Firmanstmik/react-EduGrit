import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../Card';

const StudentDashboard = () => {
  const { t } = useTranslation();
  const [gritData, setGritData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - in real app, this would be an API call
    setTimeout(() => {
      setGritData({
        currentScore: 78,
        lastSurvey: '2024-01-15',
        recommendations: [
          'Fokus pada tujuan jangka panjang',
          'Kembangkan strategi coping yang lebih baik',
          'Cari dukungan dari teman dan keluarga'
        ],
        detailedAnalysis: {
          perseverance: 82,
          passion: 75,
          resilience: 80,
          focus: 76
        }
      });
      setLoading(false);
    }, 1000);
  }, []);

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLevel = (score) => {
    if (score >= 80) return t('grit.level.high');
    if (score >= 60) return t('grit.level.moderate');
    return t('grit.level.low');
  };

  const chartData = gritData ? [
    { name: 'Ketekunan', value: gritData.detailedAnalysis.perseverance },
    { name: 'Gairah', value: gritData.detailedAnalysis.passion },
    { name: 'Ketahanan', value: gritData.detailedAnalysis.resilience },
    { name: 'Fokus', value: gritData.detailedAnalysis.focus }
  ] : [];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('dashboard.student.title')}
        </h1>
        <p className="text-gray-600">
          {t('dashboard.student.gritScore')}: <span className={`font-bold ${getScoreColor(gritData.currentScore)}`}>
            {gritData.currentScore}/100 ({getScoreLevel(gritData.currentScore)})
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Grit Score Card */}
        <Card>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border-8 border-gray-200 flex items-center justify-center">
              <span className={`text-3xl font-bold ${getScoreColor(gritData.currentScore)}`}>
                {gritData.currentScore}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t('grit.score')}
            </h3>
            <p className="text-sm text-gray-600">
              {t('dashboard.student.lastSurvey')}: {new Date(gritData.lastSurvey).toLocaleDateString('id-ID')}
            </p>
          </div>
        </Card>

        {/* Recommendations */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t('grit.recommendations')}
          </h3>
          <ul className="space-y-2">
            {gritData.recommendations.map((rec, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {rec}
              </li>
            ))}
          </ul>
        </Card>

        {/* Quick Actions */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Aksi Cepat
          </h3>
          <div className="space-y-3">
            <Link
              to="/survey"
              className="w-full btn-primary text-center block"
            >
              {t('dashboard.student.takeSurvey')}
            </Link>
            <Link
              to="/aspirations"
              className="w-full btn-secondary text-center block"
            >
              Kirim Aspirasi
            </Link>
          </div>
        </Card>
      </div>

      {/* Detailed Analysis Chart */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {t('grit.analysis')}
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip formatter={(value) => [`${value}%`, 'Score']} />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default StudentDashboard;
