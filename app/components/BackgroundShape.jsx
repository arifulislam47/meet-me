import React from "react";

const BackgroundShape = ({ className }) => {
  return (
    <div>
      <div className={`fixed -z-10 top-[20%] left-[8%] ${className}`}>
        <img className=" dark:opacity-[90%]" src="/circle.png" alt="" />
      </div>
      <div className={`fixed -z-10 bottom-[20%] right-[5%] ${className}`}>
        <img className=" dark:opacity-[90%]" src="/spring.png" alt="" />
      </div>
    </div>
  );
};

export default BackgroundShape;
