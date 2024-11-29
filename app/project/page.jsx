import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosShareAlt } from "react-icons/io";

const page = () => {
  return (
    <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ml-auto font-poppins p-8  w-[880px]  bg-white text-white h-full rounded-2xl border border-gray-100 dark:bg-black dark:border-gray-800">
      <h2
        className=" text-black dark:text-white"
        style={{ fontSize: "40px", fontWeight: "bold" }}
      >
        Check Out My Latest <span className=" text-[#4770ff]"> Projects</span>
      </h2>
      <p className=" text-gray-400 text-[18px] mt-5">
        I'm here to help if you're searching for a product designer to bring
        your idea to life or a design partner to help take your business to the
        next level.
      </p>

      <div className=" gap-y-6 h-[px] mt-10">
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

        {/*  */}
        <div className=" flex justify-between px-4 pt-3 pb-6 ">
          <div>
            <h2 className=" text-black dark:text-gray-500 text-[30px] font-medium">
              Dashboard- Application Tools
            </h2>
            <p className=" dark:text-gray-400 text-gray-600">
              React Js | Tailwind CSS
            </p>
          </div>
          <div>
            <Link
              target="blank"
              href={"https://dashboard-zeta-taupe.vercel.app/"}
              className=" cc text-black dark:text-gray-400 hover:text-[#4770ff] pt-2"
            >
              Visit Site <IoIosShareAlt />{" "}
            </Link>
          </div>
        </div>
        {/*  */}

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

        {/*  */}
        <div className=" flex justify-between px-4 pt-3 pb-6 ">
          <div>
            <h2 className=" text-black dark:text-gray-500 text-[30px] font-medium">
              E-commarce- Application Tools
            </h2>
            <p className=" dark:text-gray-400 text-gray-600">
              React Js | Tailwind CSS
            </p>
          </div>
          <div>
            <Link
              target="blank"
              href={"https://techstore-gamma.vercel.app/"}
              className=" cc text-black dark:text-gray-400 hover:text-[#4770ff] pt-2"
            >
              Visit Site <IoIosShareAlt />{" "}
            </Link>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default page;
