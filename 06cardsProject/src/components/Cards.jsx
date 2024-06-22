import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";

import { motion } from "framer-motion"


function Cards({ data,reference }) {
  return (
    <motion.div drag dragConstraints = {reference} className="relative flex-shrink-0 w-48 h-64 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFileLines />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full py-3 left-0">
        <div className="flex items-center justify-between px-6 py-1 mb-2">
          <h5>{data.fileSize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center ">
            {data.close ? (
              <IoCloseCircleOutline />
            ) : (
              <MdOutlineFileDownload size="0.8em" color="fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-2  ${data.tag.tagColor == "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) }
      </div>
    </motion.div>
  );
}

export default Cards;
