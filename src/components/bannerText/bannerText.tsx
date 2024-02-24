import React from "react";
import Container from "../container/container";
import { motion } from "framer-motion";

interface BannerTextProps {
  title: string;
}

export default function BannerText({
  title,
}: BannerTextProps) {
  return (
    <div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
      <Container className="flex flex-col gap-y-6 justify-center">
        <h2 className="text-7xl font-bold text-red">
          {title}
        </h2>
      </Container>
    </div>
  );
}
