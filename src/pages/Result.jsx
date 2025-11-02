import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../components/Card';

const Result = () => {
  const navigate = useNavigate();
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to get analysis result
    const surveyData = JSON.parse(localStorage.getItem('surveyData') || '{}');
    
    setTimeout(() => {
      // Mock analysis result
      const mockResult = {
        studentName: surveyData.name || 'Mahasiswa',
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
  }, []);

  const getIntervention = (score) => {
    if (score >= 80) return 'Excellent grit level! Continue current strategies and consider mentoring others.';
    if (score >= 60) return 'Good grit level. Focus on maintaining motivation and setting clear goals.';
    return 'Consider seeking academic counseling and developing resilience strategies.';
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-grit-high';
    if (score >= 60) return 'text-grit-moderate';
    return 'text-grit-low';
  };

  const getScoreStatus = (score) => {
    if (score >= 80) return 'Strong';
    if (score >= 60) return 'Moderate';
    return 'Low';
  };

  const chartData = analysisResult ? [
    { name: 'Perseverance', value: analysisResult.detailedAnalysis.perseverance },
    { name: 'Passion', value: analysisResult.detailedAnalysis.passion },
    { name: 'Resilience', value: analysisResult.detailedAnalysis.resilience },
    { name: 'Focus', value: analysisResult.detailedAnalysis.focus }
  ] : [];

  // const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Menganalisis respons Anda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Hasil Analisis Grit
          </h1>
          <p className="text-lg text-gray-600">
            Berikut adalah analisis mendalam tentang tingkat grit Anda
          </p>
        </div>

        {/* Main Score Card */}
        <Card className="mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Skor Grit Anda</h2>
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
              Selamat, <strong>{analysisResult.studentName}</strong>! 
              Tingkat grit Anda menunjukkan {getScoreStatus(analysisResult.gritScore).toLowerCase()} level.
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Detailed Analysis Chart */}
          <Card>
            <h3 className="text-xl font-semibold mb-4">Analisis Detail</h3>
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
            <h3 className="text-xl font-semibold mb-4">Kata Kunci yang Terdeteksi</h3>
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
              <h4 className="font-semibold text-gray-900 mb-2">Interpretasi:</h4>
              <p className="text-gray-600 text-sm">
                Kata kunci ini menunjukkan pola pikir dan motivasi yang teridentifikasi dalam respons Anda. 
                Mereka membantu memahami aspek-aspek grit yang paling menonjol.
              </p>
            </div>
          </Card>
        </div>

        {/* Intervention Recommendation */}
        <Card className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Rekomendasi Intervensi</h3>
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
            Analisis Ulang
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="btn-secondary text-lg px-8 py-3"
          >
            Lihat Dashboard
          </button>
          <button
            onClick={() => navigate('/')}
            className="btn-secondary text-lg px-8 py-3"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
