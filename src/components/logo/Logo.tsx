import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h3 className=" text-3xl font-semibold text-lightText hover:text-lightText/30 cursor-pointer duration-200">
        RainyDays
      </h3>
    </Link>
  );
}
