import React from "react";


import {tiers} from '../data/Pricing'
import {subscription} from '../data/Pricing'

import PricingTier from "./PricingTier";
import PriceCard from "./PriceCard";

const Pricing: React.FC = () =>{

    const sortedcards = [...subscription].sort((a,b) => a.price - b.price)

    return(
        <>
            <div className="cards-description w-full grid lg:grid-cols-3 gap-3 mt-10 grid-cols-1 md:grid-cols-2 ">
                {tiers.map(tier =>(

    
                    <PricingTier 
                    key ={tier.id}
                    name = {tier.name}
                    subtitle = {tier.subtitle}
                    badge = {tier.badge}
                    banner = {tier.banner}
                    />
                ))}
            </div>
            <div className="price-cards w-full grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-6 mt-40">
                <div className="absolute w-full top-[-50px] lg:top-[-110px]">
                    <h1 className="dark:text-white text-center text-[60px] md:text-[100px] lg:text-[170px] text-neon_purple font-boldonse">PRICING</h1>
                </div>
                {sortedcards.map(card =>(
                    <PriceCard 
                    key = {card.id}
                    name = {card.name}
                    price = {card.price}
                    billing = {card.billing}
                    features = {card.features}
                    cta_text ={card.cta_text}
                    tag = {card.tag}
                    />
                ))}
            </div>
        </>
    )
}
export default Pricing;