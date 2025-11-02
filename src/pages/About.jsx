import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../components/Card';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            {t('about.title')}
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-6 md:mb-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{t('about.missionTitle')}</h2>
          </div>
          <div className="space-y-3 md:space-y-4 text-gray-700">
            <p className="text-sm md:text-base leading-relaxed">
              {t('about.mission1')}
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              {t('about.mission2')}
            </p>
          </div>
        </Card>

        {/* SDGs Alignment */}
        <Card className="mb-6 md:mb-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              {t('about.sdgsTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-400 p-4 md:p-6 rounded-r-lg hover:shadow-md transition-shadow">
              <div className="flex items-start mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold text-lg md:text-xl">3</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pt-1">{t('about.sdg3Title')}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {t('about.sdg3Desc')}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-400 p-4 md:p-6 rounded-r-lg hover:shadow-md transition-shadow">
              <div className="flex items-start mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold text-lg md:text-xl">4</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pt-1">{t('about.sdg4Title')}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {t('about.sdg4Desc')}
              </p>
            </div>
          </div>
        </Card>

        {/* Technology Section */}
        <Card className="mb-6 md:mb-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{t('about.techTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center p-4 rounded-lg hover:bg-primary-50 transition-colors group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white text-3xl md:text-4xl">🤖</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('about.techAI')}</h3>
              <p className="text-sm md:text-base text-gray-600">{t('about.techAIDesc')}</p>
            </div>
            
            <div className="text-center p-4 rounded-lg hover:bg-primary-50 transition-colors group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('about.techViz')}</h3>
              <p className="text-sm md:text-base text-gray-600">{t('about.techVizDesc')}</p>
            </div>
            
            <div className="text-center p-4 rounded-lg hover:bg-primary-50 transition-colors group sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('about.techResp')}</h3>
              <p className="text-sm md:text-base text-gray-600">{t('about.techRespDesc')}</p>
            </div>
          </div>
        </Card>

        {/* Developer Information */}
        <Card className="mb-6 md:mb-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{t('about.devTitle')}</h2>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-2xl md:text-3xl">FM</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Firman Maulana</h3>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-sm md:text-base text-gray-600">
                    <strong>{t('about.devInstitution')}:</strong> STMIK Lombok
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    <strong>Email:</strong> firmanmaulanastmik@gmail.com
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    <strong>{t('about.devSpecialization')}:</strong> {t('about.devSpecValue')}
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    <strong>{t('about.devGitHub')}:</strong>{' '}
                    <a 
                      href="https://github.com/Firmanstmik" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      github.com/Firmanstmik
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Section */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{t('about.contactTitle')}</h2>
          </div>
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
              {t('about.contactDesc')}
            </p>
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-base md:text-lg font-medium text-gray-900">
                  firmanmaulanastmik@gmail.com
                </p>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {t('about.contactFeedback')}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;