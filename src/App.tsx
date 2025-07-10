// import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import ThemeDebug from './components/ThemeDebug';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './components/ThemeProvider';

import LandingPage from './pages/LandingPage';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          {/* <Navbar /> */}
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes> */}
          <LandingPage/>
          {/* <ThemeDebug /> */}
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
