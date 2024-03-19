import React from "react";
import Image from "next/image";
import saveWorld from "@/app/public/images/saveWorld.jpg";

export default function AboutBanner() {
  return (
    <Image
      src={saveWorld}
      alt="save the world banner"
      width={1280}
      height={1080}
      className="w-full h-96 mx-auto"
      priority={true}
      
    />
  );
}
