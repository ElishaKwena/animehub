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
            <div className="w-full flex flex-wrap gap-3 gap-y-8 font-fira-code justify-center">
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