import React from "react";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useTheme } from "../../Darkmode/ThemeContext";
import { motion } from "framer-motion";
import Text from "../component/Text";

const inter = Inter({ subsets: ["latin"] });

const FirstPage = () => {
  const { isLightMode } = useTheme();
  return (
    <div className="">
      <div className="h-screen">
        <div className="grid grid-cols-2 max-md:grid-cols-1 ">
          <div className="p-44 md:pr-0 max-[1170px]:p-[1rem] max-[1170px]:mt-40">
            <div className="max-md:absolute max-md:top-[290px] max-md:mt-20 w-[90%]">
              <motion.h1
                className={`${
                  inter.className
                } text-[32px]  max-sm:text-[20px] font-bold sm:leading-[32px] uppercase ${
                  isLightMode ? "" : "text-black"
                }`}
                initial={{ translateY: 100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                }}
              >
                I,M A UI/UX Designer And Front-End Web Dev
                <motion.span
                  className="text-[#F09] uppercase block"
                  initial={{ translateY: 100, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.2,
                  }}
                >
                  {" "}
                  <Text />
                </motion.span>{" "}
              </motion.h1>
              <motion.h2
                className={`text-[15px] font-normal mt-5 ${
                  isLightMode ? "" : "text-black"
                }`}
                initial={{ translateY: 100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.4,
                }}
              >
               As an Informatics Engineering Student has experience as a Graphic Designer, Agency Freelancer, Graphic Designer Content Creator and UI/UX Designer Freelancer. In addition to my internship experience in government, I have also developed myself as a freelance graphic Designer and Content Creator Graphic Designer. In this role, I have created engaging and creative graphic designs for a diverse range of clients from a variety of industries. My ability to use various design software, such as Adobe Creative Suite, has helped me deliver compelling visual solutions. I am a proactive, creative student, and always eager to learn new things. My dedication to Informatics Engineering and graphic design motivates me to continue honing my skills and knowledge in these two areas. My multitasking ability and adaptability allow me to function well in a team and tackle challenges efficiently.
              </motion.h2>
              <motion.div
                className="relative z-[999] flex gap-5 sm:items-center max-sm:flex-col"
                initial={{ translateY: 100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.5,
                }}
              >
                <Button
                  color="primary"
                  variant="shadow"
                  radius="full"
                  className="mt-5 max-md:relative max-md:z-[999] h-[45px]"
                  as={Link}
                  href="https://ui8.net/users/indra-maulana"
                  target="__blank"
                >
                  Get Started
                </Button>
                {/* <div> */}

                <Button
                  color="default"
                  variant="bordered"
                  radius="full"
                  className="sm:mt-5 w-auto max-md:relative max-md:z-[999] h-[48px]"
                  as={Link}
                  href="https://github.com/indramaulanaagung"
                  target="__blank"
                >
                  <svg
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    aria-hidden="true"
                    focusable="false"
                    tabIndex="-1"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  Github
                </Button>
                {/* </div> */}
              </motion.div>
            </div>
          </div>

          <div className="mt-20 max-md:mt-[-90px]  overflow-hidden flex justify-end">
            <motion.div
              initial={{ translateY: 100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
              }}
            >
              <Image
                src="/image 1.png"
                width={1000}
                height={1000}
                className="w-auto h-auto relative max-lg:w-[100%]"
                alt="img"
                priority
              />
            </motion.div>
            <div className="absolute top-0 max-md:top-[77px] right-auto overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="842"
                height="690"
                viewBox="0 0 842 1080"
                fill="none"
                className=""
              >
                <path
                  opacity="0.3"
                  d="M706.5 2262.88C1096.69 2262.88 1413 1674.92 1413 949.642C1413 224.361 1096.69 -363.596 706.5 -363.596C316.311 -363.596 0 224.361 0 949.642C0 1674.92 316.311 2262.88 706.5 2262.88Z"
                  fill="url(#paint0_radial_1_58)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_1_58"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(706.5 949.642) scale(706.5 1313.24)"
                  >
                    <stop stopColor="#FF0099" />
                    <stop offset="1" stopColor="#D9E021" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
