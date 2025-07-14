import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const [sidebarsVisible, setSidebarsVisible] = useState(true);
  const [leftSidebarVisible, setLeftSidebarVisible] = useState(false);
  const [rightSidebarVisible, setRightSidebarVisible] = useState(false);

  // Sync sidebar state with screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setSidebarsVisible(true);
        setLeftSidebarVisible(false);
        setRightSidebarVisible(false);
      } else {
        setSidebarsVisible(false);
      }
    };
    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Navbar
        sidebarsVisible={sidebarsVisible}
        setSidebarsVisible={setSidebarsVisible}
        leftSidebarVisible={leftSidebarVisible}
        setLeftSidebarVisible={setLeftSidebarVisible}
        rightSidebarVisible={rightSidebarVisible}
        setRightSidebarVisible={setRightSidebarVisible}
      />
      <Outlet context={{
        sidebarsVisible,
        setSidebarsVisible,
        leftSidebarVisible,
        setLeftSidebarVisible,
        rightSidebarVisible,
        setRightSidebarVisible
      }} />
    </>
  );
};

export default MainLayout;