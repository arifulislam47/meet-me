"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { CgWebsite } from "react-icons/cg";
import { IoCameraOutline } from "react-icons/io5";
import { LuSquareCode } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import {
  TbDeviceMobileStar,
  TbSpeakerphone,
  TbVectorBezier,
  TbVectorBezier2,
} from "react-icons/tb";
import Slider from "../about/components/Slider";
import Accordion from "./components/Accordion";

const services = () => {
  return (
    <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ml-auto font-poppins p-8  w-[880px]  bg-white text-white h-full rounded-2xl border border-gray-100 dark:bg-black dark:border-gray-800">
      <div className="jb">
        <h2
          className=" text-black dark:text-white"
          style={{ fontSize: "40px", fontWeight: "bold" }}
        >
          Services I <span className=" text-[#4770ff]"> Offered</span>
        </h2>
        <div className=" cc   gap-4 dark:bg-gray-900 bg-gray-100 text-[#4770ff] font-semibold px-4 py-2 rounded-md">
          <div className="relative h-2 w-2">
            <span class=" top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute rounded-full h-2 w-2 bg-[#4770ff]"></span>
            <span class="animate-ping absolute h-2 w-2 rounded-full bg-[#4770ff] opacity-75"></span>
          </div>{" "}
          <h2>Available For Hire</h2>
        </div>
      </div>
      <div className="mt-2 text-black text-[24px] w-[525px]">
        <p className="capitalize  text-gray-500">
          Bringing Ideas to Life with Cutting-Edge Web Solutions—Let’s Elevate
          Your Vision with{" "}
          <b className=" text-black dark:text-white">Expert Web Design</b> and{" "}
          <b className=" text-black dark:text-white">Development</b>!
        </p>
      </div>
      {/*  */}
      <div className=" grid grid-cols-4 gap-6 mt-9 align-middle">
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
      <div className=" grid grid-cols-4 gap-6 mt-9">
        <div className=" col-span-1 flex flex-col rounded-xl bg-gray-100 dark:bg-gray-900 h-[194px] px-6 pt-6">
          <div className="bg-white text-[#4770ff] h-[110px] dark:bg-black  cc py-4 rounded-md text-[60px]">
            {" "}
            <IoCameraOutline />
          </div>
          <h2 className=" mx-auto mt-4 text-black dark:text-gray-200 uppercase text-[12px] font-semibold">
            Photography
          </h2>
        </div>

        <div className=" col-span-1 flex flex-col rounded-xl bg-gray-100 dark:bg-gray-900 h-[194px] px-6 pt-6">
          <div className="bg-white text-[#4770ff] h-[110px] dark:bg-black  cc py-4 rounded-md text-[60px]">
            {" "}
            <TbVectorBezier />
          </div>
          <h2 className=" mx-auto mt-4 text-black dark:text-gray-200 uppercase text-[12px] font-semibold">
            Product Design
          </h2>
        </div>

        <div className=" col-span-1 flex flex-col rounded-xl bg-gray-100 dark:bg-gray-900 h-[194px] px-6 pt-6">
          <div className="bg-white text-[#4770ff] h-[110px] dark:bg-black  cc py-4 rounded-md text-[60px]">
            {" "}
            <TbSpeakerphone />
          </div>
          <h2 className=" mx-auto mt-4 text-black dark:text-gray-200 uppercase text-[12px] font-semibold">
            marketing{" "}
          </h2>
        </div>

        <div className=" col-span-1 flex flex-col rounded-xl bg-gray-100 dark:bg-gray-900 h-[194px] px-6 pt-6">
          <div className="bg-white text-[#4770ff] h-[110px] dark:bg-black  cc py-4 rounded-md text-[60px]">
            <TbVectorBezier2 />
          </div>
          <h2 className=" mx-auto mt-4 text-black dark:text-gray-200 uppercase text-[12px] font-semibold">
            Graphic design
          </h2>
        </div>
      </div>
      {/*  */}

      <div className="mt-10 rounded-xl overflow-hidden">
        <Image
          src="/blogImg.jpg"
          alt="notion logo"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>

      {/*  */}
      <div className=" mt-10 ">
        <h2 className=" font-semibold text-[40px] text-black dark:text-white pb-[25px]">
          Working With 16+ Brands ✨ Worldwide
        </h2>
        <div className=" w-full grid grid-cols-8 gap-4">
          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg ">
            <Image src="/notion.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
            <Image src="/figma.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
            <Image src="/framer.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
            <Image src="/mico.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
            <Image src="/webflow.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
            <Image src="/zeplin.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg ">
            <Image src="/notion.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
            <Image src="/figma.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
            <Image src="/framer.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
            <Image src="/mico.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
            <Image src="/webflow.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
            <Image src="/zeplin.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg ">
            <Image src="/notion.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
            <Image src="/figma.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100  dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
            <Image src="/framer.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}

          <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
            <Image src="/mico.svg" alt="notion logo" width={60} height={5} />
          </div>
          {/*  */}
        </div>
      </div>

      {/*  */}
      <div>
        <h2 className=" font-semibold text-[40px] text-black dark:text-white pb-[25px] mt-9">
          Trusted By 100+ Clients
        </h2>
        <div>
          <Slider />
        </div>
      </div>
      {/*  */}
      <div className=" rounded-lg overflow-hidden bg-slate-100 dark:bg-gray-900 mt-9">
        <Marquee speed={100}>
          <h2 className=" text-[25px] text-gray-800 dark:text-gray-400 py-4 ">
            Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For
            Hire 🚀 Crafting Digital Experiences 🎨
          </h2>
        </Marquee>
      </div>
    </div>
  );
};

export default services;
