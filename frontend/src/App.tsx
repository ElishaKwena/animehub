import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './components/ThemeProvider';
import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <AppRoutes />
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
