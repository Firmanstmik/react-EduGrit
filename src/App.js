import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import './i18n';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Survey from './pages/Survey';
import Result from './pages/Result';
import Dashboard from './pages/Dashboard';
import Aspirations from './pages/Aspirations';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import About from './pages/About';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                
                {/* Protected Routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                
                <Route path="/survey" element={
                  <ProtectedRoute roles={['student']} requireSurveyAccess={true}>
                    <Survey />
                  </ProtectedRoute>
                } />
                
                <Route path="/result" element={
                  <ProtectedRoute roles={['student']}>
                    <Result />
                  </ProtectedRoute>
                } />
                
                <Route path="/aspirations" element={
                  <ProtectedRoute>
                    <Aspirations />
                  </ProtectedRoute>
                } />
                
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
                
                <Route path="/admin" element={
                  <ProtectedRoute roles={['admin']}>
                    <Admin />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>
            <Footer />
            <Toaster position="top-right" />
          </div>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
