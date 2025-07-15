import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LeftSideBar from '../../components/HomeComponents/LeftSideBar';
import RightSideBar from '../../components/HomeComponents/RightSideBar';
import Recent from '../../components/HomeComponents/Recent';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import MostPopular from '../../components/ContentsComponents/MostPopular';
import WatchinCaroussel from '../../components/ContentsComponents/WatchinCaroussel';


// top anime and recommendations
import { top } from "../../data/Watching";
import TopAnimeSection from '../../components/TopAnimeSection';
import Recommended from '../../components/Recommended';

// genres
import Genres from '../../components/Genres/Genres';
import { supernaturalAnime } from '../../data/Genres/Supernatural';
import { recommendedAnime } from '../../data/Recommended/Recommended';
import { highSchoolAnime } from '../../data/Genres/Highschool';
import { shonenAnime } from "../../data/Genres/Shonen";
import { romanceAnime } from '../../data/Genres/Romance';
import { actionAnime } from '../../data/Genres/Action';
import { adventureAnime } from '../../data/Genres/Adventure';
import {sciFiAnime} from '../../data/Genres/Sci-fi'
import { sportsAnime } from '../../data/Genres/Sports';

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
                    <div className={`w-full ${sidebarsVisible ? 'lg:w-[59%]' : 'lg:w-[100%] lg:mx-auto'} h-auto lg:h-full overflow-y-auto scrollbar-hide pb-6 transition-all duration-300 px-2 sm:px-4`}
                    >
                        <div className={`${sidebarsVisible ? 'h-[40vh] md:h-[55vh] lg:h-[65vh]' : 'h-[50vh] md:h-[70vh] lg:h-[90vh]'}`}> 
                            <WatchinCaroussel />
                        </div>
                        <section className="returnin-shows w-full flex flex-col gap-2">
                            <div className="top w-full">
                                <h1 className="text-neon_purple text-base sm:text-lg mt-3 font-fira-code font-bold">Get Up to Speed With These Returning Shows For Free</h1>
                            </div>
                            <Recent />
                            <MostPopular />
                        </section>

                        {/* top anime================================================================== */}
                        <TopAnimeSection 
                          top={top} 
                          sidebarsVisible={sidebarsVisible} 
                          excludeIds={shownAnimeIds}
                        />

                        {/* shonnen list =====================================================================================*/}
                        <section className="w-full mt-12 flex flex-col items-start justify-start">
                          <h1 className="w-full font-fira-code text-xl lg:text-2xl font-extrabold text-neon_purple dark:text-white text-left">Popular Shonen Spotlight</h1>
                          <p className='text-black dark:text-white font-fira-code text-sm text-left'>Action, adventure, friendship, rivalry, and self-improvement</p>
                          <Genres data={shonenAnime} />
                        </section>

                        {/*Highschool list =====================================================================================*/}
                        <section className="w-full mt-12 flex flex-col items-start justify-start">
                          <h1 className="w-full font-fira-code text-xl lg:text-2xl font-extrabold text-neon_purple dark:text-white text-left ">High School Anime: The Ultimate Collection</h1>
                          <p className='text-black dark:text-white font-fira-code text-sm text-left'>Romance, Slice-of-Life, Comedy, Sports, Supernatural</p>
                          <p className='text-black dark:text-white font-fira-code text-sm text-left'>Relatable school settings, coming-of-age stories, and dynamic character relationships.</p>
                          <Genres data={highSchoolAnime} />
                        </section>

                         {/* Recommended anime================================================================== */}
                         <Recommended 
                          top={recommendedAnime} 
                          sidebarsVisible={sidebarsVisible} 
                          indices={[9]}
                          excludeIds={shownAnimeIds}
                        />

                          {/* top anime================================================================== */}
                          <TopAnimeSection 
                          top={top} 
                          sidebarsVisible={sidebarsVisible} 
                          indices={[3,1]}
                          excludeIds={shownAnimeIds}
                        />

                        {/*SuperNatural List list =====================================================================================*/}
                        <section className="w-full mt-12 flex flex-col items-start justify-start">
                          <h1 className="w-full font-fira-code text-xl lg:text-2xl font-extrabold text-neon_purple dark:text-white text-left">Phantom Realms: Supernatural Anime Collection</h1>
                          <p className='text-black dark:text-white font-fira-code text-sm text-left'>Explore worlds where ghosts, spirits, and psychic phenomena blur the line between reality and the unknown. These series blend horror, mystery, and folklore with mind-bending twists.</p>
                         
                          <Genres data={supernaturalAnime} />
                        </section>

                        {/* Recommended anime================================================================== */}
                        <Recommended 
                          top={recommendedAnime} 
                          sidebarsVisible={sidebarsVisible} 
                          indices={[8]}
                          excludeIds={shownAnimeIds}
                        />

                        {/*Romance List list =====================================================================================*/}
                        <section className="w-full mt-12 flex flex-col items-start justify-start">
                          <h1 className="w-full font-fira-code text-xl lg:text-2xl font-extrabold text-neon_purple dark:text-white text-left">Everlasting Hearts: Romance Anime Collection</h1>
                          <p className='text-black dark:text-white font-fira-code text-sm text-left'>Fall in love with tender confessions, heart-fluttering moments, and passionate bonds that transcend time. These romance anime capture the joy, pain, and magic of love in all its forms.</p>
                         
                          <Genres data={romanceAnime} />
                        </section>

                        {/*Action Anime List list =====================================================================================*/}
                        <section className="w-full mt-12 flex flex-col items-start justify-start">
                          <h1 className="w-full font-fira-code text-xl lg:text-2xl font-extrabold text-neon_purple dark:text-white text-left">Unleashed Fury: Action Anime Showdown</h1>
                          <p className='text-black dark:text-white font-fira-code text-sm text-left'>Brace for adrenaline-pumping battles, jaw-dropping fight choreography, and heroes who push beyond their limits. These action anime deliver explosive combat, strategic showdowns, and heart-stopping moments that will leave you breathless.</p>
                         
                          <Genres data={actionAnime} />
                        </section>

                        {/* top anime================================================================== */}
                        <TopAnimeSection 
                          top={top} 
                          sidebarsVisible={sidebarsVisible} 
                          indices={[2]}
                          excludeIds={shownAnimeIds}
                        />


                        {/*Adventure Anime List list =====================================================================================*/}
                        <section className="w-full mt-12 flex flex-col items-start justify-start">
                          <h1 className="w-full font-fira-code text-xl lg:text-2xl font-extrabold text-neon_purple dark:text-white text-left">Boundless Journeys: Adventure Anime Expedition</h1>
                          <p className='text-black dark:text-white font-fira-code text-sm text-left'>Embark on epic quests across uncharted lands, mystical realms, and cosmic frontiers. These adventure anime celebrate exploration, discovery, and the unbreakable bonds forged when heroes venture into the unknown.</p>
                         
                          <Genres data={adventureAnime} />

                        </section>
                        {/*Sci-fi Anime List list =====================================================================================*/}
                        <section className="w-full mt-12 flex flex-col items-start justify-start">
                          <h1 className="w-full font-fira-code text-xl lg:text-2xl font-extrabold text-neon_purple dark:text-white text-left">Cosmic Frontiers: Sci-Fi Anime Collection</h1>
                          <p className='text-black dark:text-white font-fira-code text-sm text-left'>Explore futuristic worlds, advanced technology, and mind-bending concepts with these sci-fi anime. From cyberpunk dystopias to interstellar adventures, these series challenge reality and ignite the imagination.</p>
                         
                          <Genres data={sciFiAnime} />
                        </section>
                        {/*sports Anime List list =====================================================================================*/}
                        <section className="w-full mt-12 flex flex-col items-start justify-start">
                          <h1 className="w-full font-fira-code text-xl lg:text-2xl font-extrabold text-neon_purple dark:text-white text-left">Victory Rush: Sports Anime Showdown</h1>
                          <p className='text-black dark:text-white font-fira-code text-sm text-left'>Feel the adrenaline of competition with these sports anime, where underdogs rise, teamwork triumphs, and the love of the game pushes athletes to their limits.</p>
                         
                          <Genres data={sportsAnime} />
                        </section>






               
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