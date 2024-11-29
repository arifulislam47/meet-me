"use client";

import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const contact = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [subject, setSubject] = useState("");
  let [budget, setBudget] = useState("");

  return (
    <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ml-auto font-poppins p-8  w-[880px]  bg-white text-white h-full rounded-2xl border border-gray-100 dark:bg-black dark:border-gray-800">
      <h2
        className=" text-black dark:text-white"
        style={{ fontSize: "40px", fontWeight: "bold" }}
      >
        Let's 👋 <span className=" text-[#4770ff]"> Work</span> Together
      </h2>
      <p className=" text-gray-400 text-[18px] mt-5">
        I'm here to help if you're searching for a product designer to bring
        your idea to life or a design partner to help take your business to the
        next level.
      </p>

      {/* input Section */}
      <div className=" p-[50px] bg-gray-100 dark:bg-gray-900 mt-10 rounded-lg">
        {/* name & Email */}
        <div className=" grid grid-cols-2 gap-4">
          <div>
            <label
              className="text-gray-800 dark:text-gray-400 font-semibold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              type="text"
              className="dark:bg-black outline-none rounded-md border-[1px] border-gray_2  mt-2 dark:border-gray-700  w-full py-5 pl-5 text-gray-700 dark:text-gray-400"
              id="name"
              name="name"
            />
          </div>
          <div>
            <label
              className="text-gray-800 dark:text-gray-400 font-semibold"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              type="Email"
              className="dark:bg-black outline-none rounded-md border-[1px] border-gray_2  mt-2 dark:border-gray-700  w-full py-5 pl-5 text-gray-700 dark:text-gray-400"
              id="Email"
              name="Email"
            />
          </div>
        </div>

        {/* Subject & budget */}
        <div className=" grid grid-cols-2 gap-4 mt-5">
          <div>
            <label
              className="text-gray-800 dark:text-gray-400 font-semibold"
              htmlFor="Subject"
            >
              Subject
            </label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter Your Subject"
              type="text"
              className="dark:bg-black outline-none rounded-md border-[1px] border-gray_2  mt-2 dark:border-gray-700  w-full py-5 pl-5 text-gray-700 dark:text-gray-400"
              id="Subject"
              name="Subject"
            />
          </div>
          <div>
            <label
              className="text-gray-800  dark:text-gray-400 font-semibold"
              htmlFor="Budget"
            >
              Budget
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className=" dark:bg-black outline-none rounded-md border-[1px] border-gray_2  mt-2 dark:border-gray-700  w-full py-5 pl-5 pr-5 text-gray-700 dark:text-gray-400"
              name=""
              id=""
            >
              <option value="500">$500</option>
              <option value="800">$800</option>
              <option value="1000">$1000</option>
              <option value="1500">$1500</option>
            </select>
          </div>
        </div>

        <div>
          <textarea
            class="w-full  dark:bg-black h-40 mt-7 text-black dark:text-gray-400 rounded-[4px] p-[17px] focus:outline-none resize-none"
            placeholder="Type Details About Your Inpuiry"
          ></textarea>
        </div>
      </div>

      <iframe
        className=" mt-9 rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1823.5740296432482!2d90.30680138035055!3d23.919810658505416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c29afaeaef3f%3A0xf7c6aa533ba8c8ab!2sGoshbag%20Boro%20Bari!5e0!3m2!1sen!2sbd!4v1732874090383!5m2!1sen!2sbd"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>

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

export default contact;
