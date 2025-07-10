import React from 'react'
import PopularRating from './PopularRating';
import '../styles/popular.css';


interface PopularProps{
    title:string;
    category:string;
    score:number;
    status:string;
    tagicon:string;
    tagtext:string;
    banner:string;
}


const Popular:React.FC<PopularProps> = ({title,category,score,status,tagicon,tagtext,banner}) => {
    return(
        <>
        <div className="popularcard flex items-center group z-50 justify-center rounde-md box-shadow-lg relative w-[300px] rounded-md min-w-[350px] max-w-[350px] h-[200px] min-h-[200px] max-h-[200px] shadow-[0_0_10px_rgba(0,0,0,0.4)] dark:shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            <img src={banner} alt="" className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:opacity-[0.2] group-hover:scale-[1.01] transition-all duration-300"/>
            <div className="tag">
                <div className="tag-items w-full relative">
                    <div className="icon w-full h-full flex items-center justify-center relative">
                        <img src={tagicon} alt=""  className='w-10 mt-6'/>
                        <div className="text absolute right-[55px] top-8">
                            <h1 className="font-shloprg tracking-widest text-candy font-bold">{tagtext}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex z-10 relative flex-col items-baseline justify-end gap-2 w-full h-full p-3 card-contents">
                <p className="absolute top-2 font-lobster text-fashion_pink">{status}</p>
                <div className="flex items-end justify-between w-full relative">
                    <div className="flex flex-col items-start justify-start gap-0">
                        <p className='text-neon_blue text-sm font-bold'>{category}</p>
                        <h1 className='text-fashion_pink text-md font-bold'>{title}</h1>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <PopularRating score={score}/>
                    </div>
                    
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Popular;