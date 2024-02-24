"use client"; // The Slider is a third-party library that is not compatible with the server-side rendering. So, we need to use the client-side rendering for this component.
import React from "react";
import Slider from "react-slick";
import bannerOne from "../../images/bannerOne.jpg";
import bannerTwo from "../../images/bannerTwo.jpg";
import bannerThree from "../../images/bannerThree.jpg";
import {
  PiCaretLeftLight,
  PiCaretRightLight,
} from "react-icons/pi";
import Image from "next/image";
import BannerText from "../bannerText/bannerText";

export default function Banner() {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="p-3 bg-lightText hover:bg-white hover:text-lightModePrimary hover:font-bold cursor-pointer duration-200 rounded-full text-2xl items-center justify-center z-20 absolute right-5 top-1/2">
        <PiCaretRightLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="p-3 bg-lightText hover:bg-white hover:font-bold hover:text-lightModePrimary cursor-pointer duration-200 rounded-full text-2xl items-center justify-center z-20 absolute left-5 top-1/2">
        <PiCaretLeftLight />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
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
            src={bannerOne}
            alt="bannerOne"
            className="w-full h-full relative image-height "
          />
          <BannerText title="Street wear" />
        </div>
        <div>
          <Image
            src={bannerTwo}
            alt="bannerTwo"
            className="w-full h-full relative image-height"
          />
          <BannerText title="Sleek Picks" />
        </div>
        <div>
          <Image
            src={bannerThree}
            alt="bannerThree"
            className="w-full h-full relative image-height"
          />
          <BannerText title="In Season" />
        </div>
      </Slider>
    </div>
  );
}
