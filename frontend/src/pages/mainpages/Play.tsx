import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LeftSideBar from '../../components/HomeComponents/LeftSideBar';
import RightSideBar from '../../components/HomeComponents/RightSideBar';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import Play from '../../components/Watch/PlayPage';


// top anime and recommendations
// genres
const Home: React.FC = () => {
    const {
      sidebarsVisible,
      setSidebarsVisible,
      leftSidebarVisible,
      setLeftSidebarVisible,
      rightSidebarVisible,
      setRightSidebarVisible
    } = useOutletContext<{
      sidebarsVisible: boolean,
      setSidebarsVisible: (v: boolean) => void,
      leftSidebarVisible: boolean,
      setLeftSidebarVisible: (v: boolean) => void,
      rightSidebarVisible: boolean,
      setRightSidebarVisible: (v: boolean) => void
    }>();

    // Track which anime have been shown
    const [shownAnimeIds, setShownAnimeIds] = React.useState<(number | string)[]>([]);

    // Only one sidebar open at a time on mobile
    const handleCloseSidebars = () => {
      setLeftSidebarVisible(false);
      setRightSidebarVisible(false);
    };

    return (
        <>
            {/* Overlay for mobile sidebars */}
            {(leftSidebarVisible || rightSidebarVisible) && (
              <div
                className="fixed inset-0 z-30 bg-black bg-opacity-40 lg:hidden transition-opacity duration-300"
                onClick={handleCloseSidebars}
                aria-label="Close sidebar overlay"
              />
            )}
            <main className="w-full pt-[90px] lg:pt-[75px] min-h-screen bg-white dark:bg-black">
                <div className="flex flex-col lg:flex-row w-full h-full">
                    {/* left sidebar - visible on mobile if leftSidebarVisible, on desktop if sidebarsVisible */}
                    {(leftSidebarVisible || sidebarsVisible) && (
                        <div
                          className={
                            sidebarsVisible
                              ? 'hidden lg:block lg:w-[16%] h-auto lg:h-full overflow-y-auto scrollbar-hide'
                              : `fixed top-[90px] left-0 z-40 w-3/4 max-w-xs h-full bg-white dark:bg-black shadow-lg transition-transform duration-300 ease-in-out will-change-transform lg:hidden overflow-y-auto scrollbar-hide ${leftSidebarVisible ? 'translate-x-0' : '-translate-x-full'}`
                          }
                          style={{
                            transform: leftSidebarVisible || sidebarsVisible ? 'translateX(0)' : 'translateX(-100%)',
                          }}
                          onClick={e => e.stopPropagation()}
                        >
                            <LeftSideBar />
                        </div>
                    )}

                    {/* main contents */}
                    <div className={`w-full ${sidebarsVisible ? 'lg:w-[59%]' : 'lg:w-[100%] lg:mx-auto'} h-auto lg:h-full overflow-y-auto scrollbar-hide pb-6 transition-all duration-300 px-2 sm:px-4`}>
                        <Play/>
                    </div>

                    {/* right side bar - visible on mobile if rightSidebarVisible, on desktop if sidebarsVisible */}
                    {(rightSidebarVisible || sidebarsVisible) && (
                        <div
                          className={
                            sidebarsVisible
                              ? 'hidden lg:flex lg:flex-col gap-2 relative pt-0 pb-[50px] lg:w-[25%] h-auto lg:h-full overflow-y-auto scrollbar-hide'
                              : `fixed top-[90px] right-0 z-40 w-3/4 max-w-xs h-full bg-white dark:bg-black shadow-lg transition-transform duration-300 ease-in-out will-change-transform lg:hidden gap-2 px-4 pt-0 pb-[50px] overflow-y-auto scrollbar-hide ${rightSidebarVisible ? 'translate-x-0' : 'translate-x-full'}`
                          }
                          style={{
                            transform: rightSidebarVisible || sidebarsVisible ? 'translateX(0)' : 'translateX(100%)',
                          }}
                          onClick={e => e.stopPropagation()}
                        >
                            {/* search (desktop only) or close button (mobile only) */}
                            <div className="sticky top-0 pt-1 w-full z-10 pb-2 bg-white dark:bg-black">
                              <button
                                className="block lg:hidden ml-auto p-2 text-xl text-neon_purple hover:text-fashion_pink transition-colors"
                                onClick={handleCloseSidebars}
                                aria-label="Close Right Sidebar"
                              >
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            </div>
                            <RightSideBar />
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}

export default Home; 