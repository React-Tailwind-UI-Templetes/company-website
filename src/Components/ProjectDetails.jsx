import React from "react";

import { RxCross1 } from "react-icons/rx";

import { motion } from "framer-motion";

const ProjectDetails = ({ setClick }) => {
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
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
