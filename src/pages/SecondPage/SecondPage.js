import React from "react";
import { Inter } from "next/font/google";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import CardSecondPage from "../component/CardSecondPage";
import CardRectangle from "../component/CardRectangle";
import TriplePage from "../TriplePage/TriplePage";
import { useTheme } from "../../Darkmode/ThemeContext";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const SecondPage = () => {
  const { isLightMode } = useTheme();
  return (
    <div className="">
      <div
        className={` h-[100vh] max-md:h-[130vh]  p-44 max-lg:px-12  max-md:p-12 max-md:mt-[900px] pr-[90px] relative z-[999]`}
      >
        <div className="absolute top-0 left-[500px] max-md:left-0 z-[-999]">
          <Image
            src="/bg-second.png"
            alt="img"
            width={800}
            height={800}
            className="w-[800px] h-[800px]"
            // style={{width: 'auto', height: 'auto'}}
          />
        </div>
        <div className="">
          <div className="grid grid-cols-2 max-md:grid-cols-1">
            <div className="mt-20 ">
              <motion.h1
                className={`${isLightMode ? "" : "text-black"} ${
                  inter.className
                } text-[44px] font-bold leading-[42px]`}
                initial={{ translateY: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                }}
              >
                Digital <span className="text-[#118BFC]">Illustration</span>{" "}
                Present
              </motion.h1>
              <motion.h2
                className={`${isLightMode ? "" : "text-black"} leading-[20px]`}
                initial={{ translateY: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.2,
                }}
              >
                Ability to create digital illustrations with various types of
                digital illustrations
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
                <Button color="primary" className="mt-5" as={Link} href="https://www.instagram.com/ideosprocess/" target="__blank">
                  Get Started
                </Button>
              </motion.div>
              <motion.div
                className="max-md:hidden"
                initial={{ translateY: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.4,
                }}
              >
                <CardSecondPage />
              </motion.div>
            </div>
            <motion.div className="overflow-hidden">
              <motion.div
                initial={{ translateX: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.5,
                }}
              >
                <Image
                  src="/Group 11.png"
                  alt="img"
                  width={500}
                  height={500}
                  className="w-auto  h-auto"
                />
              </motion.div>
              <motion.div
                className="absolute top-[620px] right-[210px] w-[30%] max-md:hidden"
                initial={{ translateX: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.5,
                }}
              >
                <CardRectangle />
              </motion.div>
            </motion.div>
          </div>
          <div className="">
            <TriplePage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
