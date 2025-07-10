import React from 'react'
import Header from '../components/Header'
import AnimeCaroussel from '../components/MaterialUI/Caroussel/AnimeCaroussel'
import FeatureCardDeck from '../components/FeatureCardDeck'
import PopularCarousel from '../components/PopularCarousel'
import ThemeToggleButton from '../components/ThemeToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLifeRing } from '@fortawesome/free-solid-svg-icons';

import Pricing from '../components/Pricing'
import Testimony from '../components/Testimony'
import AnimeSlide from '../components/Animeslide'
import Callaction from '../components/Callction'
import Competitors from '../components/Competitors'
import Footer from '../components/Footer'

const LandingPage: React.FC = () =>{
    return(
        <>
            <main className="relative w-full min-h-screen dark:bg-black">
                <div className="pt-2 fixed left-0 top-1/2 -translate-y-1/2 w-[60px] h-[300px] bg-neon_purple rounded-r-md z-50 hidden md:flex flex-col items-center justify-between py-4">
                    <ThemeToggleButton />
                    <div className="flex flex-col gap-6 items-center">
                        <div className="relative group flex items-center">
                            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faDiscord} size="2xl" className="text-white hover:text-[#7289da] transition" />
                            </a>
                            <span className="absolute left-full ml-3 px-2 py-1 rounded bg-fashion_pink text-white text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                                Discord
                            </span>
                        </div>
                        <div className="relative group flex items-center">
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="2xl" className="text-white hover:text-[#1da1f2] transition" />
                            </a>
                            <span className="absolute left-full ml-4 px-2 py-1 rounded bg-fashion_pink text-white text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                                Twitter/X
                            </span>
                        </div>
                        <div className="relative group flex items-center">
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2xl" className="text-white hover:text-[#e1306c] transition" />
                            </a>
                            <span className="absolute left-full ml-5 px-3 py-1 rounded bg-fashion_pink text-white text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                                Instagram
                            </span>
                        </div>
                        <div className="relative group flex items-center">
                            <a href="/support" title="Support">
                                <FontAwesomeIcon icon={faLifeRing} size="2xl" className="text-white hover:text-yellow-300 transition" />
                            </a>
                            <span className="absolute left-full ml-4 px-2 py-1 rounded bg-fashion_pink text-white text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                                Support
                            </span>
                        </div>
                    </div>
                </div>
                <div className="contents-container w-full lg:w-[98%] mx-auto flex flex-col gap-3 p-2">
                    <Header/>
                    <section className="hero w-full  mx-auto relative lg:pt-[100px] pt-[90px] lg:w-[80%] lg:min-h-[100vh">
                        <AnimeCaroussel/>
                    </section>
                    <section className="flex items-center flex-col gap-2 w-full lg:w-[80%] mx-auto mt-10 lg:min-h-[100vh]">
                        <div className="w-full flex flex-col gap-2 items-center justify-center">
                            <div className="top w-full flex items-baseline justify-center">
                                <h1 className='text-neon_purple font-bold lg:text-4xl font-privus text-md'>ANIME</h1>
                                <h1 className="text-fashion_pink font-extrabold lg:text-6xl font-mareno text-3xl">HUB</h1>
                            </div>
                            <div className="w-full">
                                <p className="text-smokey_black tex-md text-center text-sm lg:text-4xl font-fira-code dark:text-white">Your Ultimate Anime FanBase, Build by fans for Fans</p>
                            </div>
                            <div className="texts w-full">
                                <p className="text-black dark:text-nickel font-fira-code text-sm lg:text-lg text-left sm:text-center text-balance px-4 sm:px-0  mx-auto ">Let’s keep it simple—you just want great anime without the hassle. No ads interrupting your vibe, no pixelated streams killing the mood, and definitely no hunting through a dozen sites to find what you want. We’ve got everything from timeless classics to the newest hits, all in one place, looking sharp and playing smooth. Watch at home or download for later—your anime, your pace. No stress, no nonsense. Just hit play and relax.</p>
                            </div>
                            <div className="feature-cards w-full">  
                            <FeatureCardDeck/>
                            </div>
                            <div className="w-full pt-2 mt-10">
                                <p className="text-smokey_black font-fira-code font-bold text-center text-sm lg:text-lg dark:text-white">
                                    We are a team of anime lovers who are passionate about sharing our love for anime with the world.
                                </p>
                                <p className='text-smokey_black dark:text-white text-center mt-5 lg:text-2xl font-extrabold'>We handle the <span className='text-neon_blue text-3xl lg:text-4xl'>Tech</span> you handle the <span className='text-fashion_pink text-3xl lg:text-4xl'>Emotions</span></p>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-3 w-full lg:w-[95%] mx-auto lg:mt-10 lg:min-h-[100vh]">
                        <div className="top flex flex-col gap-0">
                            <h1 className='text-neon_purple font-bold text-2xl text-center lg:text-4xl font-fira-code'>FANS FAVORITE BINGE</h1>
                            <p className='text-smokey_black dark:text-white text-sm lg:text-lg font-fira-code'>Updated hourly • No spoilers, we promise</p>
                        </div>
                        <div className="w-full">
                            <PopularCarousel/>
                        </div>
                    </section>
                    <section className="pricing w-full md:w-full lg:w-[80%] mx-auto flex flex-col mt-10 gap-3 lg:min-h-[100vh]">
                        <div className="top w-full">
                            <h1 className="text-bold text-neon_purple text-2xl lg:text-3xl text-center font-fira-code font-extrabold capitalize">Your Anime your way</h1>
                            <p className="text-lg lg:text-2xl text-fashion_pink text-center">Get unlimited access or start free with ads</p>
                            <p className="font-lobster text-2xl text-center text-chrome">Datebayo!</p>
                        </div>
                        <div className="pricing-div w-full flex flex-col gap-2">
                            <Pricing/>
                        </div>
                    </section>
                    <section className="testimonies w-full lg:w-[90%] mx-auto mt-10 font-fira-code font-extrabold lg:min-h-[100vh] md:mt-28">
                        <div className="w-full flex flex-col">
                            <div className="top w-full">
                            <h1 className="text-xl lg:text-3xl text-neon_purple text-center mb-5">Trusted by 1M+ Weebs Worldwide</h1>
                            <p className="text-chrome text-md text-sm lg:text-lg text-center">Why settle for less? Join the ultimate anime streaming experience</p>
                            <p className="text-fashion_pink text-sm lg:text-md text-center">1,200,000+ Users", "4.9/5 Stars", "Simulcasts 1hr After Japan</p>
                        </div>
                        <Testimony/>
                        </div>
                    </section>
                    <section className="mt-24 w-[90%] mx-auto flex-col flex gap-2 lg:min-h-[100vh">
                        <Competitors/>
                        <div className="w-full lg:flex-row flex-col flex items-center justify-between gap-2 lg:mt-[200px]">
                            <div className="anime-slide w-full lg:w-1/3">
                            <AnimeSlide/>
                            </div>
                            <div className=" w-full lg:w-2/3">
                            <Callaction/>
                            </div>
                        </div>
                    </section>
                   
                </div>
                 <Footer/>
            </main>
        
        </>
    )
}
export default LandingPage;