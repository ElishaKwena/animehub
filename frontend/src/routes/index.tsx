import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import MainLayout from '../components/MainLayout';


// Lazy load pages for better performance
const Home = lazy(() => import('../pages/mainpages/Home'));
const Play = lazy(() => import ('../pages/mainpages/Play'));
const Login = lazy(() => import('../pages/authentication/Login'));
const Signup = lazy(() => import('../pages/authentication/Signup'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const LandingPage = lazy(() => import('../pages/LandingPage'));

// Simulate authentication state (replace with real auth logic in production)
const isAuthenticated = true; // TODO: Replace with real authentication logic

const AppRoutes: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/play" element ={<Play/>}/>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
              <Home />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Catch-all route for 404s */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Suspense>
);

export default AppRoutes; 