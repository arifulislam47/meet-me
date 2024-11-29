import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SliderStyle.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ReviewCard from "./ReviewCard";

let Slider = () => {
  return (
    <div className=" relative">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        pagination= {false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=" text-black">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className=" text-black">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className=" text-black">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className=" text-black">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className=" text-black">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className=" text-black">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className=" text-black">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className=" text-black">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className=" text-black">
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide className=" text-black">
          <ReviewCard />
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};
export default Slider;
