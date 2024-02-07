import React from "react";

import heroImage from "../assets/heroSection.png";
import secondImage from "../assets/secondHeroImage.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination, History, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, History]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      navigation={true}
      pagination={true}
      history={{
        key: "slide",
      }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className=" cursor-move">
      <SwiperSlide>
        <div className="w-full h-[700px] bg-gradient-to-r from-[#7d00a3] to-[#e900e9]">
          <div className="flex items-center justify-between max-w-[1200px] mx-auto w-full h-full px-8">
            <div className="w-[50%]">
              <h5 className="text-white text-[20px]">
                Hello! Welcome to our company
              </h5>
              <h1 className="text-[50px] my-5 text-white font-[700] uppercase">
                Create your website <br />
                from our company
              </h1>
              <p className="text-white text-[20px]">
                One of the pioneer ITES provider company.
              </p>

              <button className="py-3 px-5 border border-white rounded text-sm text-white bg-transparent outline-none hover:bg-white hover:text-black transition duration-300 mt-8">
                Create Website
              </button>
            </div>

            <div className="w-[44%]">
              <img
                src={heroImage}
                alt="hero/image"
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[700px] bg-gradient-to-r from-[#00319b] to-[#3373fd]">
          <div className="flex items-center justify-between max-w-[1200px] mx-auto w-full h-full px-8">
            <div className="w-[50%]">
              <h5 className="text-white text-[20px]">
                Best Deals for e-commerce website
              </h5>
              <h1 className="text-[50px] my-5 text-white font-[700] uppercase">
                Create your First
                <br />
                E-Commerce Website
              </h1>
              <p className="text-white text-[20px]">
                One of the best e-commerce website provider company.
              </p>

              <button className="py-3 px-5 border border-white rounded text-sm text-white bg-transparent outline-none hover:bg-white hover:text-black transition duration-300 mt-8">
                Create Website
              </button>
            </div>

            <div className="w-[50%] ">
              <img
                src={secondImage}
                alt="hero/image"
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
