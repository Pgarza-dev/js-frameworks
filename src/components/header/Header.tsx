import React from "react";
import Container from "../container/container";
import Logo from "../logo/Logo";
import { BsCart } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

export default function Header() {
  return (
    <header className="bg-bglight h-20 ">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Search bar */}
        <div className="group w-full hidden bg-white md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600">
          <GoSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search for products"
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
        {/* Login Button */}
        <div>
          <BsCart className="text-3xl text-lightText" />
          <p>Login/Register</p>
        </div>
        {/* cart button */}
      </Container>
    </header>
  );
}
