import React from "react";

interface GuildProps{
    name:string;
    groupBanner:string;
    lastMessage:string;
    lastMessageTime:string;
    memberCount:number;
    unreadCount:number;
    tags:string[];
}
const Guildschat:React.FC<GuildProps> = ({name,groupBanner,lastMessage,lastMessageTime,memberCount,unreadCount,tags}) =>{
    return(
        <>
        <div className="w-full flex items-start justify-start gap-2 h-[70px]">
            <div className="banner h-full flex items-center justify-start p-2">
                <img src={groupBanner} alt="" className="w-14 h-14 object-cover rounded-full"/>
            </div>
            <div className="flex items-center flex-col justify-start w-3/4 pt-2">
                <div className="top w-full flex items-startr justify-between">
                    <h1 className="text-black dark:text-white font-fira-code font-bold text-sm">{name}</h1>
                    <p className="text-chrome text-[10px]">{memberCount} members</p>
                </div>
                <div className="last w-full flex flex-col items-start justify-start">
                    <p className="text-gray-500 dark:text-pewter font-fira-code text-[10px]">{lastMessage.length >45 ? `${lastMessage.slice(0,45)}`: lastMessage}</p>
                    <div className="w-full flex items-center justify-between">
                        <p className=" font-fira-code text-[10px] text-black dark:text-white">{lastMessageTime}</p>
                        <div className="flex items-center justify-between gap-1">
                             {tags.slice(0,3).map((tag, index) => (
                                 <span key={index} className="text-[8px] bg-neon_purple text-white px-1 py-0.5 rounded">
                                     {tag}
                                 </span>
                             ))}
                         </div>
                    </div>

                </div>
                
            </div>
            
        </div>
        </>
    )
}
export default Guildschat