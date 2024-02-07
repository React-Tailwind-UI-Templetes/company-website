import React from "react";

// icons
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

// images
import logo from "../assets/s.png";

const Footer = () => {
  return (
    <>
      <div className="w-full mx-auto bg-[#140b5c]">
        <div className="w-full max-w-[1200px] mx-auto px-8 py-10">
          <div className="flex items-center justify-between">
            <div className="w-[40%]">
              <div className="flex items-center gap-1">
                <img src={logo} alt="logo/image" className="w-[80px]" />
                <h2 className=" text-white font-[600] text-[30px]">
                  Amaito Soft
                </h2>
              </div>

              <p className="text-white mt-6 my-4 ml-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur nulla dolore minus distinctio maiores. Dolores,
                debitis consectetur? In dolorum voluptate, laboriosam quas ill.
              </p>
              <div className="flex items-center justify-between cursor-pointer gap-6 ml-2 w-[50%]">
                <BsFacebook
                  size={28}
                  className="hover:text-[#7d00a3] text-white transition duration-300 ease-in-out"
                />
                <AiFillInstagram
                  size={28}
                  className="hover:text-[#7d00a3] text-white transition duration-300 ease-in-out"
                />
                <AiFillGithub
                  size={28}
                  className="hover:text-[#7d00a3] text-white transition duration-300 ease-in-out"
                />
                <AiFillTwitterCircle
                  size={28}
                  className="hover:text-[#7d00a3] text-white transition duration-300 ease-in-out"
                />
                <AiFillLinkedin
                  size={28}
                  className="hover:text-[#7d00a3] text-white transition duration-300 ease-in-out"
                />
              </div>
            </div>

            <div className="w-[30%] flex items-center justify-between">
              <div className="text-white">
                <h2 className="font-[700] text-[23px] tracking-wide">
                  Company
                </h2>
                <ul className="flex mt-4 flex-col gap-2">
                  <li className="hover:text-[#7d00a3] transition duration-300 ease-in-out">
                    <a href="/">Home</a>
                  </li>
                  <li className="hover:text-[#7d00a3] transition duration-300 ease-in-out">
                    <a href="/about">About Us</a>
                  </li>
                  <li className="hover:text-[#7d00a3] transition duration-300 ease-in-out">
                    <a href="/contact">Contact</a>
                  </li>
                  <li className="hover:text-[#7d00a3] transition duration-300 ease-in-out">
                    <a href="/">Get Started</a>
                  </li>
                </ul>
              </div>

              <div className="text-white">
                <h2 className="font-[700] text-[23px] tracking-wide">
                  Services
                </h2>
                <ul className="flex mt-4 flex-col gap-2">
                  <li className="hover:text-[#7d00a3] transition duration-300 ease-in-out">
                    <a href="/">Web Development</a>
                  </li>
                  <li className="hover:text-[#7d00a3] transition duration-300 ease-in-out">
                    <a href="/about">App Development</a>
                  </li>
                  <li className="hover:text-[#7d00a3] transition duration-300 ease-in-out">
                    <a href="/contact">UX | UI Design</a>
                  </li>
                  <li className="hover:text-[#7d00a3] transition duration-300 ease-in-out">
                    <a href="/">SEO Optimization</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0f0844] p-6 ">
          <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-8 text-white">
            <p>copyright &copy; 2023 amaito soft co.</p>
            <span className="flex items-center justify-between gap-4">
              <p className="hover:text-[#7d00a3] transition duration-300 ease-in-out cursor-pointer">
                privacy policy
              </p>
              •
              <p className="hover:text-[#7d00a3] transition duration-300 ease-in-out cursor-pointer">
                terms & conditions
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
