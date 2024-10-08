import React from "react";
import { Inter } from "next/font/google";
import {
  Card,
  CardHeader,
  Image,
  Button,
  Link,
} from "@nextui-org/react";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const LastPage = () => {
  const cardList = [
    {
      id: 1,
      header: "Dribble",
      src: "https://dribbble.com/indramaulana",
      content:
        "The following is a portfolio web slicing that I created using React JS",
    },
    {
      id: 2,
      header: "UI8 Ui/UX Portofolio",
      src: "https://ui8.net/users/indra-maulana",
      content:
        "Ui/Ux Portofolio",
    },
    {
      id: 3,
      header: "Behance",
      src: "https://www.behance.net/Indramaulaagung",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .",
    },
    {
      id: 4,
      header: "Linkedink",
      src: "https://www.linkedin.com/in/indra-maulana-agung-770451152/",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .",
    },
    {
      id: 5,
      src: "https://creativemarket.com/IndraMaulana_ui",
      header: "Creative Market",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .",
    },
    {
      id: 6,
      header: "Youtube",
      src: "https://www.youtube.com/channel/UClftTCNwGhdWMC901Xx2ZqQ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .",
    },
  ];
  return (
    <div className="p-44 max-md:p-12 max-md:mt-[100px] max-lg:p-12  h-auto mb-5">
      <div>
        <motion.h1
          className={`${inter.className} text-center text-[32px] font-bold leading-[52px] mb-8`}
          initial={{ translateY: 100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            type: "spring",
          }}
        >
          Portofolio
        </motion.h1>
      </div>
      <div>
        <div className="max-md:grid-cols-2 max-sm:grid-cols-1 grid grid-cols-3 gap-5 w-[100%] overflow-hidden ">
          <div className="absolute max-md:w-[100%] top-[5px] max-md:right-[100px] right-[550px]">
            <Image
              src="/bg-second.png"
              alt="img"
              width={800}
              height={800}
              className="w-[800px] h-[800px] z-0"
            />
          </div>
          {cardList.map((item) => (
            <Button
              key={item.id}
              as={Link}
              href={item.src}
              target="__blank"
              className=" w-[100%] h-[100%] bg-transparent flex flex-row whitespace-normal "
            >
              <Card
                className="py-4 w-[100%] flex z-[9999] bg-[#26262652]"
                isBlurred
              >
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <div className="flex flex-row gap-2">
                    <div className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="52"
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_27)">
                          <path
                            d="M25.6226 51.6967C39.6753 51.6967 51.0674 40.3046 51.0674 26.2519C51.0674 12.1991 39.6753 0.807068 25.6226 0.807068C11.5698 0.807068 0.177765 12.1991 0.177765 26.2519C0.177765 40.3046 11.5698 51.6967 25.6226 51.6967Z"
                            fill="#06231D"
                          />
                          <path
                            d="M22.2144 33.8245C22.3769 33.8245 22.5236 33.8245 22.6704 33.8245C25.0269 33.8263 27.3834 33.828 29.7399 33.8315C31.078 33.8332 32.0999 34.8132 32.0964 36.0884C32.0947 37.3654 31.0798 38.3402 29.7347 38.3436C27.6507 38.3506 25.5684 38.3489 23.4844 38.3506C23.3848 38.3506 23.2853 38.3471 23.1874 38.3524C22.7717 38.3751 22.5097 38.6039 22.5114 38.9446C22.5114 39.2904 22.7664 39.5158 23.1927 39.521C24.9657 39.5455 26.7388 39.5647 28.5119 39.5822C29.8517 39.5944 30.8562 40.5657 30.8509 41.8513C30.8457 43.1161 29.8412 44.0978 28.5258 44.1048C26.9642 44.1135 25.4007 44.11 23.8373 44.11C23.4425 44.11 23.0931 44 22.9202 43.6069C22.7874 43.303 22.7857 42.9536 23.0459 42.7475C23.2695 42.5711 23.5927 42.44 23.874 42.433C25.3745 42.4016 26.8751 42.4156 28.3756 42.4138C28.4874 42.4138 28.6027 42.4226 28.7093 42.3964C28.9958 42.3265 29.1652 42.1273 29.1652 41.8374C29.1652 41.5701 29.0289 41.357 28.7512 41.2889C28.6097 41.2539 28.4577 41.2452 28.3092 41.2452C26.6095 41.2295 24.9116 41.2225 23.2119 41.205C22.1201 41.1945 21.2484 40.5988 20.941 39.666C20.4553 38.1899 21.493 36.7033 23.0547 36.6719C24.0958 36.6509 25.1387 36.6667 26.1798 36.6649C27.3083 36.6649 28.4368 36.6649 29.5652 36.6614C29.677 36.6614 29.7906 36.6702 29.8989 36.6474C30.2168 36.5846 30.4072 36.3941 30.4107 36.0588C30.4142 35.7513 30.1766 35.5085 29.8395 35.491C29.5181 35.4753 29.1949 35.4858 28.8717 35.4858C26.6759 35.4858 24.4819 35.4858 22.2861 35.4823C21.1174 35.4823 20.4938 34.8587 20.4903 33.6935C20.4903 33.5939 20.4833 33.4944 20.4903 33.3965C20.5549 32.5633 20.2038 31.9519 19.5382 31.4645C18.1408 30.4408 17.0996 29.122 16.3607 27.5533C14.3186 23.2123 15.793 17.7726 19.7583 15.0562C23.9071 12.2141 29.1565 12.6508 32.7847 16.1428C36.4304 19.6487 36.82 25.7523 33.611 29.6652C33.0432 30.3587 32.3462 30.9527 31.6737 31.5536C31.2003 31.9746 30.671 31.9327 30.3653 31.5291C30.0404 31.0994 30.1452 30.6155 30.6693 30.219C32.4807 28.8477 33.583 27.0432 33.9988 24.8142C34.8041 20.5047 31.8449 16.0432 27.5598 15.1051C22.8887 14.0832 18.4325 16.7874 17.3582 21.427C16.5616 24.8718 17.6499 27.7681 20.3767 30.0076C21.1751 30.6644 21.8895 31.3387 22.0799 32.3956C22.1603 32.8428 22.1638 33.3057 22.2074 33.8245H22.2144ZM39.8333 24.1015C39.8455 24.1015 39.8577 24.1015 39.87 24.1015C40.3451 24.084 40.6421 23.8342 40.6578 23.4359C40.6753 23.0219 40.3836 22.7267 39.8909 22.7162C39.0507 22.6987 38.2087 22.7022 37.3685 22.7162C36.8793 22.7232 36.5667 23.0167 36.5719 23.4167C36.5771 23.8202 36.8951 24.0927 37.3824 24.1015C37.7912 24.1085 38.1982 24.1015 38.607 24.1015C39.0158 24.1015 39.4228 24.1015 39.8315 24.1015H39.8333ZM26.2899 9.14834C26.2776 8.6959 26.0226 8.41116 25.6348 8.39194C25.2278 8.37273 24.9256 8.64524 24.9133 9.11515C24.8906 9.96936 24.8924 10.8236 24.9116 11.6778C24.9221 12.1477 25.219 12.4272 25.6208 12.4167C26.0226 12.4062 26.2811 12.111 26.2916 11.6359C26.3003 11.2271 26.2934 10.8183 26.2916 10.4096C26.2916 9.98858 26.3003 9.56758 26.2899 9.14659V9.14834ZM13.8522 24.098C14.3046 24.0858 14.5911 23.829 14.6121 23.4429C14.6331 23.0394 14.357 22.7319 13.8906 22.7197C13.0364 22.697 12.1822 22.6987 11.328 22.718C10.8563 22.7284 10.5768 23.0237 10.5856 23.4254C10.5961 23.8255 10.8913 24.0892 11.3629 24.0997C11.7717 24.1085 12.1805 24.1015 12.5892 24.1015C13.0102 24.1015 13.4312 24.1102 13.8522 24.0997V24.098ZM36.0234 12.6228C35.7526 12.4604 35.4661 12.5635 35.2478 12.7853C34.6399 13.4019 34.032 14.0203 33.4363 14.6492C33.3385 14.7523 33.2598 14.8955 33.2284 15.0335C33.162 15.327 33.2738 15.5733 33.5289 15.7358C33.7839 15.9 34.0721 15.9139 34.287 15.7026C34.9753 15.0283 35.6461 14.3348 36.3081 13.6343C36.4007 13.5365 36.4182 13.3688 36.5055 13.1399C36.3553 12.9722 36.2243 12.7416 36.0251 12.6211L36.0234 12.6228ZM17.7617 14.5933C17.2027 13.9976 16.6297 13.4159 16.0533 12.836C15.7091 12.4901 15.2899 12.4639 15.0016 12.7469C14.7134 13.0299 14.7344 13.4491 15.0715 13.802C15.5833 14.3383 16.1039 14.8693 16.6262 15.3986C16.7468 15.5209 16.8673 15.6868 17.0158 15.7288C17.2236 15.7882 17.4962 15.8231 17.6726 15.7323C17.8613 15.6362 17.9678 15.3829 18.1268 15.1768C17.98 14.9357 17.8997 14.7365 17.7617 14.5916V14.5933Z"
                            fill="#8CC63F"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_27">
                            <rect
                              width="50.8913"
                              height="50.8913"
                              fill="white"
                              transform="translate(0.177765 0.807068)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex justify-start items-center">
                      <p className="text-tiny uppercase text-start font-bold">
                        {item.header}
                      </p>
                    </div>
                  </div>
                  <small className="text-default-500 mt-3 flex flex-row text-start">
                    {item.content}
                  </small>
                </CardHeader>
              </Card>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastPage;
