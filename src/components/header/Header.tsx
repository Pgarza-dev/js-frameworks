import React from "react";
import Container from "../container/container";
import Logo from "../logo/Logo";
import { BsCart } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { RiUserShared2Line } from "react-icons/ri";

export default function Header() {
  return (
    <header className="lightModeBody h-20 ">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Search bar */}
        <div className="group w-full hidden border-2 md:flex items-center gap-x-1 bg-white rounded-full px-4 py-1.5 focus-within:border-lightModePrimary focus-within:bg-white">
          <GoSearch className="text-lightModeText group-focus-within:text-darkText duration-200 " />
          <input
            type="text"
            placeholder="Search for products"
            className="text-lightModeText placeholder:text-sm placeholder:text-lightModeText flex-1 outline-none bg-white focus:placeholder:text-darkText focus:bg-white"
          />
        </div>
        {/* Login Button */}
        <div className=" text-lightModeText border-2 bg-white flex items-center justify-center p-1.5 rounded-full hover:border-2 hover:border-lightModePrimary cursor-pointer hover:text-lightModeText/30 duration-200">
          <RiUserShared2Line className="text-xl text-lightModeText" />
          <p className="text-sm ps-1">Login/Register</p>
        </div>
        {/* cart button */}
        <div className="relative bg-lightModeText rounded-full text-lightText flex items-center justify-center gap-x-1 px-3 py-1.5">
          <BsCart className="text-xl text-lightText" />
          <p className="text-sm ps-1">$0.00</p>
          <span className="bg-lightModeBody shadow-xl shadow-black text-orange-500 rounded-full text-sm font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center">
            0
          </span>
        </div>
      </Container>
    </header>
  );
}
