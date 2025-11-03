import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('edu-grit-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      // Mock authentication - in real app, this would be an API call
      const mockUsers = {
        'TI19220003': { id: 1, username: 'TI19220003', name: 'Firman Maulana', role: 'student', nim: 'TI19220003', prodi: 'TI', semester: 3, email: 'firman@student.stmik.ac.id' },
        'TI19220004': { id: 2, username: 'TI19220004', name: 'Rizal', role: 'student', nim: 'TI19220004', prodi: 'TI', semester: 3, email: 'rizal@student.stmik.ac.id' },
        'TI19220005': { id: 3, username: 'TI19220005', name: 'Melinda', role: 'student', nim: 'TI19220005', prodi: 'TI', semester: 5, email: 'melinda@student.stmik.ac.id' },
        'TI19220006': { id: 4, username: 'TI19220006', name: 'Nora', role: 'student', nim: 'TI19220006', prodi: 'TI', semester: 3, email: 'nora@student.stmik.ac.id' },
        'TI19220007': { id: 5, username: 'TI19220007', name: 'Herman', role: 'student', nim: 'TI19220007', prodi: 'TI', semester: 5, email: 'herman@student.stmik.ac.id' },
        'TI19220008': { id: 6, username: 'TI19220008', name: 'Hasan', role: 'student', nim: 'TI19220008', prodi: 'TI', semester: 3, email: 'hasan@student.stmik.ac.id' },
        'dosen001': { id: 7, username: 'dosen001', name: 'Jihadul Akbar S.Kom.,M.Kom', role: 'advisor', email: 'jihadul@stmik.ac.id' },
        'kaprodi_ti': { id: 8, username: 'kaprodi_ti', name: 'Sofiansyah Fadli S.Kom.,M.Kom', role: 'kaprodi', prodi: 'TI', email: 'sofiansyah@stmik.ac.id' },
        'kaprodi_si': { id: 9, username: 'kaprodi_si', name: 'Dr. Dedi Kurniawan', role: 'kaprodi', prodi: 'SI', email: 'dedi@stmik.ac.id' },
        'ketua': { id: 10, username: 'ketua', name: 'Khairul Imtihan S.Kom.,M.Kom', role: 'head', email: 'Imtihan@stmik.ac.id' },
        'admin': { id: 11, username: 'admin', name: 'Admin System', role: 'admin', email: 'admin@stmik.ac.id' }
      };

      const userData = mockUsers[username];
      if (userData && password === username) { // Simple password validation
        setUser(userData);
        localStorage.setItem('edu-grit-user', JSON.stringify(userData));
        return { success: true, message: t('auth.loginSuccess') };
      } else {
        return { success: false, message: t('auth.loginError') };
      }
    } catch (error) {
      return { success: false, message: t('auth.loginError') };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('edu-grit-user');
  };

  const hasRole = (roles) => {
    if (!user) return false;
    if (Array.isArray(roles)) {
      return roles.includes(user.role);
    }
    return user.role === roles;
  };

  const canAccessSurvey = () => {
    // Mock access control - in real app, this would check AccessControl.status
    return true; // For now, always allow
  };

  const value = {
    user,
    login,
    logout,
    hasRole,
    canAccessSurvey,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
