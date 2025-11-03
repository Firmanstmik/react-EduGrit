import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../components/Card';

const Result = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useAuth();
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to get analysis result
    const surveyData = JSON.parse(localStorage.getItem('surveyData') || '{}');
    
    setTimeout(() => {
      // Mock analysis result
      const mockResult = {
        studentName: user?.name || surveyData.name || 'Mahasiswa',
        gritScore: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
        keywords: ['motivasi', 'tujuan', 'ketekunan', 'tantangan', 'semangat'],
        intervention: getIntervention(Math.floor(Math.random() * 40) + 60),
        detailedAnalysis: {
          perseverance: Math.floor(Math.random() * 20) + 70,
          passion: Math.floor(Math.random() * 20) + 65,
          resilience: Math.floor(Math.random() * 20) + 75,
          focus: Math.floor(Math.random() * 20) + 60
        }
      };
      
      setAnalysisResult(mockResult);
      setLoading(false);
    }, 2000);
  }, [user]);

  const getIntervention = (score) => {
    if (score >= 80) return t('result.intervention.high');
    if (score >= 60) return t('result.intervention.moderate');
    return t('result.intervention.low');
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-grit-high';
    if (score >= 60) return 'text-grit-moderate';
    return 'text-grit-low';
  };

  const getScoreStatus = (score) => {
    if (score >= 80) return t('grit.level.high');
    if (score >= 60) return t('grit.level.moderate');
    return t('grit.level.low');
  };

  const chartData = analysisResult ? [
    { name: t('grit.components.perseverance'), value: analysisResult.detailedAnalysis.perseverance },
    { name: t('grit.components.passion'), value: analysisResult.detailedAnalysis.passion },
    { name: t('grit.components.resilience'), value: analysisResult.detailedAnalysis.resilience },
    { name: t('grit.components.focus'), value: analysisResult.detailedAnalysis.focus }
  ] : [];

  // const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">{t('result.analyzing')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('result.title')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('result.subtitle')}
          </p>
        </div>

        {/* Main Score Card */}
        <Card className="mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">{t('result.yourScore')}</h2>
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
                  <span className={`text-4xl font-bold ${getScoreColor(analysisResult.gritScore)}`}>
                    {analysisResult.gritScore}
                  </span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    analysisResult.gritScore >= 80 ? 'bg-green-100 text-green-800' :
                    analysisResult.gritScore >= 60 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {getScoreStatus(analysisResult.gritScore)}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              {t('result.congratulations')}, <strong>{analysisResult.studentName}</strong>! 
              {t('result.scoreMessage')} {getScoreStatus(analysisResult.gritScore).toLowerCase()} {t('result.levelLabel')}.
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Detailed Analysis Chart */}
          <Card>
            <h3 className="text-xl font-semibold mb-4">{t('result.detailedAnalysis')}</h3>
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

          {/* Keywords Detected */}
          <Card>
            <h3 className="text-xl font-semibold mb-4">{t('result.keywordsDetected')}</h3>
            <div className="flex flex-wrap gap-2">
              {analysisResult.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-2">{t('result.interpretation')}:</h4>
              <p className="text-gray-600 text-sm">
                {t('result.interpretationText')}
              </p>
            </div>
          </Card>
        </div>

        {/* Intervention Recommendation */}
        <Card className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{t('result.interventionRecommendation')}</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-gray-700">{analysisResult.intervention}</p>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/survey')}
            className="btn-primary text-lg px-8 py-3"
          >
            {t('result.actions.reanalyze')}
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="btn-secondary text-lg px-8 py-3"
          >
            {t('result.actions.viewDashboard')}
          </button>
          <button
            onClick={() => navigate('/')}
            className="btn-secondary text-lg px-8 py-3"
          >
            {t('result.actions.backHome')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
