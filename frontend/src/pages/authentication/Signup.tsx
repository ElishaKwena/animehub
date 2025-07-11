import React from 'react';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import ROUTE_PATHS from '../../routes/paths';
import Authbackground from '../../components/MaterialUI/Background/Authbackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import flame from '../../assets/icons/flame.png'
import google from '../../assets/icons/google.png'
import discord from '../../assets/icons/discord.png'

// Usage in JSX:
<FontAwesomeIcon icon={faCheck} />

const details =[
    {
        id:1,
        "name":"10,000+ titles",
        "content":"Every genre, from shonen to slice-of-life",
    },
    {
        id:2,
        "name":"Simulcasts",
        "content":"New episodes 1 hour after Japan",
    },
    {
        id:3,
        "name":"Personalized feeds",
        "content":"Smart recommendations based on your taste",
    },
    {
        id:4,
        "name":"Watch parties",
        "content":"Sync streams with friends worldwide",
    },
    {
        id:5,
        "name":"Exclusive content",
        "content":"Behind the-scenes, OVAs, and director's cuts",
    }
]

const Signup: React.FC = () => {
    const [formData, setFormData] = useState({
        username:'',
        handlename:'',
        email:'',
        password:'',
        confirmPassword:'',
    
    });

    const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }


    return(
        <>
            <div className="signup-div  w-full max-h-screen lg:h-screen absolute grid place-items-center z-50 rounded-xl">
                <div className="overflow-auto lg:overflow-visible formdiv w-[98%] mx-auto lg:w-[70%] h-screen lg:h-[80vh] rounded-xl flex flex-col lg:flex-row items-center justify-between lg:backdrop-blur-sm lg:bg-white/10 lg:border lg:border-white/30 lg:shadow-2xl" >
                    {/* signup form left side */}
                    <div className="left w-full lg:w-1/2 h-full flex flex-col items-center justify-start lg:justify-center p-2 lg:p-4">
                        <div className="logo w-full">
                        <div className="flex items-baseline justify-start lg:justify-center ">
                            <h1 className='text-neon_purple font-bold lg:text-4xl font-privus text-lg'>ANIME</h1>
                            <h1 className="text-fashion_pink font-extrabold lg:text-6xl font-mareno text-2xl">HUB</h1>
                        </div>
                        </div>
                        <div className="content">
                            <h1 className="text-fashion_pink font-fira-code font-extrabold">Welcome to AnimeHub – Your Ultimate Anime Universe!</h1>
                            <p className="text-white font-bold text-[10px] lg:text-md">
                            Dive into the <span className='text-neon_purple'>largest curated collection</span> of anime, from timeless classics to the hottest seasonal releases—all in <span className='text-neon_purple'>HD 4K, ad-free,</span> with <span className='text-neon_purple'>multi-language subtitles & dubs</span> .
                            </p>
                        </div>
                        <div className="why w-full mt-4">
                            <ul className="w-full flex flex-col gap-1">
                            {details.map(detail =>(
                                    <li 
                                    key={detail.id}
                                    className="flex items-center justify-start gap-2">
                                        <FontAwesomeIcon icon={faCheck} className="text-white bg-fashion_pink/90 p-2 rounded-full text-[5px] lg:text-[10px]" />
                                        <span className="font-extrabold text-white text-[12px] lg:text-md">{detail.name}</span> - <span className='text-frost text-[10px] lg:text-sm'>{detail.content}</span>
                                    </li>
                                ))}
                                
                            </ul>
                        </div>
                        <div className="flex w-full items-center justify-start gap-2 mt-6">
                        <img src={flame} alt="" className='w-6 lg:w-8'/>
                            <h1 className="text-fashion_pink capitalize font-extrabold">For true Otaku</h1>
                        </div>
                        <div className="w-full">
                        <ul className="w-full flex flex-col gap-1 list-disc pl-6">
                                <li className='text-white font-bold font-fira-code text-sm'>Track your progress with <span className='text-neon_purple'>MyAnimeList integration</span></li>
                                <li className='text-white font-bold font-fira-code text-sm'>Earn <span className='text-neon_purple'>badges & rewards</span> for milestones</li>
                                <li className='text-white font-bold font-fira-code text-sm'>Join <span className='text-neon_purple'>fan forums</span> and theory discussions</li>
                            </ul>
                        </div>
                        <div className="footer w-full mt-4">
                            <p className="text-white italic">More than a platform—it’s your anime home. <span className='text-fashion_pink font-bold not-italic'>– Featured in Crunchyroll News</span></p>
                            <p className="text-white mt-4"><span className='text-fashion_pink font-bold'>Ready to explore?</span> Sign up in <span className='text-fashion_pink font-bold'>10 seconds?</span> and claim your <span className='text-fashion_pink font-bold'>7-day free trial!</span></p>
                        </div>
                    </div>
                    {/* signup form right side */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center gap-2 p-2 lg:px-12">
                        <div className="form-container w-full flex flex-col gap-2 lg:pl-20">
                            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2'>
                                <div className="inputbox w-full">
                                    <input
                                        type="text"
                                        name='username'
                                        value={formData.username}
                                        onChange={handlechange}
                                        placeholder="Your username"
                                        className="
                                            w-full p-3 border-2 border-frost bg-white/40 text-fashion_pink rounded-md
                                            placeholder:text-white
                                            focus:border-fashion_pink
                                            focus:outline-none
                                            focus:shadow-none
                                            focus:ring-0
                                            transition-all duration-500
                                        "/>
                                </div>
                                <div className="inputbox w-full">
                                    <input
                                        type="text"
                                        name='handlename'
                                        value={formData.handlename}
                                        onChange={handlechange}
                                        placeholder="Your @handlename"
                                        className="
                                            w-full p-3 border-2 border-frost bg-white/40 text-fashion_pink rounded-md
                                            placeholder:text-white
                                            focus:border-fashion_pink
                                            focus:outline-none
                                            focus:shadow-none
                                            focus:ring-0
                                            transition-all duration-500
                                        "/>
                                </div>
                                <div className="inputbox w-full">
                                    <input
                                        type="email"
                                        name='email'
                                        value={formData.email}
                                        onChange={handlechange}
                                        placeholder="Your email"
                                        className="
                                            w-full p-3 border-2 border-frost bg-white/40 text-fashion_pink rounded-md
                                            placeholder:text-white
                                            focus:border-fashion_pink
                                            focus:outline-none
                                            focus:shadow-none
                                            focus:ring-0
                                            transition-all duration-500
                                        "/>
                                </div>
                                <div className="inputbox w-full">
                                    <input
                                        type="password"
                                        name='password'
                                        value={formData.password}
                                        onChange={handlechange}
                                        placeholder="Create password"
                                        className="
                                            w-full p-3 border-2 border-frost bg-white/40 text-fashion_pink rounded-md
                                            placeholder:text-white
                                            focus:border-fashion_pink
                                            focus:outline-none
                                            focus:shadow-none
                                            focus:ring-0
                                            transition-all duration-500
                                        "/>
                                </div>
                                <div className="inputbox w-full">
                                    <input
                                        type="password"
                                        name='confirmPassword'
                                        value={formData.confirmPassword}
                                        onChange={handlechange}
                                        placeholder="Confirm password"
                                        className="
                                            w-full p-3 border-2 border-frost bg-white/40 text-fashion_pink rounded-md
                                            placeholder:text-white
                                            focus:border-fashion_pink
                                            focus:outline-none
                                            focus:shadow-none
                                            focus:ring-0
                                            transition-all duration-500
                                        "/>
                                </div>
                                <div className="inputbox w-full">
                                    <button className='bg-neon_purple w-full font-extrabold text-white rounded-md p-2 transition-all duration-300 hover:bg-fashion_pink  hover:shadow-lg'>Create account</button>
                                </div>
                                <div className="w-full mt-1 flex items-center justify-between   gap-2">
                                    <span className="w-1/2 h-[5px] bg-chrome rounded-full"></span>
                                    <span>OR</span>
                                    <span className="w-1/2 h-[5px] bg-chrome rounded-full"></span>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <button
                                        type="button"
                                        className="flex items-center justify-center gap-2 w-full p-2 rounded-md bg-white border border-frost text-dark900 font-bold shadow-sm hover:bg-frost hover:text-neon_purple transition-all duration-300"
                                    >
                                        <img src={google} alt="" className='w-6'/>
                                        Sign up with Google
                                    </button>
                                    <button
                                        type="button"
                                        className="flex items-center justify-center gap-2 w-full p-2 rounded-md bg-electric text-white font-bold shadow-sm hover:bg-blue-700 transition-all duration-300"
                                    >
                                        <img src={discord} alt="" className='w-6'/>
                                        Sign up with Discord
                                    </button>
                                </div>
                                <div className='w-full mt-1'>
                                    <p className ='text-[12px] text-center font-fira-code'>By continuing you agree to the <span> </span>
                                    <Link to={ROUTE_PATHS.login} className='text-neon_blue font-extrabold hover:text-candy hover:underline transition-all duration-300'>
                                        Privacy policy
                                    </Link>
                                     , 
                                    <Link to={ROUTE_PATHS.login} className='text-neon_blue font-extrabold hover:text-candy hover:underline transition-all duration-300'>
                                        Terms and condition
                                    </Link>
                                    <span> </span>
                                     of Anime Hub</p>
                                    <p className ='text-[14px] mt-2 text-center font-fira-code'>
                                        Already have an account?
                                         <Link to={ROUTE_PATHS.login} className='text-neon_blue font-extrabold hover:text-candy hover:underline transition-all duration-300'>Login
                                         </Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Authbackground />
        </>
    )
}
export default Signup;