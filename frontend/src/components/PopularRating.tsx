import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

interface PopularRatingProps{
    score:number;
}

const PopularRating:React.FC<PopularRatingProps> = ({score}) => {
    const normalizedScore = Math.min(score, 10)/2;// converting to 0-5 scale
    const fullStars = Math.floor(normalizedScore);
    const hasHalfStar = normalizedScore % 1 >= 0.5;

    return (
        <>
            {[...Array(5)].map((_, index) => {
                if (index < fullStars) {
                    return <FontAwesomeIcon key={index} icon={faStar} className="text-sunflower text-sm font-bold" />;
                }
                if (index === fullStars && hasHalfStar) {
                    return <FontAwesomeIcon key={index} icon={faStarHalfAlt} className="text-sunflower text-sm font-bold" />;
                }
                return <FontAwesomeIcon key={index} icon={faStar} className="text-frost text-sm font-bold " />;
            })}
        </>
    )
}

export default PopularRating;