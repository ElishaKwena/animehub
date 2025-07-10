import React from 'react';
import { Carousel } from 'flowbite-react';
import { animemc } from '../data/Animemc';

const AnimeSlide: React.FC = () => {
    const customTheme = {
    root: {
      leftControl: 'hidden', // Hides left (previous) button
      rightControl: 'hidden' // Hides right (next) button
    }
  };


  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
      <Carousel 
      slideInterval={5000} 
      theme={customTheme}
      indicators={false}>
        {animemc.map((slide) => (
          <img 
            key={slide.id}
            src={slide.pic}
            alt="{slide.alt}"
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.src = '/fallback-anime.jpg';
              e.currentTarget.alt = 'Fallback anime image';
            }}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default AnimeSlide;