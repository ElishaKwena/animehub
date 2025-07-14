import React from "react";
import MostPopularCard from "../ContentsComponents/MostPopularCard";
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';

import { popular } from "../../data/Trendy";

interface MostPopularProps {
  data?: typeof popular;
}

const Genres:React.FC<MostPopularProps>=({ data = popular })=>{
    return(
        <>
        {/* caroussel  */}
        <div className="w-full max-w-[100%] mx-auto py-2 px-0 overflow-hidden">
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
              768: {
                slidesPerView: 3.2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 4.2,
                spaceBetween: 24
              },
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
            className="rounded-lg h-[340px]"
          >
            {data.map((anime) => (
              <SwiperSlide key={anime.id} className="!w-auto">
                <div className="h-full flex items-center justify-center">
                  <MostPopularCard
                    key = {anime.id}
                    name={anime.name}
                    banner={anime.banner}
                    rating={anime.rating}
                    description={anime.description}
                    sub = {anime.sub}
                    dub = {anime.dub}
                    views = {anime.views}
                    seasons = {anime.seasons}
                    episodes = {anime.episodes}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </>
    )
}
export default Genres;