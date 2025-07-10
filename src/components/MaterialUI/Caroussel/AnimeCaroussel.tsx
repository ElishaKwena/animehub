import React from 'react';
import { Carousel } from 'flowbite-react';
import { trendingAnime } from '../../../data/Anime';

const AnimeCaroussel: React.FC = () => {
  return (
    <div className="relative w-full h-[50vh] lg:h-[80vh]">
      <Carousel slide={true} indicators={true} className="lg:h-full">
        {trendingAnime.map((anime) => (
          <div key={anime.id} className="relative h-full w-full">
            {/* Background Image */}
            <img
              src={anime.image}
              alt={anime.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-overlay"></div>
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <span className="bg-pink-600 text-xs px-2 py-1 rounded-md">
                {anime.badge}
              </span>
              <h2 className="text-4xl font-bold mt-4 mb-6 drop-shadow-lg">
                {anime.title}
              </h2>
              <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg font-bold transition-all">
                {anime.cta}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AnimeCaroussel;