import React from "react";

import SuggestionCard from "./SuggestionCard";

import { popular } from "../../data/Trendy";

interface SuggestionProps{
    data?: typeof popular;
}

const Suggestion:React.FC<SuggestionProps> = ({ data = popular }) =>{
    return(
        <>
        <div className="w-full mt-4 h-[300px pb-20]">
            <h1 className="text-neon_purple font-bold text-2xl mb-2 font-fira-code">Suggestions</h1>
            <div className="w-full grid md:grid-cols-4 place-items-center gap-2 grid-cols-2 lg:flex flex-wrap lg:gap-3 gap-y-8 font-fira-code justify-center">
            {data.map((anime) =>(
                    <SuggestionCard
                    key = {anime.id}
                    name={anime.name}
                    banner={anime.banner}
                    rating={anime.rating}
                    description={anime.description}
                    sub = {anime.sub}
                    dub = {anime.dub}
                    views = {anime.views}
                    seasons = {anime.seasons}
                    episodes = {anime.episodes}
                  />
            ))}
            </div>
        </div>
        </>
    )
}
export default Suggestion;