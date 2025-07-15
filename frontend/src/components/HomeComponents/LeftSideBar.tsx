import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faBookOpen,
  faCompass,
  faClock,
  faCog,
  faDownload,
  faSignOutAlt,
  faHistory,
  faLayerGroup,
  faMask,
  faNewspaper,
  faFan,
  faBinoculars,
  faImages,
  faPaintBrush,
  faPalette,
  faCameraRetro,
  faHeart,
  faChartLine,
  faTrophy,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const LeftSideBar: React.FC = () => {
  const [genresOpen, setGenresOpen] = useState(false);
  const genresRef = useRef<HTMLDivElement>(null);
  const genresList = [
    "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Romance", "Sci-Fi"
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (genresRef.current && !genresRef.current.contains(event.target as Node)) {
        setGenresOpen(false);
      }
    }
    if (genresOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [genresOpen]);

  const menuItems1 = [
    {id:1,label:"Home",icon:faHome,link:"/home"},
    {id:2,label:"Genres",icon:faLayerGroup,link:"/genres"},
    {id:3,label:"Posts",icon:faNewspaper,link:"/posts"},
    {id:4,label:"Anime Guilds",icon:faFan,link:"/guilds"},
    {id:5,label:"Discover",icon:faBinoculars,link:"/discover"},
    {id:6,label:"Coming Soon",icon:faHome,link:"/coming-soon"}
  ];
  const menuItems2 = [
    {id:1,label:"Recents",icon:faHistory,link:"/recents"},
    {id:2,label:"Downloads",icon:faDownload,link:"/downloads"},
    {id:3,label:"Library",icon:faBookOpen,link:"/library"},
    {id:4,label:"Gallery",icon:faImages,link:"/gallery"},
    {id:5,label:"Art Works",icon:faPalette,link:"/artworks"},
    {id:6,label:"Settings",icon:faCog,link:"/settings"},
    {id:7,label:"Log Out",icon:faSignOutAlt,link:"/logout"},
  ];

  return (
    <div className={`text-white w-64 min-h-screen p-4 flex flex-col gap-2 bg-white dark:bg-black`}>
        <div className="menu-top w-full flex flex-col items-cennter gap-2 justify-start">
            {menuItems1.map(menu =>(
                <div 
                key = {menu.id}
                className="menu" ref={menu.id === 2 ? genresRef : undefined}>
                    {menu.id === 2 ? (
                      <>
                        <button
                          type="button"
                          className="w-full flex items-center justify-start gap-4 linear-hover text-sm p-2 rounded-full transition-all duration-500 group focus:outline-none relative"
                          onClick={() => setGenresOpen((open) => !open)}
                        >
                          <FontAwesomeIcon icon={menu.icon} className="text-black dark:text-white group-hover:text-fashion_pink"/>
                          <h1 className="font-fira-code text-black dark:text-white group-hover:text-fashion_pink">{menu.label}</h1>
                        </button>
                        {genresOpen && (
                          <div className="absolute left-6 lg:left-6 mt-2 w-52 bg-white dark:bg-black border border-chrome rounded shadow-lg z-50">
                            <ul className="py-2">
                              {genresList.map((genre) => (
                                <li key={genre} className="px-4 py-2 hover:bg-fashion_pink hover:text-white cursor-pointer text-black dark:text-white">
                                  {genre}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={menu.link}
                        className={({ isActive }) =>
                          `w-full flex items-center justify-start gap-4 linear-hover text-sm p-2 rounded-full transition-all duration-500 group
                          hover:bg-fashion_pink hover:text-white
                          ${isActive ? 'bg-active text-white' : ''}`
                        }
                      >
                        <FontAwesomeIcon icon={menu.icon} className="text-black dark:text-white group-hover:text-fashion_pink"/>
                        <h1 className="font-fira-code text-black dark:text-white group-hover:text-fashion_pink">{menu.label}</h1>
                      </NavLink>
                    )}
                </div>
            ))}
        </div>

        <div className="w-full my-4 bg-chrome rounded-full h-[1px]"></div>

        <div className="menu-top w-full flex flex-col items-cennter gap-2 justify-start">
        {menuItems2.map(menu =>(
                <div 
                key = {menu.id}
                className="menu">
                        <NavLink
                          to={menu.link}
                          className={({ isActive }) =>
                            `w-full flex items-center justify-start gap-4 linear-hover text-sm p-2 rounded-full transition-all duration-500 group
                            hover:bg-fashion_pink hover:text-white
                            ${isActive ? 'bg-gradient-to-br from-neon_purple via-fashion_pink to-fashion_pink text-white' : ''}`
                          }
                        >
                          <FontAwesomeIcon icon={menu.icon} className="text-black dark:text-white group-hover:text-white"/>
                          <h1 className="font-fira-code text-black dark:text-white group-hover:text-white">{menu.label}</h1>
                        </NavLink>
                </div>
            ))}
        </div>
    </div>
  );
};

export default LeftSideBar;
