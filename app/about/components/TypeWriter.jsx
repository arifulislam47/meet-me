import React from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  let words = [
    "Ariful Islam👋",
    "A web designer",
    "A web Developer",
    "A graphic designer",
  ];

  return (
    <div
      className=" text-black dark:text-white cc"
      style={{ color: "#4770ff", fontSize: "40px", fontWeight: "bold" }}
    >
      <div>
        <span className=" text-black dark:text-white"> HI, I am </span>{" "}
        <Typewriter words={words} loop={false} cursorStyle="|" Cursor />
      </div>
      <div className="border-2 ml-2 animate-pulse border-[#4770ff] h-[40px] rounded-full"></div>
    </div>
  );
};

export default TypeWriter;
