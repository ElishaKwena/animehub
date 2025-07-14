import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

interface RecommendationProps{
    name:string;
    banner:string;
    sidebarsVisible?: boolean;
}


const Recommendation:React.FC<RecommendationProps> = ({banner,name,sidebarsVisible}) =>{
    const heightClass = sidebarsVisible ? 'h-[45vh]' : 'lg:h-[50vh]';
    
    return(
        <>
            <div className={`w-full ${heightClass} bg-yellow-500`}>
                <div className="w-full flex items-center justify-start gap-4 h-full relative">
                    <div className="banner w-full h-full">
                        <img src={banner} alt={name} className="w-full h-full object-cover object-bottom"/>
                    </div>
                    <div className="name w-1/2 absolute z-50 left-4 lg:left-20">
                    <h1 className="text-2xl lg:text-3xl text-white  font-topsagain drop-shadow-2xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)'}}>
                        {name}
                        {/* font-javierskull */}
                    </h1>
                    </div>
                    <div className="name w-1/2 absolute z-50 bottom-8 lg:bottom-14 left-[20%] lg;left-[45%]">
                        <button className="flex items-center justify-center gap-2 rounded-full bg-neon_purple w-[220px] lg:w-[240px] p-3 lg:p-4 animate-pulse">
                            <FontAwesomeIcon icon={faPlay} className="h-6 lg:h-8 text-white"/>
                            <h1 className="text-white text-xl lg:text-2xl font-fira-code font-extrabold">Watch Now</h1>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recommendation;