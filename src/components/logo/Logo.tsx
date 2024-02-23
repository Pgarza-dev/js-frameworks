import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h3 className=" text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-accent to-primary  cursor-pointer duration-700 hover:animate-pulse">
        UrbanFinds
      </h3>
    </Link>
  );
}
