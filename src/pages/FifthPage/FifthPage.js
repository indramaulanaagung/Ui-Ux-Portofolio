import React from "react";
import { Button } from "@nextui-org/react";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const FifthPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 max-lg:p-12 lg:mt-[-200px] max-lg:mt-[00px] max-md:grid-cols-1 p-44 max-md:p-12 h-[30vh] max-md:mt-[-50px] ">
        <div>
          <motion.h1
            className={`${inter.className} text-[52px] font-bold leading-[52px]`}
            initial={{ translateY: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              type: "spring",
            }}
          >
            <span className="text-[#8CC63F]">Front End Web Dev </span> Present
          </motion.h1>
          <motion.h2
            className="mt-3"
            initial={{ translateY: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
            }}
          >
            Ability to design web front end with visuals and web prototypes
          </motion.h2>
          <motion.div
            initial={{ translateY: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.4,
            }}
          >
            <Button color="primary" className="mt-5">
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
