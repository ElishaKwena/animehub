import React from "react";
import { Link } from "react-router-dom";
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
  const menuItems1 = [
    {id:1,label:"Home",icon:faHome,link:""},
    {id:2,label:"Genres",icon:faLayerGroup,link:""},
    {id:3,label:"Posts",icon:faNewspaper,link:""},
    {id:4,label:"Anime Guilds",icon:faFan,link:""},
    {id:5,label:"Discover",icon:faBinoculars,link:""},
    {id:6,label:"Coming Soon",icon:faHome,link:""}
  ];
  const menuItems2 = [
    {id:1,label:"Recents",icon:faHistory,link:""},
    {id:2,label:"Downloads",icon:faDownload,link:""},
    {id:3,label:"Library",icon:faBookOpen,link:""},
    {id:4,label:"Gallery",icon:faImages,link:""},
    {id:5,label:"Art Works",icon:faPalette,link:""},
    {id:6,label:"Settings",icon:faCog,link:""},
    {id:7,label:"Log Out",icon:faSignOutAlt,link:""},
  ];

  return (
    <div className={`text-white w-64 min-h-screen p-4 flex flex-col gap-2 pr-6 bg-white dark:bg-black`}>
        <div className="menu-top w-full flex flex-col items-cennter gap-2 justify-start">
            {menuItems1.map(menu =>(
                <div 
                key = {menu.id}
                className="menu">
                        <Link to="" className="w-full flex items-center justify-start gap-4 linear-hover text-sm p-2 rounded-full transition-all duration-500">
                        <FontAwesomeIcon icon={menu.icon} className="text-black dark:text-white"/>
                        <h1 className="font-fira-code text-black dark:text-white">{menu.label}</h1>
                    </Link>
                </div>
            ))}
        </div>

        <div className="w-full my-4 bg-chrome rounded-full h-[1px]"></div>

        <div className="menu-top w-full flex flex-col items-cennter gap-2 justify-start">
        {menuItems2.map(menu =>(
                <div 
                key = {menu.id}
                className="menu">
                        <Link to="" className="w-full flex items-center justify-start gap-4 linear-hover text-sm p-2 rounded-full transition-all duration-500">
                        <FontAwesomeIcon icon={menu.icon} className="text-black dark:text-white"/>
                        <h1 className="font-fira-code text-black dark:text-white">{menu.label}</h1>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  );
};

export default LeftSideBar;
