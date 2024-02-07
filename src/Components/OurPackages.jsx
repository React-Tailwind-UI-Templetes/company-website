import React, { useState } from "react";

import checkIcon from "../assets/check.png";
import crossIcon from "../assets/cross.png";
import skech from "../assets/skech.png";
import Order from "./Order";

const OurPackages = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="w-full my-50">
        <div className="w-full flex flex-col gap-12 max-w-[1200px] mx-auto px-8 ">
          <div>
            <div className=" grid place-items-center pb-12">
              <div>
                <h3 className="text-[30px] font-[700]">Choose A Package</h3>
                <div className="w-[60px] h-[4px] bg-gradient-to-r from-[#7d00a3] to-[#e900e9]"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 place-items-center gap-8">
              {/* basic plan */}
              <div className="w-[90%] bg-blue-100 rounded">
                <div className=" text-center bg-gradient-to-r from-[#7d00a3] to-[#e900e9] rounded-t">
                  <h2 className="text-3xl py-6 font-[700] text-white">Basic</h2>
                </div>

                <div className="p-4 text-center mt-3">
                  <span
                    className="font-[600] text-[20px] p-2 text-[#2737cc]"
                    style={{
                      backgroundImage: `url(${skech})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}>
                    14,990 Taka / $199 USD
                  </span>

                  <div className="mt-9 flex flex-col gap-5">
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Free Domain+Hosting (200MB)</p>
                    </span>
                    {/* <span className="flex items-center gap-3">
                  <img src={crossIcon} alt="" className="w-[20px]" />
                  <p className="font-[500] ">Domain Name Email Address</p>
                </span> */}
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Total Page: 5</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Design: Basic</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Technology: React</p>
                    </span>
                    {/* <span className="flex items-center gap-3">
                  <img src={crossIcon} alt="" className="w-[20px]" />
                  <p className="font-[500] ">Logo Design</p>
                </span>
                <span className="flex items-center gap-3">
                  <img src={crossIcon} alt="" className="w-[20px]" />
                  <p className="font-[500] ">Mobile App</p>
                </span>
                <span className="flex items-center gap-3">
                  <img src={crossIcon} alt="" className="w-[20px]" />
                  <p className="font-[500] ">Free Update</p>
                </span>
                <span className="flex items-center gap-3">
                  <img src={crossIcon} alt="" className="w-[20px]" />
                  <p className="font-[500] ">Free https ssl certificte</p>
                </span> */}
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Development Time: 5 Day</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">
                        Renew Charge: 3000Tk (Per Year)
                      </p>
                    </span>
                    <button
                      className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-3 rounded cursor-pointer mt-5 font-[700] text-[20px] uppercase tracking-wide"
                      onClick={() => setClick(true)}>
                      purchase now
                    </button>
                  </div>
                </div>
              </div>

              {/* Advanced plan */}
              <div className="w-[110%] bg-blue-100 rounded ">
                <div className=" text-center bg-gradient-to-r from-[#7d00a3] to-[#e900e9] rounded-t">
                  <h2 className="text-3xl py-6 font-[700] text-white">
                    Advanced
                  </h2>
                </div>

                <div className="p-4 text-center mt-3">
                  <span
                    className="font-[600] text-[20px] p-2 text-[#2737cc]"
                    style={{
                      backgroundImage: `url(${skech})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}>
                    54,990 Taka / $599 USD
                  </span>

                  <div className="mt-9 flex flex-col gap-5">
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Free Domain+Hosting (200MB)</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Domain Name Email Address</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Total Page: upto 12</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Design: Premium</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Technology: React / Next</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Logo Design</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Mobile App</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Free Update 2 month</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Free https ssl certificte</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Development Time: 30 Day</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">
                        Renew Charge: 7000Tk (Per Year)
                      </p>
                    </span>
                    <button
                      className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-3 rounded cursor-pointer mt-5 font-[700] text-[20px] uppercase tracking-wide"
                      onClick={() => setClick(true)}>
                      purchase now
                    </button>
                  </div>
                </div>
              </div>

              {/* Standard plan */}
              <div className="w-[90%] bg-blue-100 rounded">
                <div className=" text-center bg-gradient-to-r from-[#7d00a3] to-[#e900e9] rounded-t">
                  <h2 className="text-3xl py-6 font-[700] text-white">
                    Standard
                  </h2>
                </div>

                <div className="p-4 text-center mt-3">
                  <span
                    className="font-[600] text-[20px] p-2 text-[#2737cc]"
                    style={{
                      backgroundImage: `url(${skech})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}>
                    29,990 Taka / $399 USD
                  </span>

                  <div className="mt-9 flex flex-col gap-5">
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Free Domain+Hosting (200MB)</p>
                    </span>
                    {/* <span className="flex items-center gap-3">
                  <img src={crossIcon} alt="" className="w-[20px]" />
                  <p className="font-[500] ">Domain Name Email Address</p>
                </span> */}
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Total Page: 8</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Design: Standard</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Technology: React</p>
                    </span>
                    {/* <span className="flex items-center gap-3">
                  <img src={crossIcon} alt="" className="w-[20px]" />
                  <p className="font-[500] ">Logo Design</p>
                </span>
                <span className="flex items-center gap-3">
                  <img src={crossIcon} alt="" className="w-[20px]" />
                  <p className="font-[500] ">Mobile App</p>
                </span>
                <span className="flex items-center gap-3">
                  <img src={crossIcon} alt="" className="w-[20px]" />
                  <p className="font-[500] ">Free Update</p>
                </span>
                <span className="flex items-center gap-3">
                  <img src={crossIcon} alt="" className="w-[20px]" />
                  <p className="font-[500] ">Free https ssl certificte</p>
                </span> */}
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">Development Time: 10 Day</p>
                    </span>
                    <span className="flex items-center gap-3">
                      <img src={checkIcon} alt="" className="w-[20px]" />
                      <p className="font-[500] ">
                        Renew Charge: 5000Tk (Per Year)
                      </p>
                    </span>

                    <button
                      className="bg-gradient-to-r from-[#7d00a3] to-[#e900e9] text-white py-3 rounded cursor-pointer mt-5 font-[700] text-[20px] uppercase tracking-wide"
                      onClick={() => setClick(true)}>
                      purchase now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {click && <Order setClick={setClick} />}
    </>
  );
};

export default OurPackages;
