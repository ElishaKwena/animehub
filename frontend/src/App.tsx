import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './components/ThemeProvider';
import AppRoutes from './routes';
// import ThemeDebug from './components/ThemeDebug'; // Uncomment if you want to use ThemeDebug

function App() {
  // You can add error logging here for production, e.g., Sentry
  // function handleError(error: Error, info: { componentStack: string }) {
  //   if (process.env.NODE_ENV === 'production') {
  //     // Log error to a service
  //   }
  // }

  return (
    <ThemeProvider>
      <ErrorBoundary /* onError={handleError} */>
        <Router>
          <AppRoutes />
          {/* Only show ThemeDebug in development */}
          {process.env.NODE_ENV === 'development' && false /* set to true to enable */ && (
            // <ThemeDebug />
            null
          )}
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
