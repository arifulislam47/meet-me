import React from "react";

const MarqueeComponent = () => {
  return (
    <div className=" flex flex-col gap-y-[15px]">
      <div class=" mt-[15px] rounded-lg flex justify-between">
        <span className=" text-gray-400">2022-2024</span>
        <div className=" cc gap-3">
          <span className=" text-[#000000] text-[20px] dark:text-gray-400">
            B<span className=" text-[#4770ff]">C</span>
          </span>
          <div className=" flex flex-col">
            <span className=" dark:text-gray-400 text-[14px]">Brand Care</span>
            <span className=" text-gray-400 text-[11px] ">
              Graphic Designer
            </span>
          </div>
        </div>
      </div>
      <div class="rounded-lg flex gap-[70px]">
        <span className=" text-gray-400">2021-2022</span>
        <div className=" cc gap-3">
          <span className=" text-[20px] dark:text-gray-400">
            M<span className=" text-red-600">G</span>
          </span>
          <div className=" flex flex-col">
            <span className=" dark:text-gray-400 text-[14px]">MG Printer</span>
            <span className=" text-gray-400 text-[11px] ">
              Graphic Designer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
