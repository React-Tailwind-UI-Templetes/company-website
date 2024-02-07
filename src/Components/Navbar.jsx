import React from "react";

import logo from "../assets/webLogo.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[80px] bg-gray-100 py-4 px-8  shadow-md sticky top-0 left-0 z-50">
        <div className="w-full h-full flex items-center justify-between  max-w-[1200px] mx-auto">
          <div className="w-[19%]">
            <img
              src={logo}
              alt="company/logo"
              className="w-full h-full bg-cover"
            />
          </div>

          <ul className="flex text-[17px] items-center gap-8 cursor-pointer ">
            <li className="hover:text-[#7d00a3] transition duration-300 ease-in-out">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-[#7d00a3] transition duration-300 ease-in-out">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-[#7d00a3] transition duration-300 ease-in-out">
              <a href="#service">Services</a>
            </li>
            <li className="hover:text-[#7d00a3] transition duration-300 ease-in-out">
              <a href="#testimonial">Testimonial</a>
            </li>
            <li className="hover:text-[#7d00a3] transition duration-300 ease-in-out">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
