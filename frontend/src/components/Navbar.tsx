import React from 'react';
import { Link } from 'react-router-dom';
import ROUTE_PATHS from '../routes/paths';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown,faBars,faSearch,faTimes, faComments, faBell, faExpand,faCompress } from '@fortawesome/free-solid-svg-icons';

import naruto from '../assets/images/dandadan.jpg'

interface NavbarProps {
  leftSidebarVisible: boolean;
  setLeftSidebarVisible: (v: boolean) => void;
  rightSidebarVisible: boolean;
  setRightSidebarVisible: (v: boolean) => void;
  sidebarsVisible: boolean;
  setSidebarsVisible: (v: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  leftSidebarVisible,
  setLeftSidebarVisible,
  rightSidebarVisible,
  setRightSidebarVisible,
  sidebarsVisible,
  setSidebarsVisible
}) => {
  return (
    <header className="w-full dark:bg-black bg-white grid place-items-center p-2 lg:p-4 fixed z-50 shadow-lg">
      <nav className="w-full flex items-center justify-between lg:flex-row flex-col gap-2">
          <div className="left-nav flex w-full lg:w-1/4 items-center justify-between lg:justify-start lg:gap-14 ">
              <div className="logo">
                    <Link to={ROUTE_PATHS.home} className="flex items-baseline justify-between ">
                      <h1 className='text-neon_purple font-bold lg:text-xl font-privus text-md'>ANIME</h1>
                      <h1 className="text-fashion_pink font-extrabold lg:text-4xl font-mareno text-xl">HUB</h1>
                  </Link>
              </div>
              <div className="relative group">
                <button
                  className="hidden lg:flex bg-neon_purple text-white p-4 w-6 h-6 items-center justify-center rounded shadow hover:bg-fashion_pink transition-colors font-fira-code font-bold"
                  onClick={() => setSidebarsVisible(!sidebarsVisible)}
                  aria-label={sidebarsVisible ? 'Hide Sidebars' : 'Show Sidebars'}
                >
                  <FontAwesomeIcon icon={sidebarsVisible ? faCompress : faExpand} className="text-xl" />
                </button>
                {/* Tooltip */}
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-pewter text-black text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-30">
                  {sidebarsVisible ? 'Hide Sidebars' : 'Show Sidebars'}
                </span>
              </div>
              <div className="menus flex items-center justify-between gap-4">
                <Link to="/play" className='text-black dark:text-white font-fira-code font-bold hover:text-fashion_pink dark:hover:text-neon_purple transition-all duration-300'>Anime</Link>
                <Link to="" className='text-black dark:text-white font-fira-code font-bold hover:text-fashion_pink dark:hover:text-neon_purple transition-all duration-300'>Manga</Link>
                <Link to="" className='text-black dark:text-white font-fira-code font-bold hover:text-fashion_pink dark:hover:text-neon_purple transition-all duration-300'>Movies</Link>
              </div>

          </div>


          {/* search (desktop only) or close button (mobile only) */}
          <div className="w-[500px] z-10 bg-white dark:bg-black hidden lg:block">
                <form action="" className="w-full relative ">
                  <input type="text" className="w-full p-2 pl-10 rounded-md bg-frost dark:bg-dark800 text-black dark:text-white focus:outline-none" />
                  <FontAwesomeIcon icon={faSearch} className="text-neon_purple text-xl cursor-pointer hover:text-fashion_pink transition-colors absolute left-3 top-[20%]" />
                </form>
            </div>



          <div className="right-nav flex items-center justify-between lg:justify-end gap-10 w-full lg:w-1/4">
              <div className="menus flex items-center justify-start lg:hidden gap-4">
                  <button
                    className='w-6 h-6 bg-neon_purple flex items-center justify-center rounded-[3px]'
                    onClick={() => setLeftSidebarVisible(!leftSidebarVisible)}
                    aria-label={leftSidebarVisible ? 'Hide Left Sidebar' : 'Show Left Sidebar'}
                  >
                    <FontAwesomeIcon icon={leftSidebarVisible ? faTimes : faBars} className='text-black dark:text-white'/>
                  </button>
                  <button
                    className='text-black dark:text-white font-bold font-fira-code bg-neon_purple p-2 text-[10px] py-[4px] rounded-[3px]'
                    onClick={() => setRightSidebarVisible(!rightSidebarVisible)}
                    aria-label={rightSidebarVisible ? 'Hide Right Sidebar' : 'Show Right Sidebar'}
                  >
                    Trending
                  </button>
              </div>
              <div className="flex items-center justify-end gap-6 lg:gap-10">
                  <div className="search lg:hidden">
                      <button className="w-6 h-6 relative">
                        <FontAwesomeIcon icon = {faSearch} className='text-neon_purple dark:text-white lg:w-8 lg:h-6 h-6 hover:text-fashion_pink dark:hover:text-neon_purple transition-all duration-300'/>
                      </button>
                  </div>
                  <div className="notifications">
                      <button className="w-6 h-6 relative">
                        <div className="absolute w-3 h-3 right-0 rounded-full bg-candy "></div>
                        <FontAwesomeIcon icon = {faComments} className='text-neon_purple dark:text-white lg:w-8 lg:h-8 h-6 hover:text-fashion_pink dark:hover:text-neon_purple transition-all duration-300'/>
                      </button>
                  </div>
                  <div className="notifications">
                    <button className="w-6 h-6 relative ">
                      <div className="absolute w-3 h-3 right-0 lg:-right-2 rounded-full bg-candy "></div>
                      <FontAwesomeIcon icon = {faBell} className='text-neon_purple dark:text-white lg:w-8 lg:h-8 h-6 hover:text-fashion_pink dark:hover:text-neon_purple transition-all duration-300'/>
                    </button>
                  </div>
                  <div className="account flex items-center justify-center">
                    <button className="flex items-center gap-2 relative">
                      <div className="absolute online w-3 h-3 rounded-full bg-lime_green -top-1 left-6"></div>
                      <img src={naruto} alt="" className="lg:w-10 lg:h-10 w-8 h-8 rounded-full object-cover"/>
                      <FontAwesomeIcon icon={ faChevronDown} className='text-neon_purple dark:text-white text-xl font-bold hover:text-fashion_pink dark:hover:text-neon_purple transition-all duration-300'></FontAwesomeIcon>
                    </button>
                  </div>
              </div>
          </div>
      </nav>
    </header>
  );
};

export default Navbar; 