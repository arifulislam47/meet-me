import React from "react";
import { FaStar } from "react-icons/fa"; // Importing the star icon

const ReviewCard = () => {
  return (
    <div className=" lg:w-1/2 p-4 w-[376px]">
      <div className="feedback-item bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="feedback-top-info flex justify-between items-center">
          <div className="rating text-yellow-500 gap-1 flex">
           
              <FaStar className="text-lg" />
              <FaStar className="text-lg" />
              <FaStar className="text-lg" />
              <FaStar className="text-lg" />
              <FaStar className="text-lg" />
           
          </div>
          <div className="website text-blue-500">
            <a href="#" className="flex items-center">
              Framer.com
              <svg
                className="arrow-up ml-2"
                width="14px"
                height="15px"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.91634 4.5835L4.08301 10.4168"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4.66699 4.5835H9.91699V9.8335"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="details my-4">
          <p className="text-gray-600">
            "We've been using BentoFolio for over a year now, and I must say,
            it's been a game-changer for us. The user interface is intuitive
            and the feature."
          </p>
        </div>
        <div className="designation text-sm text-gray-500">
          <p>
            <span className="font-semibold">Oliver Clain</span> - Product Designer
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
