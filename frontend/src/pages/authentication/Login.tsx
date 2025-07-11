import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ROUTE_PATHS from '../../routes/paths';
import Authbackground from '../../components/MaterialUI/Background/Authbackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import flame from '../../assets/icons/flame.png'
import google from '../../assets/icons/google.png'
import discord from '../../assets/icons/discord.png'

// Usage in JSX:
<FontAwesomeIcon icon={faCheck} />

const details =[
    {
        id:1,
        "name":"Resume watching",
        "content":"Pick up where you left off",
    },
    {
        id:2,
        "name":"Access your lists",
        "content":"Custom watchlists and favorites",
    },
    {
        id:3,
        "name":"Join live watch parties",
        "content":"Sync with friends in real time",
    },
    {
        id:4,
        "name":"Earn Rewards",
        "content":"Track your progress toward next-level otaku status",
    }
]

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    return(
        <>
            <div className="signup-div  w-full max-h-screen lg:h-screen absolute grid place-items-center z-50 rounded-xl">
            <div className=" overflow-auto lg:overflow-visible formdiv w-[98%] mx-auto lg:w-[70%] h-screen lg:h-[80vh] rounded-xl flex flex-col lg:flex-row items-center justify-between lg:backdrop-blur- lg:bg-white/20 lg:border lg:border-white/40 lg:shadow-2xl" >
                    {/* signup form left side */}
                    <div className="left w-full lg:w-1/2 h-full flex flex-col items-center justify-center lg:p-4 p-2">
                        <div className="logo">
                        <div className="flex items-baseline justify-start ">
                            <h1 className="text-white font-fira-code font-extrabold text-2xl mr-2">Welcome Back to </h1>
                            <h1 className='text-neon_purple font-bold lg:text-2xl font-privus text-lg'>ANIME</h1>
                            <h1 className="text-fashion_pink font-extrabold lg:text-4xl font-mareno text-2xl">HUB</h1>
                        </div>
                        </div>
                        <div className="content">
                            <h1 className="text-fashion_pink font-fira-code font-extrabold">Your Anime Universe Awaits</h1>
                            <p className="text-white font-bold">
                            Glad you're back! Dive straight into your personalized anime haven: .
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
                        <div className="flex w-full items-center justify-start gap-2 mt-3 lg:mt-6 mb-4">
                            <img src={flame} alt="" className='w-6 lg:w-8'/>
                            <h1 className="text-fashion_pink capitalize font-extrabold">Exclusive for Members</h1>
                        </div>
                        <div className="w-full">
                        <ul className="w-full flex flex-col gap-1 list-disc pl-6">
                                <li className='text-white font-fira-code text-[12px] lg:text-sm font-bold'>Vote in weekly <span className='text-neon_purple'>"Anime of the week"</span> polls.</li>
                                <li className='text-white font-fira-code text-sm font-bold'>Unlock <span className='text-neon_purple'>hidden Easter eggs</span> (we've buried some anime memes!). </li>
                                <li className='text-white font-fira-code text-sm font-bold'>Get early access to <span className='text-neon_purple'>dub releases</span> </li>
                            </ul>
                        </div>
                        <div className="footer w-full mt-4">
                            <p className="text-white italic">The fastest HD streams I’ve ever binged! <span className='text-fashion_pink font-bold not-italic'>– @RoronoaZoroFan (Community Leader)</span></p>
                           
                        </div>
                    </div>
                    {/* login form right side */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center gap-2 p-2 lg:px-12">
                    <div className="form-container w-full flex flex-col gap-2 lg:pl-20">
                            <form action="" className='w-full flex flex-col gap-2'>
                                <div className="inputbox w-full">
                                    <input
                                        type="email"
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
                                <div className="inputbox w-full relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Create password"
                                        className="w-full p-3 border-2 border-frost bg-white/40 text-fashion_pink rounded-md placeholder:text-white focus:border-fashion_pink focus:outline-none focus:shadow-none focus:ring-0 transition-all duration-500"
                                    />
                                    <span
                                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </span>
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
                                        Continue in with Google
                                    </button>
                                    <button
                                        type="button"
                                        className="flex items-center justify-center gap-2 w-full p-2 rounded-md bg-electric text-white font-bold shadow-sm hover:bg-blue-700 transition-all duration-300"
                                    >
                                        <img src={discord} alt="" className='w-6'/>
                                        Continue in with Discord
                                    </button>
                                </div>
                                <div className='w-full mt-1'>
                                    <p className ='text-[14px] mt-2 text-center font-fira-code'>
                                        Dont have an Account?
                                         <Link to={ROUTE_PATHS.signup} className='text-neon_blue font-extrabold hover:text-candy hover:underline transition-all duration-300'>SignUp
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
export default Login;