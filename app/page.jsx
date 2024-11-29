"use client";

import React from "react";
import VerticalSwipeToSlide from "./components/VerticalSlider";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { RiNodejsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { ImHtmlFive2 } from "react-icons/im";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-semibold ml-auto w-[880px] grid grid-cols-2 gap-6">
      <div className="col-span-1 grid grid-flow-row grid-rows-2 gap-6 ">
        <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] row-span-1 border bg-white border-gray-100 rounded-2xl px-6 pt-6 dark:bg-black dark:border-gray-800 relative">
          <h2 className="text-[24px] pb-[8px] bg-white dark:bg-black text-black dark:text-white">
            Work Experience
          </h2>
          <div className=" w-[368px]">
            <VerticalSwipeToSlide />
          </div>
        </div>
        <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] row-span-1 border border-gray-100 rounded-2xl p-6 bg-white dark:bg-black dark:border-gray-800 font-poppins">
          <h2 className=" text-[24px] pb-[8px] bg-white dark:bg-black text-black dark:text-white">
            My Expert Area
          </h2>

          <div className=" mt-5 grid grid-cols-3 grid-rows-2 gap-4 gap-y-4">
            <div className=" col-span-1 flex flex-col">
              <div className="bg-gray-100 group dark:bg-gray-900 dark:text-gray-200 cc py-4 rounded-xl text-[40px]">
                {" "}
                <FaReact />
              </div>
              <h2 className=" mx-auto mt-2 text-black dark:text-gray-200 uppercase text-[13px]">
                React Js
              </h2>
            </div>
            {/*  */}
            <div className=" col-span-1 flex flex-col">
              <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 cc py-4 rounded-xl text-[40px]">
                {" "}
                <RiNextjsLine />
              </div>
              <h2 className=" mx-auto mt-2 text-black dark:text-gray-200 uppercase text-[13px]">
                Next Js
              </h2>
            </div>
            {/*  */}
            <div className=" col-span-1 flex flex-col">
              <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 cc py-4 rounded-xl text-[40px]">
                {" "}
                <IoLogoJavascript />
              </div>
              <h2 className=" mx-auto mt-2 text-black dark:text-gray-200 uppercase text-[13px] font-semibold">
                JavaScript
              </h2>
            </div>
            {/*  */}
            <div className=" col-span-1 flex flex-col">
              <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 cc py-4 rounded-xl text-[40px]">
                {" "}
                <RiNodejsLine />
              </div>
              <h2 className=" mx-auto mt-2 text-black dark:text-gray-200 uppercase text-[13px] font-semibold">
                Node Js
              </h2>
            </div>
            {/*  */}
            <div className=" col-span-1 flex flex-col">
              <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 cc py-4 rounded-xl text-[40px]">
                {" "}
                <RiTailwindCssFill />
              </div>
              <h2 className=" mx-auto mt-2 text-black dark:text-gray-200 uppercase text-[13px] font-semibold">
                Tailwind
              </h2>
            </div>
            {/*  */}
            <div className=" col-span-1 flex flex-col">
              <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 cc py-4 rounded-xl text-[40px]">
                {" "}
                <ImHtmlFive2 />
              </div>
              <h2 className=" mx-auto mt-2 text-black dark:text-gray-200 uppercase text-[13px] font-semibold">
                HTML
              </h2>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] col-span-1 border border-gray-100 dark:border-gray-800 px-[24px] py-6 rounded-2xl bg-white dark:bg-black">
        <div className="jb pb-[8px]">
          <h2 className="text-[24px]  bg-white dark:bg-black text-black dark:text-white mb-2">
            Recent Projects
          </h2>
          <Link
            className=" mb-2 fc gap-2 text-[#4770ff] border-b hover:border-[#4770ff] text-[13px]"
            href={"/project"}
          >
            All Projects <IoIosArrowRoundForward />
          </Link>
        </div>
        {/*  */}
        <div className=" grid grid-rows-2 grid-flow-row justify-center gap-y-6 h-[px]">
          <div className=" row-span-1 bg-gray-100 dark:bg-gray-900 rounded-lg p-6 relative overflow-hidden">
            <div className="w-full h-full rounded-lg overflow-hidden ">
              <Link
                target="blank"
                href={"https://dashboard-zeta-taupe.vercel.app/"}
              >
                <Image
                  src="/Projectone.png"
                  alt="Picture of the author"
                  layout="responsive"
                  width={16}
                  height={9}
                />
              </Link>
            </div>
            <div className="bg-gradient-to-b from-transparent to-black opacity-[20%] absolute h-[60px] w-full bottom-0 right-0"></div>
            <div className=" w-[150px] text-center rounded-md text-[12px] text-[#4770ff] py-1 bottom-4 left-3 absolute bg-white">
              <h2>Dashboard design</h2>
            </div>
          </div>
          <div className=" row-span-1 bg-gray-100 dark:bg-gray-900 rounded-lg p-6 relative overflow-hidden">
            <div className="w-full h-full rounded-lg overflow-hidden  ">
              <Link target="blank" href={"https://techstore-gamma.vercel.app/"}>
                <Image
                  src="/Project02.png"
                  alt="Picture of the author"
                  layout="responsive"
                  width={16}
                  height={9}
                />
              </Link>
            </div>
            <div className="bg-gradient-to-b from-transparent to-black opacity-[20%] absolute h-[60px] w-full bottom-0 right-0"></div>
            <div className=" w-[150px] text-center rounded-md text-[12px] text-[#4770ff] py-1 bottom-4 left-3 absolute bg-white">
              <h2>E-commerce design</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
