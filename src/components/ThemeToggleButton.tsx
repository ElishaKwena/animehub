import React from 'react';
import { useTheme } from './ThemeProvider';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-14 h-8 flex items-center rounded-full border-2 transition-colors duration-300 focus:outline-none shadow-md
        ${isDark ? 'bg-dark900 border-dark700' : 'bg-yellow-300 border-yellow-400'}`}
      aria-label="Toggle theme"
    >
      <span
        className={`absolute left-1 top-1/2 w-6 h-6 rounded-full flex items-center justify-center text-lg transition-transform duration-300
          ${isDark ? 'translate-x-6 bg-black text-yellow-300' : 'translate-x-0 bg-white text-yellow-500'}
          -translate-y-1/2`}
        style={{ boxShadow: '0 2px 8px #0002' }}
      >
        <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
      </span>
      {/* Decorative background icons, vertically centered */}
      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-yellow-500 opacity-70 pointer-events-none">
        <FontAwesomeIcon icon={faSun} />
      </span>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-dark900 dark:text-yellow-300 opacity-70 pointer-events-none">
        <FontAwesomeIcon icon={faMoon} />
      </span>
    </button>
  );
};

export default ThemeToggleButton; 