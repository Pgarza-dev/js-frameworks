import AboutBanner from "@/components/aboutBanner/AboutBanner";
import Container from "@/components/container/Container";
import Image from "next/image";
import React from "react";
import stillLife from "@/app/public/images/stillLife.jpg";
import peacefulWorld from "@/app/public/images/peacefulWorld.jpg";

export default function About() {
  return (
    <div>
      <AboutBanner />
      <Container className="poppins-thin text-center flex flex-col">
        <div className=" gap-4 flex-col flex md:">
          <div className="flex flex-col poppins-extralight text-justify">
            <h2 className="lg:text-3xl md:text-xl font-semibold md:font-normal poppins-thin uppercase py-4 lg:text-pretty text-center">
              Our beliefs
            </h2>
            <p className="lg:text-base md:text-sm">
              Our products are proudly produced without the use of child labor
              and are supported by human rights principles worldwide. All of our
              garments are made with 100% recycled fabric, reflecting our
              dedication to reducing waste and minimizing our environmental
              footprint.
            </p>
          </div>
        </div>
      </Container>

      <div className="flex flex-row flex-wrap-reverse md:flex-nowrap sm:p-0">
        <Image
          src={stillLife}
          alt="leaf and flower still life photo"
          width={500}
          height={500}
          className="md:w-1/2 lg:h-[50rem] object-cover border-[1px] border-gray-300"
          priority={true}
        />
        <div className="lg:w-1/2 lg:h-[50rem] flex flex-col justify-center text-justify p-4 items-center gap-0 sm:gap-4">
          <div className="flex flex-col poppins-extralight lg:w-96">
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
      <div className="flex flex-col-reverse md:flex-row-reverse">
        <Image
          src={peacefulWorld}
          alt="leaf and flower still life photo"
          width={500}
          height={500}
          className="md:w-1/2 lg:h-[50rem] object-cover border-[1px] border-gray-300"
          priority={true}
        />
        <div className="lg:w-1/2 lg:h-[50rem] flex flex-col justify-center text-justify items-center gap-0 sm:gap-4">
          <div className="flex flex-col poppins-extralight lg:w-96">
            <h2 className="lg:text-3xl md:text-xl font-semibold md:font-normal poppins-thin uppercase py-4 lg:text-pretty lg:tracking-widest">
              World Peace and Social Justice
            </h2>
            <p className="lg:text-base md:text-sm">
              By choosing UrbanFinds, you're not just getting stylish clothing –
              you're supporting a company that values human rights, social
              justice, and environmental stewardship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
