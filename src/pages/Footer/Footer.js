import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <div className="px-44 max-md:p-12 max-lg:p-12 bg-black border-t-[1px] border-[#4e4c4c] h-auto flex justify-center items-center">
        <div className="mt-5 mb-5  overflow-hidden">
          <motion.h1
            className="text-[30px] text-center mt-16 font-mons mb-20 "
            initial={{ translateX: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{
              type: "spring",
            }}
          >
            
          </motion.h1>
          <motion.h2
            className="text-center"
            initial={{ translateX: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
            }}
          >
            Indra Maulana Agung
          </motion.h2>

          
        </div>
      </div>
    </div>
  );
};

export default Footer;
