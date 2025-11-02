import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import Card from '../components/Card';

const Home = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('home.welcomeTitle')} <span className="text-primary-600">Edu-GRIT</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('home.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="btn-primary text-lg px-8 py-3 rounded-lg"
                  >
                    {t('navigation.dashboard')}
                  </Link>
                  {user.role === 'student' && (
                    <Link
                      to="/survey"
                      className="btn-secondary text-lg px-8 py-3 rounded-lg"
                    >
                      {t('navigation.survey')}
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="btn-primary text-lg px-8 py-3 rounded-lg"
                  >
                    {t('navigation.login')}
                  </Link>
                  <Link
                    to="/about"
                    className="btn-secondary text-lg px-8 py-3 rounded-lg"
                  >
                    {t('navigation.about')}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('home.features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('home.features.aiAnalysis')}</h3>
              <p className="text-gray-600">
                {t('home.features.aiDescription')}
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('home.features.multilingual')}</h3>
              <p className="text-gray-600">
                {t('home.features.multilingualDescription')}
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('home.features.roleBased')}</h3>
              <p className="text-gray-600">
                {t('home.features.roleBasedDescription')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('home.getStarted')}
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            {t('home.description')}
          </p>
          {user ? (
            <Link
              to="/dashboard"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              {t('navigation.dashboard')}
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              {t('navigation.login')}
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
