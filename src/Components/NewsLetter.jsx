import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="w-full mx-auto bg-blue-600" id="contact">
        <div className="w-full max-w-[1200px] mx-auto px-8 ">
          <div className="w-full flex items-center justify-between  py-10">
            <h1 className="text-[2rem] text-white font-[700]">
              Subscirbe Our Newsletter
            </h1>

            <form className="w-[500px] relative">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full py-3 px-3 rounded outline-none"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white rounded-r py-2.5 px-2 cursor-pointer font-[700] text-[20px] uppercase tracking-wide">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
