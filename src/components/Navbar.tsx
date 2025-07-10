import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-white text-sapphire dark:bg-black dark:text-white shadow-md">
      <div className="text-2xl font-bold tracking-wide">My Project</div>
      <ThemeToggleButton />
    </nav>
  );
};

export default Navbar; 