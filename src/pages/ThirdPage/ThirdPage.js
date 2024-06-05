import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ThirdPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 mt-[500px] max-md:grid-cols-1 max-lg:p-12 place-items-center p-44 max-md:p-12 h-auto max-sm:mt-[650px]">
        <div>
          <motion.h1
            className="text-[42px] font-bold leading-[42px]"
            initial={{ translateY: 50, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              type: "spring",
            }}
          >
            Visual Designer Present
          </motion.h1>
          <motion.h2
            className="leading-[20px] mt-5"
            initial={{ translateY: 50, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
            }}
          >
            Ability to create and design colors in various products or digital art
          </motion.h2>
          <motion.div
          className="relative z-[999]"
            initial={{ translateY: 50, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.4,
            }}
          >
            <Button color="primary" className="mt-5" as={Link} href="https://www.behance.net/Indramaulaagung" target="__blank">
              Get Started
            </Button>
          </motion.div>
        </div>

        <motion.div className="">
          <motion.div
            className="relative z-[999] "
            initial={{ translateY: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              type: "spring",
            }}
          >
            <Image
              src="/Group 22.png"
              alt="img"
              width={500}
              height={500}
              className="w-auto h-auto"
            />
          </motion.div>
          <div className="absolute max-md:top-[70px] top-[5px] right-[50px] ]">
            <Image
              src="/bg-second.png"
              alt="img"
              width={800}
              height={800}
              className="w-[800px] h-[800px]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThirdPage;
