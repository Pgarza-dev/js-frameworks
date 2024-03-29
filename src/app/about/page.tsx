import AboutBanner from "@/components/aboutBanner/AboutBanner";
import Container from "@/components/container/container";
import Image from "next/image";
import React from "react";
import stillLife from "@/app/public/images/stillLife.jpg";
import peacefulWorld from "@/app/public/images/peacefulWorld.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function About() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <AboutBanner />
      <Container className="poppins-thin text-center flex flex-col max-w-[60rem]">
        <div className=" gap-4 flex-col flex md:">
          <div className="flex flex-col poppins-thin text-justify">
            <h2 className="lg:text-3xl md:text-xl font-semibold md:font-normal poppins-thin uppercase py-4 lg:text-pretty text-center">
              Our beliefs
            </h2>
            <div className="flex flex-row items-start poppins-thin-italic border-r-2 border-l-2 p-4 border-lightModePrimary">
              <blockquote className="md:text-base flex-grow p-0 md:p10">
                <span className="before:block before:absolute relative inline-block pe-1 pb-2 text-2xl">
                  <RiDoubleQuotesL className="text-lightModePrimary" />
                </span>
                Our products are proudly produced without the use of child labor
                and are supported by human rights principles worldwide. All of
                our garments are made with 100% recycled fabric, reflecting our
                dedication to reducing waste and minimizing our environmental
                footprint.
                <span className="after:block after:absolute relative inline-block ps-1 pb-2 text-2xl">
                  <RiDoubleQuotesR className="text-lightModePrimary" />
                </span>
                <span className="text-sm poppins-semibold-italic">
                  {" "}
                  - Pablo Garza
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </Container>

      <div className="flex flex-row flex-wrap-reverse md:flex-nowrap sm:p-0 bg-lightModePrimary bg-opacity-40 ">
        <Image
          src={stillLife}
          alt="leaf and flower still life photo"
          width={500}
          height={500}
          className="md:w-1/2 lg:h-[50rem] object-cover border-[1px] border-gray-300"
          priority={true}
        />
        <div className="lg:w-1/2 lg:h-[50rem] flex flex-col justify-center text-justify items-center p-0 md:p-4 gap-0 sm:gap-4">
          <div className="border-8 p-6 border-green-500 md:border-opacity-55 border-opacity-0 sm:border-opacity-0">
            <div className="flex flex-col poppins-extralight lg:w-96 ">
              <h2 className="lg:text-3xl md:text-xl font-semibold md:font-normal poppins-thin uppercase py-4 lg:text-pretty">
                Our Mission to save the planet
              </h2>
              <p className="lg:text-base md:text-sm">
                Our products are proudly produced without the use of child labor
                and are supported by human rights principles worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse bg-lightModePrimary bg-opacity-40 ">
        <Image
          src={peacefulWorld}
          alt="leaf and flower still life photo"
          width={500}
          height={500}
          className="md:w-1/2 lg:h-[50rem] object-cover border-[1px] border-gray-300"
          priority={true}
        />
        <div className="lg:w-1/2 lg:h-[50rem] flex flex-col justify-center text-justify items-center p-0 md:p-4 gap-0 sm:gap-4">
          <div className="border-8 p-6 border-blue-500 md:border-opacity-55 border-opacity-0">
            <div className="flex flex-col poppins-extralight lg:w-96">
              <h2 className="lg:text-3xl md:text-xl font-semibold md:font-normal poppins-thin uppercase py-4 lg:text-pretty lg:tracking-widest">
                World Peace and Social Justice
              </h2>
              <p className="lg:text-base md:text-sm">
                By choosing UrbanFinds, you are not just getting stylish clothing
                ,you are supporting a company that values human rights, social
                justice, and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
