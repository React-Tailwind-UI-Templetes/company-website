import React from "react";

import { RxCross1 } from "react-icons/rx";

import { motion } from "framer-motion";

const Order = ({ setClick }) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-[#00000030] flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -500 }}
        className="w-[90%] 800px:w-[60%] h-[90vh] 800px:h-[75vh] rounded-md p-4 flex items-center justify-center relative shadow-sm overflow-y-scroll bg-white">
        <RxCross1
          size={40}
          color="#333"
          className="absolute top-1 right-1 cursor-pointer p-2 hover:bg-gray-200 hover:text-gray-50 rounded-full"
          onClick={() => setClick(false)}
        />

        <form className="800px:flex w-full items-center justify-between flex-wrap p-10">
          <div className="w-full 800px:w-[47%] mb-6">
            <label className="pb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 mt-2 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>

          <div className="w-full 800px:w-[47%] mb-6">
            <label className="pb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 mt-2 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="w-full 800px:w-[47%] mb-3">
            <label className="pb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 mt-2 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="w-full 800px:w-[47%] mb-3">
            <label className="pb-2">
              Select Plan <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-3 py-2 block rounded-[5px] border mt-2"
              required>
              <option value="Choose a category">Choose a plan </option>
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="w-full 800px:w-[100%] mt-5">
            <label className="pb-2">Send Messages</label>
            <textarea
              required
              placeholder="Send any kind of message"
              className="appearance-none mt-2 block w-full h-[150px] px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
          </div>

          <div className="w-full mt-12 flex items-center justify-center">
            <input
              type="submit"
              value="Create Product"
              className={` !w-full font-semibold 800px:!w-[50%] !rounded-[4px] !-h-11 hover:!text-white text-white py-3 transition-colors  bg-gradient-to-r cursor-pointer from-[#7d00a3] to-[#e900e9] `}
            />
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Order;
