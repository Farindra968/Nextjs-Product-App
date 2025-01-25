"use client"
import React from "react";
import slider2 from '@/assets/images/slider2.png';
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

function HeroSlider() {
  return (
    <section>
      <div className="w-full max-w-7xl mx-auto">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper"
      >
          <SwiperSlide>
          <Image src={slider2} alt={slider2} className='rounded-xl' />
          </SwiperSlide>
          <SwiperSlide>
          <Image src={slider2} alt={slider2} className='rounded-xl' />
          </SwiperSlide>
          <SwiperSlide>
          <Image src={slider2} alt={slider2} className='rounded-xl' />
          </SwiperSlide>
      </Swiper>
    </div>
    </section>
  )
}

export default HeroSlider
