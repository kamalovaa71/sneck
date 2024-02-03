import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css"   
// import required modules
import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <div className="slider_container">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><div className="slide"></div></SwiperSlide>
          <SwiperSlide><div className="slide"></div></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
