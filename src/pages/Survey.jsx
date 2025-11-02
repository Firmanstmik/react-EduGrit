import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import Card from '../components/Card';
import toast from 'react-hot-toast';

const Survey = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user, canAccessSurvey } = useAuth();
  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [surveyAccess, setSurveyAccess] = useState(true);

  useEffect(() => {
    // Check if survey is accessible
    if (!canAccessSurvey()) {
      setSurveyAccess(false);
    }
  }, [canAccessSurvey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      setTimeout(() => {
        // Store form data in localStorage for result page
        localStorage.setItem('surveyData', JSON.stringify({
          ...formData,
          user: user,
          timestamp: new Date().toISOString()
        }));
        setIsSubmitting(false);
        toast.success(t('survey.success'));
        navigate('/result');
      }, 2000);
    } catch (error) {
      toast.error(t('survey.error'));
      setIsSubmitting(false);
    }
  };

  const questions = [
    {
      id: 'question1',
      question: t('survey.questions.q1'),
      placeholder: 'Ceritakan motivasi utama Anda untuk melanjutkan pendidikan...'
    },
    {
      id: 'question2',
      question: t('survey.questions.q2'),
      placeholder: 'Bagikan pengalaman sulit yang Anda hadapi dan bagaimana Anda mengatasinya...'
    },
    {
      id: 'question3',
      question: t('survey.questions.q3'),
      placeholder: 'Jelaskan strategi dan pendekatan Anda dalam menghadapi kesulitan...'
    },
    {
      id: 'question4',
      question: t('survey.questions.q4'),
      placeholder: 'Ceritakan tentang visi dan tujuan masa depan Anda...'
    }
  ];

  if (!surveyAccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {t('survey.closed')}
              </h1>
              <p className="text-gray-600 mb-6">
                Survey saat ini tidak tersedia. Silakan hubungi admin untuk informasi lebih lanjut.
              </p>
              <button
                onClick={() => navigate('/dashboard')}
                className="btn-primary"
              >
                Kembali ke Dashboard
              </button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('survey.title')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('survey.description')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Student Information */}
          <Card>
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Informasi Mahasiswa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('profile.name')}
                </label>
                <input
                  type="text"
                  value={user?.name || ''}
                  disabled
                  className="input-field bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('profile.nim')}
                </label>
                <input
                  type="text"
                  value={user?.nim || ''}
                  disabled
                  className="input-field bg-gray-100"
                />
              </div>
            </div>
          </Card>

          {/* Survey Questions */}
          {questions.map((q, index) => (
            <Card key={q.id}>
              <div className="mb-4">
                <label htmlFor={q.id} className="block text-lg font-medium text-gray-900 mb-3">
                  {index + 1}. {q.question}
                </label>
                <textarea
                  id={q.id}
                  name={q.id}
                  value={formData[q.id]}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="input-field resize-none"
                  placeholder={q.placeholder}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Minimum 50 karakter. Semakin detail jawaban Anda, semakin akurat analisisnya.
                </p>
              </div>
            </Card>
          ))}

          {/* Submit Button */}
          <Card>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary text-lg px-8 py-3 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('survey.submitting')}
                  </div>
                ) : (
                  t('survey.submit')
                )}
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Data Anda akan dianalisis menggunakan AI untuk menghasilkan skor grit dan rekomendasi.
              </p>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default Survey;
