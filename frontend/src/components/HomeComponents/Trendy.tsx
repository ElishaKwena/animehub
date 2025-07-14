import React from "react";
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../../routes/paths";
import PopularRating from "../PopularRating";

interface TrendyProps {
    name:string;
    banner:string;
    description:string;
    score:number;
} 



const Trendy:React.FC<TrendyProps> = ({name,banner,description,score}) =>{
    return(
        <>
        <div className="w-full flex items-center justify-start gap-2 h-[80px]">
            <div className="banner w-1/4 h-full">
                <img src={banner} alt="" className="w-full h-full object-cover rounded-md"/>
            </div>
            <div className="content flex flex-col gap-1">
                <h1 className="text-black dark:text-white font-bold font-fira-code text-sm">{name}</h1>
                <p className="text-dak900 dark:text-white font-firacode text-[10px]">
                    {description.length > 50 ? `${description.slice(0,60)}...`:description }
                </p>
                <div className="rating flex items-center justify-start gap-1">
                    <PopularRating score = {score}/>
                </div>
            </div>
        </div>

        </>
    )
}

export default Trendy;