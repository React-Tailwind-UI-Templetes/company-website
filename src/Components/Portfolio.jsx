import React, { useState } from "react";

// images

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import ProjectDetails from "../Components/ProjectDetails";

const Portfolio = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="w-full mx-auto my-40">
        <div className="w-full max-w-[1200px] mx-auto px-8">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper w-[1200px] h-[600px]">
            <SwiperSlide className=" flex items-center justify-center">
              <div className=" w-[70%] mx-auto h-[400px] group relative cursor-pointer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSQPTsDQpviC5-BDAzRU58oOJpqsoVp3VTjQlxdPJuNL9ZLwnH9UMFvQZ6qPbGpUl-Go&usqp=CAU"
                  alt=""
                  className="w-full h-full bg-cover"
                />

                <div className="w-full h-full absolute top-0 left-0 bg-blue-100 hidden group-hover:flex transition duration-300 ease-in-out  items-center justify-center gap-5 flex-wrap scale-0 group-hover:scale-100">
                  <button className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-2 px-3 rounded cursor-pointer font-[700] text-[20px] uppercase tracking-wide">
                    Live Link
                  </button>
                  <button
                    className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-2 px-3 rounded cursor-pointer font-[700] text-[20px] uppercase tracking-wide"
                    onClick={() => setClick(true)}>
                    Project Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" flex items-center justify-center">
              <div className="w-[70%] mx-auto h-[400px] group relative cursor-pointer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkWAVoA2O2r16KydkS04Sxlp8jlBR3LMOcHclzDwj-RrTtmzkCN3Yg-P2YuIrAGd6pf8&usqp=CAU"
                  alt=""
                  className="w-full h-full bg-cover"
                />

                <div className="w-full h-full absolute top-0 left-0 bg-blue-100 hidden group-hover:flex transition duration-300 ease-in-out  items-center justify-center gap-5 flex-wrap scale-0 group-hover:scale-100">
                  <button className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-2 px-3 rounded cursor-pointer font-[700] text-[20px] uppercase tracking-wide">
                    Live Link
                  </button>
                  <button
                    className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-2 px-3 rounded cursor-pointer font-[700] text-[20px] uppercase tracking-wide"
                    onClick={() => setClick(true)}>
                    Project Details
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=" flex items-center justify-center">
              <div className=" w-[70%] mx-auto h-[400px] group relative cursor-pointer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-z5IFdbgjFDmQmc_8gkosbgG2-JKlqu5xgw&usqp=CAU"
                  alt=""
                  className="w-full h-full bg-cover"
                />

                <div className="w-full h-full absolute top-0 left-0 bg-blue-100 hidden group-hover:flex transition duration-300 ease-in-out  items-center justify-center gap-5 flex-wrap scale-0 group-hover:scale-100">
                  <button className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-2 px-3 rounded cursor-pointer font-[700] text-[20px] uppercase tracking-wide">
                    Live Link
                  </button>
                  <button
                    className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-2 px-3 rounded cursor-pointer font-[700] text-[20px] uppercase tracking-wide"
                    onClick={() => setClick(true)}>
                    Project Details
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=" flex items-center justify-center">
              <div className=" w-[70%] mx-auto h-[400px] group relative cursor-pointer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkz8w5axRyVV9yfI49GphqF7zfcY7AgTuyxAnpSRwCf7_NX2BvYxdLZfwFdb1Cmuj08w&usqp=CAU"
                  alt=""
                  className="w-full h-full bg-cover"
                />

                <div className="w-full h-full absolute top-0 left-0 bg-blue-100 hidden group-hover:flex transition duration-300 ease-in-out  items-center justify-center gap-5 flex-wrap scale-0 group-hover:scale-100">
                  <button className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-2 px-3 rounded cursor-pointer font-[700] text-[20px] uppercase tracking-wide">
                    Live Link
                  </button>
                  <button
                    className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-2 px-3 rounded cursor-pointer font-[700] text-[20px] uppercase tracking-wide"
                    onClick={() => setClick(true)}>
                    Project Details
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=" flex items-center justify-center">
              <div className=" w-[70%] mx-auto h-[400px] group relative cursor-pointer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMtkuxBSZ7x2JCzmJ7qe9GYEze5FDypQFyS0r1xFEVoSBlUxHOGqOySir5H49NYnac2s&usqp=CAU"
                  alt=""
                  className="w-full h-full bg-cover"
                />

                <div className="w-full h-full absolute top-0 left-0 bg-blue-100 hidden group-hover:flex transition duration-300 ease-in-out  items-center justify-center gap-5 flex-wrap scale-0 group-hover:scale-100">
                  <button className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-2 px-3 rounded cursor-pointer font-[700] text-[20px] uppercase tracking-wide">
                    Live Link
                  </button>
                  <button
                    className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-2 px-3 rounded cursor-pointer font-[700] text-[20px] uppercase tracking-wide"
                    onClick={() => setClick(true)}>
                    Project Details
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=" flex items-center justify-center">
              <div className=" w-[70%] mx-auto h-[400px] group relative cursor-pointer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSWDP2A-p4E8tXpoi-0Hfse2JW-zRlJFrlPGOOwG_L6zydeGAkUhAmXxVkQo3elwwjfww&usqp=CAU"
                  alt=""
                  className="w-full h-full bg-cover"
                />

                <div className="w-full h-full absolute top-0 left-0 bg-blue-100 hidden group-hover:flex transition duration-300 ease-in-out  items-center justify-center gap-5 flex-wrap scale-0 group-hover:scale-100">
                  <button className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-2 px-3 rounded cursor-pointer font-[700] text-[20px] uppercase tracking-wide">
                    Live Link
                  </button>
                  <button
                    className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-2 px-3 rounded cursor-pointer font-[700] text-[20px] uppercase tracking-wide"
                    onClick={() => setClick(true)}>
                    Project Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {click && <ProjectDetails setClick={setClick} />}
    </>
  );
};

export default Portfolio;
