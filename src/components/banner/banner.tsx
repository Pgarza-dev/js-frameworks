"use client"; // The Slider is a third-party library that is not compatible with the server-side rendering. So, we need to use the client-side rendering for this component.

import Slider from "react-slick";
import bannerOne from "@/images/bannerOne.jpg";
import bannerTwo from "@/images/bannerTwo.jpg";
import bannerThree from "@/images/bannerThree.jpg";

import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
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
            className="w-full h-full relative image-height"
            priority
          />
          <BannerText title="Street wear" />
        </div>
        <div className="w-full h-full relative">
          <Image
            src={bannerTwo}
            alt="bannerTwo"
            className="w-full h-full relative image-height"
            priority
          />
          <BannerText title="Street wear" />
        </div>
        <div className="w-full h-full relative">
          <Image
            src={bannerThree}
            alt="bannerThree"
            className="w-full h-full relative image-height"
            priority
          />
          <BannerText title="Street wear" />
        </div>
      </Slider>
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
    </div>
  );
}
