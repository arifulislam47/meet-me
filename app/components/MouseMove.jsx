"use client";

import React, { useState, useEffect } from "react";

const MouseMove = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="fixed z-[100] bg-[#4770ff] opacity-[50%] rounded-full pointer-events-none "
        style={{
          top: `${mousePosition.y + -5}px`,
          left: `${mousePosition.x + -5}px`,
          width: "10px",
          height: "10px",
        }}
      ></div>
    </div>
  );
};

export default MouseMove;
