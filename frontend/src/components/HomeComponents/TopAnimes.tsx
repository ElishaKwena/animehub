import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faBookmark } from '@fortawesome/free-solid-svg-icons';

interface TopProps{
    title:string;
    banner:string;
    content:string;
    sub:boolean;
    dub:boolean;
    status:string;
    sidebarsVisible?: boolean;
}


const TopAnimes:React.FC<TopProps> = ({title,banner,content,sub,dub,status,sidebarsVisible}) =>{
    const heightClass = sidebarsVisible ? 'h-[45vh]' : 'h-auto lg:h-[60vh]';
    
    return(
        <>
            <div className={`w-full mt-3 ${heightClass}`}>
                <div className="w-full flex items-center lg:flex-row flex-col justify-start gap-4 h-full">
                    <div className="banner w-full lg:w-1/2 h-[250px] lg:h-full">
                        <img src={banner} alt={title} className="w-full h-full object-cover object-center"/>
                    </div>
                    <div className="w-full lg:w-1/2 flex items-start justify-center h-full flex-col">
                        <h1 className="text-black dark:text-white font-topsagain text-4xl">{title}</h1>
                        <h2 className="text-black dark:text-frost font-fira-code font-extrabold text-xl">{status}</h2>
                        <div className="w-full flex items-center justify-start gap-2 mt-2">
                            {sub && <h1 className="text-white bg-neon_purple p-2 text-sm py-1 rounded-[5px]">SUB</h1>}
                            {dub && <h1 className="text-white bg-fashion_pink p-2 text-sm py-1 rounded-[5px]">DUB</h1>}
                        </div>
                        <div className="font-fira-code text-[12px] text-black dark:text-white mt-2">{content.length > 325 ? `${content.slice(0,325)} ...` : content}</div>
                        <div className="w-full flex items-center justify-between lg:justify-start gap-2 mt-4">
                            <button className="text-white flex items-center justify-center gap-2 px-4 hover:bg-transparent hover:border-fashion_pink bg-neon_purple p-2 border-[2px] transition-all duration-300 border-neon_purple rounded-sm group">
                                <FontAwesomeIcon icon={faPlay} className="text-sm lg:text-3xl transition-all duration-300 group-hover:text-fashion_pink"/>
                                <h2 className="text-whitefont-bold font-fira-code transition-all duration-300 group-hover:text-fashion_pink">Watch Now</h2>
                            </button>
                            <button className="text-neon_purple dark:text-white flex items-center justify-center gap-2 px-4 hover:border-fashion_pink bg-transparent p-2 border-[2px] transition-all duration-300 border-neon_purple rounded-sm group">
                                <FontAwesomeIcon icon={faBookmark} className="text-sm lg:text-3xl transition-all duration-300 group-hover:text-fashion_pink"/>
                                <h2 className="text-whitefont-bold font-fira-code transition-all duration-300 group-hover:text-fashion_pink">Add to WatchList</h2>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopAnimes;