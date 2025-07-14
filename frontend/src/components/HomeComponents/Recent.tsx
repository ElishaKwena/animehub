import React from "react";
import PopularCarousel from "../PopularCarousel";

const Recent:React.FC = () =>{
    return(
        <div className="w-full overflow-hidden">
            <PopularCarousel padding="py-0" height="h-56"/>
        </div>
    )
}
export default Recent;