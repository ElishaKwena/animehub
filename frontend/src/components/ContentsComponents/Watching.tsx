import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlay, faBookmark } from '@fortawesome/free-solid-svg-icons';
import rising from '../../assets/images/rising.jpg'

const Watching:React.FC = () =>{
    return(
        <>
            <div className="w-full h-full relative">
                {/* Image */}
                <div className="image-box w-full h-full absolute inset-0">
                    <img src={rising} alt="" className="w-full h-full rounded-md object-cover" />
                </div>
                {/* Bottom-to-transparent gradient overlay */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 40%)",
                        borderRadius: "0.375rem" // matches rounded-md
                    }}
                />
                {/* Black-to-transparent gradient overlay */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background: "linear-gradient(to right, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 100%)",
                        borderRadius: "0.375rem" // matches rounded-md
                    }}
                />
                {/* Title and details */}
                <div className="details w-full h-full absolute inset-0 flex items-center justify-start z-20">
                    <div className="animename p-8 w-1/2">
                        <h1 className="text-6xl text-candy font-javierskull font-extrabold drop-shadow-2xl" style={{
                            textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)'
                        }}>
                            The Rising of the Shield Hero
                        </h1>
                        <h2 className="text-neon_purple font-fira-code">Season 2</h2>
                        <p className="text-white font-fira-code text-sm">Naofumi Iwatani, a reluctant Shield Hero, is betrayed and must rise from disgrace to save a parallel world. The only weapon he can use is his shield, forcing unconventional strategies in battles.</p>
                        <div className="rates flex itesm-center justify-start gap-2 mt-2">
                            <span>
                                <FontAwesomeIcon icon={faStar} className="text-sunflower text-xl"/>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} className="text-sunflower text-xl"/>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} className="text-sunflower text-xl"/>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} className="text-sunflower text-xl"/>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStar} className="text-sunflower text-xl"/>
                            </span>
                            <span className="text-white ml-20">1.3M views</span>
                        </div>
                        <div className="watch flex items-center justify-start gap-2 mt-4">
                            <button className="p-3 border-[2px] border-fashion_pink group transition-all duration-300 hover:bg-transparent bg-fashion_pink rounded-full flex items-center justify-start gap-2 px-6">
                                <FontAwesomeIcon icon={faPlay} className="text-white text-xl group-hover:text-fashion_pink transition-all duration-300"/>
                                <h1 className="text-white font-fira-code font-extrabold text-xl group-hover:text-fashion_pink transition-all duration-300">Start Watching</h1>
                            </button>
                            {/* Tooltip wrapper for bookmark */}
                            <div className="relative group">
                                <button className="p-3 border-[2px] w-14 h-14 border-fashion_pink group transition-all duration-300 hover:bg-transparent bg-fashion_pink rounded-full flex items-center justify-center gap-2 px-6">
                                    <FontAwesomeIcon icon={faBookmark} className="text-white text-xl group-hover:text-fashion_pink transition-all duration-300"/>
                                </button>
                                {/* Tooltip */}
                                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-pewter text-black text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-30">
                                    Add to watchlist
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Watching;