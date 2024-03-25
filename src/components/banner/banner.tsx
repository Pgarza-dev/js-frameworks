"use client"; // The Slider is a third-party library that is not compatible with the server-side rendering. So, we need to use the client-side rendering for this component.
import React from "react";
import Slider from "react-slick";
import bannerOne from "@/app/public/images/bannerOne.jpg";
import bannerTwo from "@/app/public/images/bannerTwo.jpg";
import bannerThree from "@/app/public/images/bannerThree.jpg";

import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import BannerText from "../bannerText/bannerText";

export default function Banner() {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="hidden md:block p-2 bg-white hover:font-bold hover:text-lightModePrimary cursor-pointer duration-200 rounded-full text-2xl items-center justify-center z-20 absolute right-1/3 bottom-10">
        <PiCaretRightLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="hidden md:block p-2 bg-white hover:text-lightModePrimary hover:font-bold cursor-pointer rounded-full text-2xl items-center justify-center z-20 absolute left-1/3 bottom-10">
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
            alt="Street fashion banner"
            className="w-full h-auto relative image-height mx-auto"
            placeholder="blur"
            width={1280}
            height={1080}
            priority={true}
            // sizes="(min-width: 320px) 320px, (min-width: 640px) 640px, (min-width: 1024px) 1024px, (min-width: 1280px) 1280px, (min-width: 1536px) 1536px, 100vw"
          />
          <BannerText title="Street wear" />
        </div>
        <div className="w-full h-full relative">
          <Image
            src={bannerTwo}
            alt="Spring fashion banner"
            className="w-full h-auto relative image-height"
            width={1280}
            height={1080}
            priority={true}
            // sizes="(min-width: 320px) 320px, (min-width: 640px) 640px, (min-width: 1024px) 1024px, (min-width: 1280px) 1280px, (min-width: 1536px) 1536px, 100vw"
          />
          <BannerText title="Spring fashion" />
        </div>
        <div className="w-full h-full relative">
          <Image
            src={bannerThree}
            alt="Sleek looks banner"
            className="w-full h-auto relative image-height"
            width={1280}
            height={1080}
            priority={true}
            // sizes="(min-width: 320px) 320px, (min-width: 640px) 640px, (min-width: 1024px) 1024px, (min-width: 1280px) 1280px, (min-width: 1536px) 1536px, 100vw"
          />
          <BannerText title="Sleek looks" />
        </div>
      </Slider>
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
    </div>
  );
}
