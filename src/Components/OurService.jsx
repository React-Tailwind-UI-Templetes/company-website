import React from "react";
import SingleService from "./SingleService";

import ux from "../assets/ux.png";
import web from "../assets/web.png";
import app from "../assets/app.png";
import ecom from "../assets/e-commerce.png";
import seo from "../assets/seo.png";
import support from "../assets/support.png";

const OurService = () => {
  return (
    <>
      <div className="w-full bg-white my-40" id="service">
        <div className="w-full max-w-[1200px] mx-auto h-full px-8">
          <div className="my-12 grid place-items-center">
            <div>
              <h3 className="text-[30px] font-[700]">Our Service</h3>
              <div className="w-[60px] h-[4px] bg-gradient-to-r from-[#7d00a3] to-[#e900e9]"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 place-items-center gap-8">
            <SingleService
              image={ux}
              title={"UX | UI"}
              desc={`Our team of qualified UI/UX designers can answer your needs. It offers
        an extensive selection of services, such as designing UI/UX for Apps.`}
            />

            <SingleService
              image={web}
              title={"Web Development"}
              desc={`Our client-centered & customer-focused services make your company intelligible to everyone.
MD Infotech's web developers will ensure that.`}
            />

            <SingleService
              image={app}
              title={"App Development"}
              desc={`We provide excellent App development services to launch your project across all devices. Contact our App specialists right away!`}
            />

            <SingleService
              image={seo}
              title={"SEO"}
              desc={`Research is the foundation of each project & content is anything that incorporates all the data in great depth, `}
            />

            <SingleService
              image={support}
              title={"1 month free support"}
              desc={`Our multi-disciplinary system & software engineering team offers a wide variety of embedded systems solutions.`}
            />

            <SingleService
              image={ecom}
              title={"E-commerce App Development"}
              desc={`Grow your Business Online with e Commerce Services. We enable Startups, brands and retailers to start selling their products online.`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
