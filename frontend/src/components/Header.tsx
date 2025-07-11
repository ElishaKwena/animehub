import React from 'react'
import { Link } from 'react-router-dom'
import ROUTE_PATHS from '../routes/paths'

import CallToAction from './MaterialUI/Buttons/CallToAction';


const Header: React.FC = () =>{
    return(
        <>
            <div className="glass-container flex items-center w-[97%] justify-between top-1 lg:fixed lg:top-4 left-1/2 -translate-x-1/2 lg:w-[98%] mx-auto p-3 rounded-xl z-50 fixed ">
                <div className="logo">
                    <Link to={ROUTE_PATHS.landingPage} className="flex items-baseline justify-between ">
                        <h1 className='text-neon_purple font-bold lg:text-xl font-privus text-lg'>ANIME</h1>
                        <h1 className="text-fashion_pink font-extrabold lg:text-4xl font-mareno text-2xl">HUB</h1>
                    </Link>
                </div>
                <div className="cta flex items-center justify-end gap-1">
                    <CallToAction/>
                </div>
            </div>
        </>
    )
}
export default Header;