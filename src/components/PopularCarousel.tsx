import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { popularAnime } from '../data/Anime';
import Popular from './Popular';

const PopularCarousel: React.FC = () => (
  <div className="w-full max-w-[100%] mx-auto py-2 px-0">
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      slidesPerView={1}
            breakpoints={{
        // When window width is >= 640px (sm)
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        580: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // When window width is >= 768px (md)
        840: {
          slidesPerView: 3,
          spaceBetween: 16
        },
        990: {
          slidesPerView: 3,
          spaceBetween: 16
        },
        // When window width is >= 1024px (lg)
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // When window width is >= 1280px (xl)
        1280: {
          slidesPerView: 4,
          spaceBetween: 10
        }
      }}
      loop={true}
      className="rounded-lg h-80"
    >
      {popularAnime.map(anime => (
        <SwiperSlide key={anime.id}>
          <div className="h-full flex items-center justify-center ">
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