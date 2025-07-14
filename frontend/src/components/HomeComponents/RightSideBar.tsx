import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrophy,
    faDragon,
    faFan
  } from "@fortawesome/free-solid-svg-icons";

import Trendy from "./Trendy";
import Guildschat from "./Guildschat";
import MicroPoll from "./MicroPoll";
import { trendies } from "../../data/Trendy";
import {groupcharts, currentPoll} from "../../data/Trendy";

const RightSideBar:React.FC = () =>{
    return(
        <>
        <div className="width-full flex flex-col gap-2 mt-0 bg-white dark:bg-dark900">
            <div className="trendyweek w-full flex flex-col">
                <div className="top flex items-center justify-start gap-2">
                    <FontAwesomeIcon icon={faTrophy} className="text-sunflower h-6"/>
                    <h1 className="capitalize text-md font-fira-code text-neon_purple dark:text-white font-bold">Trending This Week</h1>
                </div>
                <div className="w-full flex flex-col gap-4 mt-4">
                {trendies.slice(0,3).map(trend =>(
                    <Trendy
                    key = {trend.id}
                    name = {trend.name}
                    description = {trend.description}
                    banner = {trend.banner}
                    score = {trend.rating}
                    />
                ))}
                <button className="more bg-hovered flex items-center justify-center p-2 gap-2 rounded-full">
                    <FontAwesomeIcon icon={faDragon} className="text-sunflower"/>
                    <h1 className="text-white font-fira-code font-extrabold">See More</h1>
                </button>
                </div>

                <div className="w-full my-2 bg-chrome rounded-full h-[1px]"></div>

                <div className="active-guild w-fill flex flex-col">
                    <div className="flex items-center justify-start gap-4">
                        <FontAwesomeIcon icon={faFan} className="text-black dark:text-white h-6"/>
                        <h1 className="text-neon_purple dark:text-white font-fira-code">Active Guilds chat</h1>
                    </div>
                    <div className="activeguilds w-full flex flex-col gap-2">
                        {groupcharts.slice(0,4).map(chat => (
                            <Guildschat 
                            key={chat.id}
                            name={chat.name}
                            groupBanner={chat.groupBanner}
                            lastMessage={chat.lastMessage}
                            lastMessageTime={chat.lastMessageTime}
                            memberCount={chat.memberCount}
                            unreadCount={chat.unreadCount}
                            tags={chat.tags}
                            />
                        ))}
                         
                    </div>
                </div>

                <div className="w-full my-2 bg-chrome rounded-full h-[1px]"></div>

                {/* Poll section */}
                <div className="poll-section w-full flex flex-col">
                    <MicroPoll 
                        question={currentPoll.question}
                        options={currentPoll.options}
                        totalVotes={currentPoll.totalVotes}
                        isActive={currentPoll.isActive}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default RightSideBar;