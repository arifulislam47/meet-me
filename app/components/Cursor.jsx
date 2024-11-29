"use client";
// components/Cursor.js
import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);


  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 -top-2.5 -left-2.5 bg-black rounded-full mix-blend-difference filter-blur pointer-events-none"
      style={{
        filter: "url(#goo)",
      }}
    />
  );
};

export default Cursor;
