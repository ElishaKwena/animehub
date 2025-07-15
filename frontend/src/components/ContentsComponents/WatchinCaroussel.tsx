import React from "react";
import { Carousel } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBookmark } from '@fortawesome/free-solid-svg-icons';
import PopularRating from "../PopularRating";
import { watching } from '../../data/Watching';

const WatchinCaroussel: React.FC = () => {
  return (
    <div className="w-full h-full relative no-rounded-carousel">
      <Carousel slide={true} indicators={true} className="h-full rounded-0">
        {watching.map((anime) => (
          <div key={anime.id} className="w-full h-full relative">
            {/* Image */}
            <div className="image-box w-full h-full absolute inset-0">
              <img src={anime.banner} alt={anime.title} className="w-full h-full object-cover" />
            </div>
            {/* Bottom-to-transparent gradient overlay */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 40%)",
       
              }}
            />
            {/* Black-to-transparent gradient overlay */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to right, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0) 100%)",
                
              }}
            />
            {/* Title and details */}
            <div className="details w-full lg:h-full absolute inset-0 flex items-center justify-start z-20 botom-0 p-4 lg:p-8">
              <div className="animename w-full flex items-start flex-col justify-center md:w-1/2 h-full">
                <h1 className="text-3xl md:text-6xl text-candy font-javierskull font-extrabold drop-shadow-2xl" style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)'
                }}>
                  {anime.title}
                </h1>
                <h2 className="text-neon_purple font-fira-code mt-2">{anime.season}</h2>
                <p className="text-white font-fira-code text-sm mt-2">{anime.synopsis}</p>
                <div className="rates flex items-center justify-start gap-2 mt-2">
                  <PopularRating score={anime.rating} size="text-2xl"/>
                  <span className="text-white ml-8 font-fira-code text-base">{anime.rating} / 10</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {anime.genres.map((genre) => (
                    <span key={genre} className="bg-fashion_pink/80 text-white text-xs px-2 py-1 rounded font-fira-code">
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="watch flex items-center justify-start gap-2 mt-4">
                  <button className="p-2 lg:p-2 border-[2px] border-fashion_pink group transition-all duration-300 hover:bg-transparent bg-fashion_pink rounded-full flex items-center justify-start gap-2 px-4 lg:px-6">
                    <FontAwesomeIcon icon={faPlay} className="text-white text-xl group-hover:text-fashion_pink transition-all duration-300" />
                    <h1 className="text-white font-fira-code font-extrabold text-md lg:text-xl group-hover:text-fashion_pink transition-all duration-300">Watch Now </h1>
                  </button>
                  {/* Tooltip wrapper for bookmark */}
                  <div className="relative group">
                    <button className="p-2 lg:p-3 border-[2px] w-12 h-12 lg:w-14 lg;h-14 border-fashion_pink group transition-all duration-300 hover:bg-transparent bg-fashion_pink rounded-full flex items-center justify-center gap-2 px-6">
                      <FontAwesomeIcon icon={faBookmark} className="text-white text-xl group-hover:text-fashion_pink transition-all duration-300" />
                    </button>
                    {/* Tooltip */}
                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-pewter text-black text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-30">
                      Add to watchlist
                    </span>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap gap-4 mt-4 text-white font-fira-code text-xs">
                  <span>Status: <span className="font-bold text-fashion_pink">{anime.status}</span></span>
                  <span>Episodes: <span className="font-bold text-fashion_pink">{anime.episodes}</span></span>
                  <span>Studio: <span className="font-bold text-fashion_pink">{anime.studio}</span></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default WatchinCaroussel;
