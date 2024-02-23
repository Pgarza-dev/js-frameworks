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
        <div className="group w-full hidden bg-primary md:flex items-center gap-x-1  rounded-full px-4 py-1.5 focus-within:border-lightText">
          <GoSearch className="text-lightText group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search for products"
            className="text-lightText placeholder:text-sm placeholder:text-lightText flex-1 outline-none bg-primary focus:placeholder:text-darkText "
          />
        </div>
        {/* Login Button */}
        <div className="bg-bgLight text-gray-500 flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-lightText hover:border-orange-500 duration-200">
          <RiUserShared2Line className="text-xl text-lightText" />
          <p className="text-sm font-semibold ps-1">
            Login/Register
          </p>
        </div>
        {/* cart button */}
        <div className="relative duration-200 border-[1px] hover:border-gray-300 bg-black hover:bg-bodyColor rounded-full text-slate-100 hover:text-slate-900 flex items-center justify-center gap-x-1 px-3 py-1.5">
          <BsCart className="text-xl text-lightText" />
          <p className="text-sm font-semibold ps-1">
            $0.00
          </p>
          <span className="bg-white shadow-xl shadow-black text-orange-600 rounded-full text-sm font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center">
            0
          </span>
        </div>
      </Container>
    </header>
  );
}
