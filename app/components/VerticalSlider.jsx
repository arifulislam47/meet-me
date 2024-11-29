import React, { Component } from "react";
import Slider from "react-slick";
import MarqueeComponent from "./MarqueeComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function VerticalSwipeToSlide() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1999,
    speed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <MarqueeComponent />
        <MarqueeComponent />
        <MarqueeComponent />
        <MarqueeComponent />
        <MarqueeComponent />
      </Slider>
    </div>
  );
}

export default VerticalSwipeToSlide;
