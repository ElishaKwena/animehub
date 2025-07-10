import React from "react";



import {testimonies} from '../data/Testimony'

import TestimonyCard from "./TestimonyCard"

const Testimony: React.FC = () =>{
    return(
        <>
        <div className="w-full grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 place-items-center lg:gap-20 mt-[100px] gap-20 pl-12 md:px-4 md:pl-12 lg:p-10">
            {testimonies.slice(0,3).map(testimony => (
                <TestimonyCard 
                    key = {testimony.id}
                    username={testimony.username}
                    handle={testimony.handle}
                    content={testimony.content}
                    avatar={testimony.avatar}
                    favorite_anime={testimony.favorite_anime}
                    rate = {testimony.rating}
                />
            ))}
        </div>
        </>
    )
}
export default Testimony;