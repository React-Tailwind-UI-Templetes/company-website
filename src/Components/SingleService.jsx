import React from "react";

const SingleService = ({ image, title, desc }) => {
  return (
    <div className="w-[100%] py-8 px-3 bg-gray-50 border-b-[9px] border-gray-300 hover:border-[#7d00a3cb]  rounded-lg shadow-lg flex items-center justify-center flex-col gap-4 hover:cursor-pointer hover:shadow-lg transition duration-300 ease-in-out hover:scale-105">
      <img src={image} alt="image" className="w-[80px] h-[80px]" />

      <h3 className="text-[21px] font-[600] text-[#000000da]">{title}</h3>
      <p className="text-justify text-[#00000094]">{desc}</p>
    </div>
  );
};

export default SingleService;
