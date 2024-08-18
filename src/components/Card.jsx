import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>

      <div className="footer absolute bottom-0   w-full left-0">
        <div className="flex items-center px-8 justify-between mb-3">
          <h5>{data.file}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <LuDownload size="0.7em" color="white" />
            )}
          </span>
        </div>
        {data.tagDetails.isOpen && (
          <div
            className={`tag w-full py-4 bg-${data.tagDetails.tagColor}-600 flex items-center justify-center`}
          >
            <h3 className="text-sn font-semibold">
              {data.tagDetails.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
