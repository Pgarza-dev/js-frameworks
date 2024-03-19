import AboutBanner from "@/components/aboutBanner/AboutBanner";
import Container from "@/components/container/Container";
import Image from "next/image";
import React from "react";
import stillLife from "@/app/public/images/stillLife.jpg";

export default function About() {
  return (
    <div>
      <AboutBanner />
      <Container className="poppins-thin text-sm text-center flex flex-col w-2/5 gap-6">
        <div>
          <div className="mt-12">
            <p>
              Our products are proudly produced without the use of child labor
              and are supported by human rights principles worldwide.
            </p>
          </div>
          <div>
            <p>
              All of our garments are made with 100% recycled fabric, reflecting
              our dedication to reducing waste and minimizing our environmental
              footprint.
            </p>
          </div>
        </div>
      </Container>

      <div className="flex gap-24">
        <Image
          src={stillLife}
          alt="leaf and flower still life photo"
          width={500}
          height={500}
          className="w-2/5 h-auto object-cover "
          priority={true}
        />
        <div className="max-w-96 flex flex-col gap-10">
          <h2 className="text-2xl poppins-thin uppercase">
            Our Mission to save the world
          </h2>
          <p>
            Our products are proudly produced without the use of child labor and
            are supported by human rights principles worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
