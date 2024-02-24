"use client"; // The Slider is a third-party library that is not compatible with the server-side rendering. So, we need to use the client-side rendering for this component.
import React from "react";
import Slider from "react-slick";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import { PiCaretLeftLight } from "react-icons/pi";
import { PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import BannerText from "../bannerText/bannerText";

export default function Banner() {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <PiCaretRightLight />
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="w-full h-full relative">
          <Image
            src={banner1}
            alt="banner1"
            className="w-full h-full relative image-height "
          />
          <BannerText title="Sleek Picks" />
        </div>
        <div>
          <Image
            src={banner2}
            alt="banner2"
            className="w-full h-full relative image-height"
          />
          <BannerText title="Sleek Picks" />
        </div>
        <div>
          <Image
            src={banner3}
            alt="banner3"
            className="w-full h-full relative image-height"
          />
          <BannerText title="Sleek Picks" />
        </div>
      </Slider>
    </div>
  );
}
