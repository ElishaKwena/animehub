import React from "react";
import light from '../assets/images/light.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface TestimonyProps{
    username:string;
    handle:string;
    content:string;
    avatar:string;
    favorite_anime:string;
    rate:number;
}

const TestimonyCard: React.FC<TestimonyProps> = ({username,handle,content,avatar,rate,favorite_anime}) =>{
    return(
        <>
            <div className=" flex flex-col gap-2 dark:bg-dark800 bg-frost h-[220px] max-h-[400px] relative rounded-b-md shadow-md border border-white">
            <div className="absolute w-[50px] h-[100px] bg-black_bean -rotate-[25deg] left-[-21px] top-[13%] -z-10"></div>
                <div className="image w-full relative h-full">
                    <div className="image-box md:w-[140px] lg:w-[160px] w-[130px] lg:h-[160px] md:h-[140px] h-[130px] dark:bg-white bg-frost rounded-full absolute md:bottom-[150px] bottom-[165px] lg:bottom-[145px] -right-0 p-2 z-20 shadow-lg">
                        <img src={avatar || light} alt="" className="w-full h-full rounded-full"/>
                    </div>
                    <div className="userdetails w-[240px] md:w-[270px] lg:w-[280px] h-[100px] bg-pinot absolute bottom-[175px] left-[-40px] rounded-tr-[30px]">
                        <div className="detailox w-full h-full relative flex items-center justify-between p-2">
                            <div>
                                <h1 className="text-white text-lg">{username}</h1>
                                <p className="font-lobster -mt-2 text-neon_blue text-sm"><span className="text-2xl">@</span>{handle}</p>
                            </div>
                            <div className="absolute rates h-full flex gap-2 items-end justify-start right-2 bottom-2">
                                {[...Array(5)].map((_, index)=>(
                                      <FontAwesomeIcon 
                                      key = {index}
                                      icon={faStar} className={`text-sm font-bold ${index < rate ? 'text-sunflower' : 'text-pewter'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="testimony mt-20 p-4 flex-grow">
                        <p className="text-black dark:text-white text-center text-sm">
                            {content}
                        </p>
                    </div>
                    <div className="w-full mt-1 p-4 absolute bottom-0">
                        <h1 className="text-fashion_pink">Best anime: <span className="text-neon_purple">{favorite_anime}</span></h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TestimonyCard;