import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import Card from '../components/Card';
import toast from 'react-hot-toast';

const Aspirations = () => {
  const { t } = useTranslation();
  const { user, hasRole } = useAuth();
  const [aspirations, setAspirations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [newAspiration, setNewAspiration] = useState({
    text: '',
    isAnonymous: false
  });
  const [filters, setFilters] = useState({
    sort: 'latest',
    semester: 'all',
    prodi: 'all'
  });

  useEffect(() => {
    // Mock data for aspirations
    setTimeout(() => {
      setAspirations([
        {
          id: 1,
          text: 'Kami membutuhkan lebih banyak praktikum untuk mata kuliah pemrograman. Teori saja tidak cukup untuk memahami konsep yang kompleks.',
          date: '2025-01-20',
          isAnonymous: true,
          semester: 3,
          prodi: 'TI'
        },
        {
          id: 2,
          text: 'Fasilitas laboratorium perlu diperbaiki. Banyak komputer yang rusak dan koneksi internet sering putus.',
          date: '2025-01-19',
          isAnonymous: false,
          semester: 5,
          prodi: 'SI'
        },
        {
          id: 3,
          text: 'Jadwal kuliah terlalu padat. Kami kesulitan mengikuti semua mata kuliah dengan baik.',
          date: '2025-01-18',
          isAnonymous: true,
          semester: 3,
          prodi: 'TI'
        },
        {
          id: 4,
          text: 'Dosen pengajar sangat membantu dan responsif. Terima kasih atas bimbingannya.',
          date: '2025-01-17',
          isAnonymous: false,
          semester: 5,
          prodi: 'SI'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newAspiration.text.trim()) {
      toast.error('Aspirasi tidak boleh kosong');
      return;
    }

    setSubmitting(true);
    try {
      // Mock API call
      setTimeout(() => {
        const newAsp = {
          id: aspirations.length + 1,
          text: newAspiration.text,
          date: new Date().toISOString().split('T')[0],
          isAnonymous: newAspiration.isAnonymous,
          semester: user.semester || 3,
          prodi: user.prodi || 'TI'
        };
        setAspirations(prev => [newAsp, ...prev]);
        setNewAspiration({ text: '', isAnonymous: false });
        toast.success(t('aspirations.success'));
        setSubmitting(false);
      }, 1000);
    } catch (error) {
      toast.error(t('aspirations.error'));
      setSubmitting(false);
    }
  };

  const getFilteredAspirations = () => {
    let filtered = aspirations;

    // Filter by semester (for advisors/kaprodi)
    if (hasRole(['advisor', 'kaprodi']) && filters.semester !== 'all') {
      filtered = filtered.filter(asp => asp.semester.toString() === filters.semester);
    }

    // Filter by prodi (for kaprodi)
    if (hasRole('kaprodi') && filters.prodi !== 'all') {
      filtered = filtered.filter(asp => asp.prodi === user.prodi);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sort) {
        case 'latest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

    return filtered;
  };

  const blurName = (text, isAnonymous) => {
    if (isAnonymous) {
      return text;
    }
    // Simple name blurring - in real app, this would be more sophisticated
    return text.replace(/\b[A-Z][a-z]+\b/g, '***');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('aspirations.title')}
          </h1>
          <p className="text-lg text-gray-600">
            {hasRole('student') 
              ? 'Kirim aspirasi atau feedback Anda' 
              : 'Lihat aspirasi mahasiswa'
            }
          </p>
        </div>

        {/* Submit Form (Students only) */}
        {hasRole('student') && (
          <Card className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Kirim Aspirasi Baru
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aspirasi/Feedback
                </label>
                <textarea
                  value={newAspiration.text}
                  onChange={(e) => setNewAspiration(prev => ({ ...prev, text: e.target.value }))}
                  rows={4}
                  className="input-field resize-none"
                  placeholder={t('aspirations.placeholder')}
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={newAspiration.isAnonymous}
                  onChange={(e) => setNewAspiration(prev => ({ ...prev, isAnonymous: e.target.checked }))}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-900">
                  {t('aspirations.anonymous')}
                </label>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className={`btn-primary ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {submitting ? t('aspirations.submitting') : t('aspirations.submit')}
              </button>
            </form>
          </Card>
        )}

        {/* Filters (Advisors/Kaprodi only) */}
        {(hasRole('advisor') || hasRole('kaprodi') || hasRole('head') || hasRole('admin')) && (
          <Card className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urutkan
                </label>
                <select
                  value={filters.sort}
                  onChange={(e) => setFilters(prev => ({ ...prev, sort: e.target.value }))}
                  className="input-field"
                >
                  <option value="latest">{t('aspirations.filters.latest')}</option>
                  <option value="oldest">{t('aspirations.filters.oldest')}</option>
                </select>
              </div>
              {hasRole(['advisor', 'kaprodi']) && (
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('filters.semester')}
                  </label>
                  <select
                    value={filters.semester}
                    onChange={(e) => setFilters(prev => ({ ...prev, semester: e.target.value }))}
                    className="input-field"
                  >
                    <option value="all">{t('filters.all')}</option>
                    <option value="1">Semester 1</option>
                    <option value="3">Semester 3</option>
                    <option value="5">Semester 5</option>
                    <option value="7">Semester 7</option>
                  </select>
                </div>
              )}
            </div>
          </Card>
        )}

        {/* Aspirations List */}
        <div className="space-y-4">
          {getFilteredAspirations().map((aspiration) => (
            <Card key={aspiration.id}>
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    aspiration.isAnonymous 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {aspiration.isAnonymous ? 'Anonim' : 'Teridentifikasi'}
                  </span>
                  {hasRole(['advisor', 'kaprodi', 'head', 'admin']) && (
                    <span className="text-xs text-gray-500">
                      {aspiration.prodi} - Sem {aspiration.semester}
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(aspiration.date).toLocaleDateString('id-ID')}
                </span>
              </div>
              <p className="text-gray-900 leading-relaxed">
                {blurName(aspiration.text, aspiration.isAnonymous)}
              </p>
            </Card>
          ))}
        </div>

        {getFilteredAspirations().length === 0 && (
          <Card>
            <div className="text-center py-8">
              <p className="text-gray-500">Tidak ada aspirasi yang ditemukan</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Aspirations;
