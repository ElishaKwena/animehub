import React from 'react'
import { Link } from 'react-router-dom'
import ROUTE_PATHS from '../../../routes/paths'

const CallToAction: React.FC = () => {
    return (
        <Link to={ROUTE_PATHS.signup} className="floating-shadow lg:text-xl bg-neon_purple text-white font-bold rounded-md p-3 font-anurati">
            Dive into Isekai
        </Link>
    );
};
export default CallToAction;