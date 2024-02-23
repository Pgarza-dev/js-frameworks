import React from "react";
import Container from "../container/container";
import Logo from "../logo/Logo";
import { BsCart } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { RiUserShared2Line } from "react-icons/ri";

export default function Header() {
  return (
    <header className="bodyColor h-20 ">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Search bar */}
        <div className="group w-full hidden bg-primary md:flex items-center gap-x-1  rounded-full px-4 py-1.5 focus-within:border-lightText focus-within:bg-lightText">
          <GoSearch className="text-lightText group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search for products"
            className="text-lightText placeholder:text-sm placeholder:text-lightText flex-1 outline-none bg-primary focus:placeholder:text-darkText focus:bg-lightText"
          />
        </div>
        {/* Login Button */}
        <div className=" text-lightText  flex items-center justify-center p-1.5 rounded-full hover:text-lightText/30 duration-200">
          <RiUserShared2Line className="text-xl text-lightText" />
          <p className="text-sm ps-1">Login/Register</p>
        </div>
        {/* cart button */}
        <div className="relative bg-bodyColor rounded-full text-lightText flex items-center justify-center gap-x-1 px-3 py-1.5">
          <BsCart className="text-xl text-lightText" />
          <p className="text-sm ps-1">$0.00</p>
          <span className="bg-lightText shadow-xl shadow-black text-primary rounded-full text-sm font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center">
            0
          </span>
        </div>
      </Container>
    </header>
  );
}
