import React from "react";

interface PricingTiersProp{
    name:string;
    badge:string;
    subtitle:string;
    banner:string;
    badgeclass ?:string;
}

const PricingTier: React.FC <PricingTiersProp> = ({name,badge,subtitle,banner}) =>{

    const badgeLower = badge.toLowerCase()
    let color = '';
    let bgcolor ='';
    let border = '';

    if (badgeLower === "free"){
        color = 'lime_green';
        bgcolor = 'bg-lime_green/20';
        border = 'border-lime_green';
    }else if(badgeLower === 'premium'){
        color = 'sapphire';
        bgcolor = 'bg-cosmic/20';
        border = 'border-cosmic';
    }else if(badgeLower === 'family'){
        color ='fashion_pink'
        bgcolor = 'bg-fashion_pink/20';
        border = 'border-fashion_pink';
    }else{
        color = 'neon_purple';
        bgcolor = 'bg-neon_purple/10';
        border = 'border-neon_purple';
    }

    return(
        <>
        <div className="rounded-md flex items-end justify-baseline gap-2 border h-[130px] bg-frost dark:bg-black border-frost shadow-md">
            <div className="imageside w-1/3 h-full">
                <img src={banner} alt="" className="w-full h-full object-cover rounded-l-md"/>
            </div>
            <div className="texts pb-2">
                <h1 className="font-bold text-nintedo text-2xl">{name}</h1>
                <h2 className="text-chrome mb-2">{subtitle}</h2>
                <div className={`border ${border} rounded-sm`}>
                    <h2 className={`text-${color} px-1 ${bgcolor}`}>{badge}</h2>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default PricingTier;