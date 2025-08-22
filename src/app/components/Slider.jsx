"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

export default function Slider() {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[ Autoplay]}
      className="mySwiper rounded-2xl h-[60vh]"
    >
      {/* Slide 1 */}
      <SwiperSlide className="relative">
        <Image
          src="/banner/banner-1.jpg"
          alt="Banner 1"
          width={1280}
          height={1500}
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
            Elegant Clock
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl">
            Discover timeless designs crafted for your style.
          </p>
          <button className="mt-6 button">
            Shop Now
          </button>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide className="relative">
        <Image
          src="/banner/banner-2.jpg"
          alt="Banner 2"
          width={1280}
          height={1500}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
            Modern Designs
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl">
            Upgrade your space with premium wall clocks.
          </p>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide className="relative">
        <Image
          src="/banner/banner-3.jpg"
          alt="Banner 3"
          width={1200}
          height={1500}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
            Timeless Beauty
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl">
            Classic and modern designs for every home.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
