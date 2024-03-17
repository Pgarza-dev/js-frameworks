import React from "react";
import Container from "@/components/container/Container";
import { motion } from "framer-motion";

interface BannerTextProps {
  title: string;
}

export default function BannerText({ title }: BannerTextProps) {
  return (
    <div
      aria-hidden="true"
      className="hidden sm:inline-block md:inline-block lg:inline-block absolute top-0 left-7 w-full h-full"
      role="banner">
      <Container className="flex flex-col gap-y-6 justify-center h-full">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-extrabold text-white drop-shadow-xl">
          {title}
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-500">
          Urban Edge: Authentic street fashion. <br />
          Shop the latest trends.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex gap-x-4 mt-2 z-50 ">
          <a
            href="/about"
            className="py-2 z-50 px-6 rounded-full cursor-pointer duration-200 text-gray-500 border-[2px] border-lightModePrimary hover:text-white hover:bg-lightModePrimary"
            aria-label="Find out more">
            Find out more
          </a>
          <a
            href="#productCard"
            className="py-2 px-6 z-50 rounded-full bg-white cursor-pointer text-lightModeText hover:bg-lightModePrimary hover:text-white duration-200"
            aria-label="Shop now">
            Shop now
          </a>
        </motion.div>
      </Container>
    </div>
  );
}
