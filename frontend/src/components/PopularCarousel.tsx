import React from 'react';
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';

import { popularAnime } from '../data/Anime';
import Popular from './Popular';

interface PopularCarouselProps {
  padding?: string;
  height?: string;
}

const PopularCarousel: React.FC<PopularCarouselProps> = ({ padding = "py-2", height = "h-80" }) => (
  <div className={`w-full max-w-[100%] mx-auto ${padding} px-0 overflow-hidden`}>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
      navigation
      spaceBetween={16}
      slidesPerView="auto"
      freeMode={{
        enabled: true,
        momentum: true,
        momentumRatio: 0.8,
        momentumVelocityRatio: 0.8,
        momentumBounce: true,
        momentumBounceRatio: 0.8,
        minimumVelocity: 0.02,
        sticky: false
      }}
      grabCursor={false}
      touchRatio={1}
      touchAngle={45}
      resistance={false}
      breakpoints={{
        // Mobile devices
        320: {
          slidesPerView: 1,
          spaceBetween: 12
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 16
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 16
        },
        // Tablet devices
        768: {
          slidesPerView: 3.2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4.2,
          spaceBetween: 24
        },
        // Desktop devices
        1280: {
          slidesPerView: 5.2,
          spaceBetween: 24
        },
        1536: {
          slidesPerView: 6.2,
          spaceBetween: 24
        }
      }}
      loop={true}
      className={`rounded-lg ${height}`}
    >
      {popularAnime.map(anime => (
        <SwiperSlide key={anime.id} className="!w-auto">
          <div className="h-full flex items-center justify-center">
            <Popular
              title={anime.title}
              category={anime.category}
              score={anime.score}
              status={anime.status}
              tagicon={anime.tag.icon}
              tagtext={anime.tag.text}
              banner={anime.banner}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default PopularCarousel; 