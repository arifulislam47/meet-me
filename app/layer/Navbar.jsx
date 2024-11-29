"use client";

import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Link from "next/link";
import { TbSmartHome } from "react-icons/tb";
import { PiUserSquare } from "react-icons/pi";
import { FiLayers } from "react-icons/fi";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { BiMessageAltDots } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoReturnDownForward } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Navbar = () => {
  let [active, setActive] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  let pathName = usePathname();

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky ${
        isScrolled ? "top-0" : "top-5"
      } z-[100] transition-all duration-300 `}
    >
      <Container className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:bg-black dark:border-gray-800 border bg-white border-gray-100 rounded-2xl  pl-[24px] py-[10px] pr-[10px]">
        <div className="jb">
          <div className=" dark:text-white font-semibold font-poppins flex gap-2 items-center">
            <svg
              className=" dark:fill-white"
              width="18"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V22.5C10.5 22.8978 10.342 23.2794 10.0607 23.5607C9.77936 23.842 9.39782 24 9 24H1.5C1.10218 24 0.720644 23.842 0.43934 23.5607C0.158035 23.2794 0 22.8978 0 22.5V1.5ZM13.5 1.5C13.5 1.10218 13.658 0.720644 13.9393 0.43934C14.2206 0.158035 14.6022 0 15 0L22.5 0C22.8978 0 23.2794 0.158035 23.5607 0.43934C23.842 0.720644 24 1.10218 24 1.5V9C24 9.39782 23.842 9.77936 23.5607 10.0607C23.2794 10.342 22.8978 10.5 22.5 10.5H15C14.6022 10.5 14.2206 10.342 13.9393 10.0607C13.658 9.77936 13.5 9.39782 13.5 9V1.5ZM13.5 15C13.5 14.6022 13.658 14.2206 13.9393 13.9393C14.2206 13.658 14.6022 13.5 15 13.5H22.5C22.8978 13.5 23.2794 13.658 23.5607 13.9393C23.842 14.2206 24 14.6022 24 15V22.5C24 22.8978 23.842 23.2794 23.5607 23.5607C23.2794 23.842 22.8978 24 22.5 24H15C14.6022 24 14.2206 23.842 13.9393 23.5607C13.658 23.2794 13.5 22.8978 13.5 22.5V15Z"
                class="logo-icon"
              ></path>
            </svg>
            <h2 className=" text-black dark:text-white font-poppins text-xl">
            meet <span className=" text-[#4770ff] dark:text-[#4770ff]">me</span>
            </h2>
          </div>
          <ul className=" flex gap-2 font- font-[600]">
            <li>
              <Link
                className={` flex items-center gap-1 py-[8px] px-[10px] transition-all duration-300 rounded-md ${
                  pathName === "/"
                    ? "dark:bg-gray-900 dark:text-white bg-gray-200 text-gray-800"
                    : "dark:hover:bg-gray-900 hover:bg-gray-200 hover:text-gray-800 dark:hover:text-white text-gray-400"
                } `}
                href={"/"}
              >
                <TbSmartHome className=" text-[18px]" /> Home
              </Link>
            </li>
            <li>
              <Link
                className={` flex items-center gap-1 py-[8px] px-[10px] transition-all duration-300 rounded-md ${
                  pathName === "/about"
                    ? "dark:bg-gray-900 dark:text-white bg-gray-200 text-gray-800"
                    : "dark:hover:bg-gray-900 hover:bg-gray-200 hover:text-gray-800 dark:hover:text-white text-gray-400"
                } `}
                href={"/about"}
              >
                <PiUserSquare className=" text-[18px]" /> About
              </Link>
            </li>
            <li>
              <Link
                className={` flex items-center gap-1 py-[8px] px-[10px] transition-all duration-300 rounded-md ${
                  pathName === "/services"
                    ? "dark:bg-gray-900 dark:text-white bg-gray-200 text-gray-800"
                    : "dark:hover:bg-gray-900 hover:bg-gray-200 hover:text-gray-800 dark:hover:text-white text-gray-400"
                } `}
                href={"/services"}
              >
                <FiLayers className=" text-[17px]" /> Services
              </Link>
            </li>
            <li>
              <Link
                className={` flex items-center gap-1 py-[8px] px-[10px] transition-all duration-300 rounded-md ${
                  pathName === "/project"
                    ? "dark:bg-gray-900 dark:text-white bg-gray-200 text-gray-800"
                    : "dark:hover:bg-gray-900 hover:bg-gray-200 hover:text-gray-800 dark:hover:text-white text-gray-400"
                } `}
                href={"/project"}
              >
                <IoCodeWorkingSharp className=" text-[18px]" /> Project
              </Link>
            </li>
            <li>
              <Link
                className={` flex items-center gap-1 py-[8px] px-[10px] transition-all duration-300 rounded-md ${
                  pathName === "/contact"
                    ? "dark:bg-gray-900 dark:text-white bg-gray-200 text-gray-800"
                    : "dark:hover:bg-gray-900 hover:bg-gray-200 hover:text-gray-800 dark:hover:text-white text-gray-400"
                } `}
                href={"/contact"}
              >
                <BiMessageAltDots className=" text-[18px]" /> Contact
              </Link>
            </li>
          </ul>

          <div className=" flex gap-[16px] items-center">
            <div onClick={toggleTheme} className=" cursor-pointer relative">
              <MdDarkMode
                className={`text-[25px] transition-all duration-500 absolute ${
                  theme === "light"
                    ? " opacity-100 visible rotate-[360deg]"
                    : " opacity-0 invisible"
                } `}
              />{" "}
              <CiLight
                className={`text-[25px] ${
                  theme === "dark"
                    ? " dark:text-white opacity-100 visible rotate-[360deg]"
                    : " opacity-0 invisible"
                }`}
              />
            </div>

            {/* contact button */}
            <button className="rounded-md text-white dark:bg-gray-900 bg-black font-Bricolage py-[10px] px-[24px]">
              <Link
                className=" flex items-center gap-2 font-poppins"
                href={"/contact"}
              >
                Let's Talk <IoReturnDownForward className=" text-xl" />{" "}
              </Link>{" "}
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
