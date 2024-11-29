"use client";

import React from "react";
import Container from "./Container";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { TbDeviceMobileStar } from "react-icons/tb";
import { LuSquareCode } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { IoReturnDownForward } from "react-icons/io5";
import { usePathname } from "next/navigation";

const ServicesOffered = () => {

  let pathName = usePathname()

  return (
    <Container className={`mt-6 ${pathName === "/" ? "" : "hidden"} `}>
      <div className=" grid grid-cols-3  gap-6">
        <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] col-span-2 bg-white dark:bg-black p-6 rounded-2xl">
          <div className="jb pb-[8px]">
            <h2 className="text-[24px] font-semibold  bg-white dark:bg-black text-black dark:text-white mb-2">
              Services I Offered
            </h2>
            <Link
              className=" mb-2 fc gap-2 font-semibold text-[#4770ff] border-b hover:border-[#4770ff] text-[13px]"
              href={"/services"}
            >
              See All Service <IoIosArrowRoundForward />
            </Link>
          </div>
          {/*  */}
          <div className=" grid grid-cols-4 gap-6">

            <div className=" col-span-1 flex flex-col rounded-xl bg-gray-100 dark:bg-gray-900 h-[194px] px-6 pt-6">
              <div className="bg-white text-[#4770ff] h-[110px] dark:bg-black  cc py-4 rounded-md text-[60px]">
                {" "}
                <CgWebsite />{" "}
              </div>
              <h2 className=" mx-auto mt-4 text-black dark:text-gray-200 uppercase text-[12px] font-semibold">
                Web Design
              </h2>
            </div>

            <div className=" col-span-1 flex flex-col rounded-xl bg-gray-100 dark:bg-gray-900 h-[194px] px-6 pt-6">
              <div className="bg-white text-[#4770ff] h-[110px] dark:bg-black  cc py-4 rounded-md text-[60px]">
                {" "}
                <TbDeviceMobileStar />
              </div>
              <h2 className=" mx-auto mt-4 text-black dark:text-gray-200 uppercase text-[12px] font-semibold">
                Mobile app
              </h2>
            </div>

            <div className=" col-span-1 flex flex-col rounded-xl bg-gray-100 dark:bg-gray-900 h-[194px] px-6 pt-6">
              <div className="bg-white text-[#4770ff] h-[110px] dark:bg-black  cc py-4 rounded-md text-[60px]">
                {" "}
                <LuSquareCode />
              </div>
              <h2 className=" mx-auto mt-4 text-black dark:text-gray-200 uppercase text-[12px] font-semibold">
                Web development
              </h2>
            </div>

            <div className=" col-span-1 flex flex-col rounded-xl bg-gray-100 dark:bg-gray-900 h-[194px] px-6 pt-6">
              <div className="bg-white text-[#4770ff] h-[110px] dark:bg-black  cc py-4 rounded-md text-[60px]">
                <MdOutlineDesignServices />
              </div>
              <h2 className=" mx-auto mt-4 text-black dark:text-gray-200 uppercase text-[12px] font-semibold">
                logo Design
              </h2>
            </div>
          </div>
        </div>
        <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] col-span-1 bg-white dark:bg-black p-6 rounded-2xl">
          <div>
            <div className=" rounded-lg overflow-hidden bg-slate-100 dark:bg-gray-900">
              <Marquee speed={100}>
                <h2 className=" text-[18px] text-gray-800 dark:text-gray-400 py-4 ">
                  Available For Hire 🚀 Crafting Digital Experiences 🎨
                  Available For Hire 🚀 Crafting Digital Experiences 🎨
                </h2>
              </Marquee>
            </div>
            <h2 className=" text-[40px] mt-4 font-semibold dark:text-white">Let's👋</h2>
            <h2 className=" text-[50px] font-semibold dark:text-white">Work Together</h2>
            <Link className=" flex items-center gap-2 text-[#4770ff] mt-2 font-semibold" href={"/contact"}>
              Let's Talk <IoReturnDownForward className=" text-xl" />{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServicesOffered;
