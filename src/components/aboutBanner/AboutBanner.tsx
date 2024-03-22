import React from "react";
import Image from "next/image";
import saveWorld from "@/app/public/images/saveWorld.jpg";

export default function AboutBanner() {
  return (
    <div >
      <Image
        src={saveWorld}
        alt="save the world banner"
        width={1280}
        height={1080}
        className="w-full h-[30rem] max-w-[1500px] mx-auto object-fill"
        priority={true}
      />
    </div>
  );
}
