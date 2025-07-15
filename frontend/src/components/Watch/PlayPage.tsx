import React from "react";
import { useOutletContext } from "react-router-dom";
import PlayContainer from "./PlayContainer";

import Suggestion from "../ContentsComponents/Suggestion";

import { suggestionAnime } from "../../data/Recommended/Suggestion";

// https://drive.google.com/file/d/1epBu-VCH3tOcVYr1kQBrTCKcczxrcns0/view?usp=sharing

// ffmpeg -i "input.ts" -c copy "output.mp4"

const animedata={
    id:"bleach",
    name:"Bleach",
    subtitle:"When the dead attack, only the chosen can strike back.",
    description:'Ichigo Kurosaki was just a hot-headed teenager with the odd ability to see ghosts—until the night he met Rukia Kuchiki, a Soul Reaper tasked with defending the living world from monstrous lost souls called Hollows. When Rukia is injured, she transfers her powers to Ichigo, thrusting him into a hidden war between the living and the dead.As Ichigo trains to master his newfound abilities, he discovers the Soul Society, a realm of warrior spirits where corruption runs deep. With allies like the fiery Renji Abarai and the enigmatic Kisuke Urahara, Ichigo battles vengeful Hollows, rogue Soul Reapers, and even the gods of death themselves.',
    seasons:[
        {
            id:1,
            season:1,
            episodes:100,
        },
        {
            id:2,
            season:2,
            episodes:100,
        },
        {
            id:3,
            season:3,
            episodes:100,
        },
        {
            id:4,
            season:4,
            episodes:100,
        },
        {
            id:5,
            season:5,
            episodes:66,
        },
    ],
    videosrc :'/videos/bleach.mp4',
    sub:true,
    dub:true,
}

const videosrc = '/videos/bleach.mp4';

const Play:React.FC = () =>{
    const { sidebarsVisible } = useOutletContext<{ sidebarsVisible: boolean }>();
    const [currentSeasonIndex, setCurrentSeasonIndex] = React.useState(0);
    const currentSeason = animedata.seasons[currentSeasonIndex];

    return(
        <>
            <section className="w-full flex flex-col items-center justify-start">
                <div className={`playcontainer w-full bg:frost dark:bg-black ${sidebarsVisible ? 'h-[65vh]' : 'lg:h-[80vh]'}`}> 
                    <PlayContainer videosrc={videosrc} />
                </div>
                <div className="episodes w-full flex flex-col items-center justify-start mt-4 bg-frost dark:bg-dark800 p-2 rounded-md shadow-xl">
                    <div className="w-full flex items-center justify-start gap-2">
                        {animedata.sub && <button className="text-white font-fira-code py-1 p-2 bg-neon_purple hover:bg-fashion_pink transition-all duration-300 rounded-md">SUB</button>}
                        {animedata.dub && <button className="text-white font-fira-code py-1 p-2 bg-neon_purple hover:bg-fashion_pink transition-all duration-300 rounded-md">DUB</button>}
                        
                    </div>
                    <div className="seasons w-full flex items-center justify-start gap-2 mt-2">
                        <h1 className="text-black dark:text-white font-fira-code">Season</h1>
                        <div className="buttons flex items-center justify-start gap-2">
                            {animedata.seasons.map((season, idx) => (
                                <button
                                key={season.id}
                                className={`flex items-center justify-center bg-chrome dark:bg-dark700 w-8 h-6 hover:bg-neon_purple dark:hover:bg-neon_purple transition-all duration-300 rounded-sm text-white font-fira-code ${currentSeasonIndex === idx ? "bg-fashion_pink dark:bg-fashion_pink" : ""}`}
                                onClick={() => setCurrentSeasonIndex(idx)}
                                >{season.season}</button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full bg-frost dark:bg-dark800 flex flex-col p-2 mt-3 shadow-lg rounded-md">
                    <h1 className="text-black mb-2 font-fira-code dark:text-white">Episodes</h1>
                    <div className="buttons flex items-center justify-center gap-2 flex-wrap">
                        {Array.from({ length: currentSeason.episodes }, (_, i) => (
                            <button
                            key={i + 1}
                            className="flex items-center justify-center bg-chrome dark:bg-dark700 dark:hover:bg-neon_purple hover:bg-neon_purple transition-all duration-300 w-8 h-6 rounded-sm text-white font-fira-code"
                            >
                                {i + 1}
                            </button>
                        ))}

                    </div>
                </div>
                <div className="about w-full p-2 font-fira-code mt-3 bg-frost dark:bg-dark800 flex flex-col gap-2 rounded-md">
                    <h1 className="text-black dark:text-white text-3xl font-extrabold">{animedata.name}</h1>
                    <h2 className="text-md font-fira-code text-chrome">{animedata.subtitle}</h2>
                    <p className="text-[14px] text-black dark:text-white ">{animedata.description}</p>
                </div>



                {/* suggested anime ============================================================================================ */}
                <div className="w-full">
                    <Suggestion data={suggestionAnime}/>
                </div>
            </section>
        </>
    )
}
export default Play;