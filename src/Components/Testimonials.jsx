import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, History } from "swiper/modules";

// image
import qouteImage from "../assets/qoute.png";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import avatar5 from "../assets/avatar5.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="w-full my-40" id="testimonial">
        <div className="w-full max-w-[1200px] mx-auto px-8 ">
          <div className="mb-16 grid place-items-center">
            <div>
              <h3 className="text-[30px] font-[700]">Client Testimonials</h3>
              <div className="w-[60px] h-[4px] bg-gradient-to-r from-[#7d00a3] to-[#e900e9]"></div>
            </div>
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={true}
            history={{
              key: "slide",
            }}
            modules={[Navigation, Pagination, History]}
            className="mySwiper cursor-all-scroll">
            <SwiperSlide
              data-history="1"
              className="flex items-center justify-center p-4">
              <div className="w-[50%] p-4 bg-blue-100 rounded relative ">
                <img
                  src={qouteImage}
                  alt="qoute/image"
                  className="absolute top-[-5%] left-[10px] w-[35px]  z-50"
                />

                <div className="flex items-center flex-col justify-start p-2">
                  <div className="w-[100px] h-[100px] rounded-full border-[3px] border-blue-500">
                    <img
                      src={avatar1}
                      alt="avatar1/image"
                      className="w-full h-full bg-contain rounded-full "
                    />
                  </div>
                  <h1 className="text-2xl text-[#000] font-[600] my-3">
                    Lina Devil
                  </h1>
                  <p className="text-[16px] text-[#000000ad] text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere obcaecati quas iste magnam porro minus, minima
                    repellat maxime magni ipsa similique voluptate consequatur
                    consequuntur earum nisi maiores est voluptas placeat.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              data-history="1"
              className="flex items-center justify-center p-4">
              <div className="w-[50%] p-4 bg-blue-100 rounded relative ">
                <img
                  src={qouteImage}
                  alt="qoute/image"
                  className="absolute top-[-5%] left-[10px] w-[35px]  z-50"
                />

                <div className="flex items-center flex-col justify-start p-2">
                  <div className="w-[100px] h-[100px] rounded-full border-[3px] border-blue-500">
                    <img
                      src={avatar2}
                      alt="avatar1/image"
                      className="w-full h-full bg-contain rounded-full "
                    />
                  </div>
                  <h1 className="text-2xl text-[#000] font-[600] my-3">
                    Kevin Pawell
                  </h1>
                  <p className="text-[16px] text-[#000000ad] text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere obcaecati quas iste magnam porro minus, minima
                    repellat maxime magni ipsa similique voluptate consequatur
                    consequuntur earum nisi maiores est voluptas placeat.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              data-history="1"
              className="flex items-center justify-center p-4">
              <div className="w-[50%] p-4 bg-blue-100 rounded relative ">
                <img
                  src={qouteImage}
                  alt="qoute/image"
                  className="absolute top-[-5%] left-[10px] w-[35px]  z-50"
                />

                <div className="flex items-center flex-col justify-start p-2">
                  <div className="w-[100px] h-[100px] rounded-full border-[3px] border-blue-500">
                    <img
                      src={avatar3}
                      alt="avatar1/image"
                      className="w-full h-full bg-contain rounded-full "
                    />
                  </div>
                  <h1 className="text-2xl text-[#000] font-[600] my-3">
                    Alamin Khan
                  </h1>
                  <p className="text-[16px] text-[#000000ad] text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere obcaecati quas iste magnam porro minus, minima
                    repellat maxime magni ipsa similique voluptate consequatur
                    consequuntur earum nisi maiores est voluptas placeat.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              data-history="1"
              className="flex items-center justify-center p-4">
              <div className="w-[50%] p-4 bg-blue-100 rounded relative ">
                <img
                  src={qouteImage}
                  alt="qoute/image"
                  className="absolute top-[-5%] left-[10px] w-[35px]  z-50"
                />

                <div className="flex items-center flex-col justify-start p-2">
                  <div className="w-[100px] h-[100px] rounded-full border-[3px] border-blue-500">
                    <img
                      src={avatar4}
                      alt="avatar1/image"
                      className="w-full h-full bg-contain rounded-full "
                    />
                  </div>
                  <h1 className="text-2xl text-[#000] font-[600] my-3">
                    Rahi Ahmed
                  </h1>
                  <p className="text-[16px] text-[#000000ad] text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere obcaecati quas iste magnam porro minus, minima
                    repellat maxime magni ipsa similique voluptate consequatur
                    consequuntur earum nisi maiores est voluptas placeat.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              data-history="1"
              className="flex items-center justify-center p-4">
              <div className="w-[50%] p-4 bg-blue-100 rounded relative ">
                <img
                  src={qouteImage}
                  alt="qoute/image"
                  className="absolute top-[-5%] left-[10px] w-[35px]  z-50"
                />

                <div className="flex items-center flex-col justify-start p-2">
                  <div className="w-[100px] h-[100px] rounded-full border-[3px] border-blue-500">
                    <img
                      src={avatar5}
                      alt="avatar1/image"
                      className="w-full h-full bg-contain rounded-full "
                    />
                  </div>
                  <h1 className="text-2xl text-[#000] font-[600] my-3">
                    Deo Will
                  </h1>
                  <p className="text-[16px] text-[#000000ad] text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere obcaecati quas iste magnam porro minus, minima
                    repellat maxime magni ipsa similique voluptate consequatur
                    consequuntur earum nisi maiores est voluptas placeat.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
