import React from 'react';
import { useTranslation } from 'react-i18next';

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('id')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'id'
            ? 'bg-primary-600 text-white'
            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
        }`}
      >
        🇮🇩 ID
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'en'
            ? 'bg-primary-600 text-white'
            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
};

export default LangSwitcher;
