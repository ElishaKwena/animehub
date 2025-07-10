import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../styles/Pricing.css';
import { Link } from "react-router-dom";


interface PricecardProps{
    name:string;
    price:number;
    billing:string;
    features: string[];
    cta_text: string;
    tag: string;

}

const PriceCard:React.FC<PricecardProps> = ({name,price,billing,features,cta_text,tag}) =>{
    const collarColor = 
        name.toLowerCase().includes('genin') ? 'var(--lime_green)' :
        name.toLowerCase().includes('hokage') ? 'var(--neon_blue)' :
        name.toLowerCase().includes('nakam') ? 'var(--fashion_pink)' :
        'red';
    const cardname = name.toLowerCase();
    let bgColor = '';
    let text = '';

    if(cardname.includes('genin')){
        bgColor = 'bg-lime_green';
        text = 'text-lime_green';
    }
    else if(cardname.includes('hokage')){
        bgColor = 'bg-neon_blue';
        text = 'text-neon_blue';
    }
    else if(cardname.includes('nakama')){
        bgColor = 'bg-fashion_pink';
        text = 'text-fashion_pink'
    }
    else{
        bgColor = 'bg-red-500';
    }


    const displayPrice = price === 0 ? "FREE" : `$${price}`;
    return(
        <>
        <div className="card backdrop-blur-md z-50 w-[360px] flex items-center justify-center h-[530px] bg-frost/60 dark:bg-white/5 border border-white/5 rounded-lg shadow-lg relative">
        <div className="cardbox w-[390px] h-[550px] absolute overflow-hidden p-5 flex flex-col gap-2">
            <div className={`collar absolute h-[70px] flex items-center justify-center ${bgColor}`} style={{ '--collar-color': collarColor } as React.CSSProperties}>
                <h1 className="font-extrabold text-3xl text-center text-white">{name}</h1>
            </div>
            <div className="contents-top w-full px-4 h-[100px] flex items-center justify-end border-b border-white/5">
                <h1 className={`${text} text-4xl font-bold font-boldonse`}>{displayPrice}</h1>
            </div>
            <div className="billing w-full mt-5 flex-grow pl-14 pr-4">
                <h2 className="dark:text-white capitalize font-fira-code text-sm text-right text-dark900 ">{billing}</h2>
            </div>
            <div className="features w-full mt-10 p-4 py-0 flex-grow">
                <ul className="flex flex-col items-start">
                {features.map((feature, idx)=>(

                    <li 
                    key={idx}
                    className="flex items-center justify-start gap-2 font-fira-code dark:text-white">
                        <FontAwesomeIcon 
                            icon={faCheck} 
                            className="dark:text-white text-electric bg-electric/10 text-sm w-4 p-2 h-4 rounded-full mt-1 mr-2 flex-shrink-0 dark:bg-frost/10" 
                        />
                        {feature}
                    </li>
                ))}
                </ul>
            </div>
            <div className="w-full px-4">
                <p className={`${text}`}>{tag}</p>
            </div>
            <div className="call px-4 w-full">
                <Link to="" className={`${bgColor} w-full block text-white font-boldonse text-[10px] p-3 rounded-[5px] text-center`}>{cta_text}</Link>
            </div>
        </div>
        </div>
        </>
    )
}
export default PriceCard;