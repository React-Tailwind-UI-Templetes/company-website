import React from "react";

import aboutImage from "../assets/aboutSection.png";

const About = () => {
  return (
    <>
      <div className="w-full bg-white my-24" id="about">
        <div className="flex items-center justify-between w-full max-w-[1200px] px-8 mx-auto">
          <div className="w-[40%]">
            <img
              src={aboutImage}
              alt="about/image"
              className="w-full h-full bg-cover"
            />
          </div>

          <div className="w-[50%]">
            <div>
              <h3 className="text-[30px] font-[700]">About Us</h3>
              <div className="w-[60px] h-[4px] bg-gradient-to-r from-[#7d00a3] to-[#e900e9]"></div>
            </div>

            <p
              className="text-[19px] text-justify my-8
            ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque
              in ullam dolor fuga, exercitationem blanditiis laudantium ab sed
              impedit ex quis inventore at voluptatum iste unde sunt commodi
              maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Et deserunt a ab illum distinctio, veniam corporis, harum voluptas
              explicabo consectetur rem voluptatum nulla aliquid reprehenderit
              quas nostrum dolorem cumque quo. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Excepturi, maxime!
            </p>

            <div>
              <h2 className="text-[22px] font-[600]">Iftiher M Fuhad</h2>
              <span className="text-[20px] font-[500] text-[#0000008f]">
                Founder & Chief Executive officer
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
