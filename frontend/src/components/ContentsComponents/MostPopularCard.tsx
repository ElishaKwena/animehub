import React, { useState } from "react";

import useFormatNumber from '../../hooks/useFormatNumber';
import PopularRating from "../PopularRating";

import '../../styles/mostpopular.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faPlay,
    faBookmark
  } from "@fortawesome/free-solid-svg-icons";

interface MostpopularProps{
  name:string;
  banner:string;
  description:string;
  rating:number;
  sub:boolean;
  dub:boolean;
  views:number;
  seasons:number;
  episodes:number;
}
const MostPopularCard:React.FC<MostpopularProps> =({name,banner,description, rating, sub, dub, views, seasons, episodes})=>{
    const [hovered, setHovered] = useState(false);

    const formattedViews = useFormatNumber(views); 
    return(
        <>
        <div 
          className="anime-card w-[240px] h-full rounded-md flex flex-col gap-2 p-0 relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* detailsbox - only render when hovered */}
          {hovered && (
            <div className="absolute z-50 w-full h-full rounded-md bg-black/30 backdrop-blur-md flex flex-col gap-1 p-2 transition-all duration-500 pointer-events-auto opacity-100 translate-y-0">
              <div className="top w-full">
                <h1 className="text-white font-fira-code text-sm">{name}</h1>
                <h1 className="text-black font-fira-code text-[12px]">{seasons > 1? `${seasons} seasons`: `${seasons} season`}</h1>
                <h1 className="text-black font-fira-code text-[12px]">{episodes > 1? `${episodes} episodes`: `${episodes} episode`}</h1>
                <div className="flex w-full items-center justify-between mt-2">
                  <div className="flex items-center justify-start gap-1">
                    <PopularRating score={rating}/>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <FontAwesomeIcon icon ={faEye} className="text-neon_blue"/>
                    <h1 className="text-white font-fira-code text-[10px]">{formattedViews} {views > 1 ? 'views' : 'view'} </h1>
                  </div>
                </div>
              </div>
              <div className="details w-full mt-3 flex-grow">
                  <p className="text-white font-fira-code text-[12px]">{description}</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                  <div className="relative">
                    <button 
                      className="group flex items-center justify-center border-2 border-fashion_pink p-2 rounded-md hover:border-neon_purple transition-all duration-300 relative"
                    >
                        <FontAwesomeIcon icon={faPlay} className="text-fashion_pink text-xl group-hover:text-neon_purple duration-300 transition-all"/>
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                          Play Now
                        </span>
                    </button>
                  </div>
                  <div className="relative">
                    <button 
                      className="group flex items-center justify-center border-2 border-fashion_pink p-2 rounded-md hover:border-neon_purple transition-all duration-300 relative"
                    >
                        <FontAwesomeIcon icon={faBookmark} className="text-fashion_pink text-xl group-hover:text-neon_purple transition-all duration-300"/>
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                          Add to Watchlist
                        </span>
                    </button>
                  </div>
              </div>
            </div>
          )}

          <div className="details w-full h-[305px] relative">
            <div className="banner w-full h-full absolute z-10">
              <img src={banner} alt="" className="w-full h-full object-cover object-top rounded-md"/>
            </div>
          </div>
          <div className="bottom-details w-full bg-frost dark:bg-dark800 rounded-[6px] flex flex-col gap-0 -mt-1 p-1">
            <h1 className="text-black dark:text-white font-fira-code text-sm text-center">{name}</h1>
            {(sub || dub) && (
              <div className="w-full flex items-center justify-start gap-2">
                {sub && <h1 className="text-neon_purple">SUB</h1>}
                {sub && dub && <span className="text-white">|</span>}
                {dub && <h1 className="text-fashion_pink">DUB</h1>}
              </div>
            )}
          </div>
        </div>
        </>
    )
}
export default MostPopularCard;