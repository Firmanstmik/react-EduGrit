import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import LangSwitcher from './LangSwitcher';

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { user, logout, hasRole } = useAuth();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getNavigationItems = () => {
    if (!user) {
      return [
        { path: '/', label: t('navigation.home') }
      ];
    }

    const items = [
      { path: '/', label: t('navigation.home') },
      { path: '/dashboard', label: t('navigation.dashboard') }
    ];

    // Role-based navigation
    if (hasRole(['student'])) {
      items.push(
        { path: '/survey', label: t('navigation.survey') },
        { path: '/aspirations', label: t('navigation.aspirations') }
      );
    }

    if (hasRole(['advisor', 'kaprodi', 'head', 'admin'])) {
      items.push({ path: '/aspirations', label: t('navigation.aspirations') });
    }

    if (hasRole(['admin'])) {
      items.push({ path: '/admin', label: t('navigation.admin') });
    }

    items.push({ path: '/profile', label: t('navigation.profile') });

    return items;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Edu-GRIT</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-4">
              {getNavigationItems().map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path) 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Language Switcher */}
            <LangSwitcher />

            {/* User Menu */}
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  {user.name} ({t(`roles.${user.role}`)})
                </span>
                <button
                  onClick={logout}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                >
                  {t('navigation.logout')}
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              >
                {t('navigation.login')}
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
