import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="ml-2 text-xl font-bold">Edu-GRIT</span>
            </div>
            <p className="text-gray-300 text-sm">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">{t('navigation.home')}</a></li>
              <li><a href="/survey" className="text-gray-300 hover:text-white transition-colors">{t('navigation.survey')}</a></li>
              <li><a href="/dashboard" className="text-gray-300 hover:text-white transition-colors">{t('navigation.dashboard')}</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">{t('navigation.about')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <p className="text-gray-300 text-sm mb-2">
              <strong>{t('footer.developer')}:</strong> Firman Maulana
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong>{t('footer.institution')}:</strong> STMIK Lombok
            </p>
            <p className="text-gray-300 text-sm">
              <strong>Email:</strong> firmanmaulanastmik@gmail.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
