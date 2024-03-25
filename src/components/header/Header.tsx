"use client";
import React, { useState } from "react";
import { RiMenuAddFill } from "react-icons/ri";
import Container from "../container/container";
import Logo from "../logo/Logo";
import { BsCart } from "react-icons/bs";
import { RiUserShared2Line } from "react-icons/ri";
import useProductStore from "@/store/cart";
import Link from "next/link";
import FormattedPrice from "../formattedPrices/FormattedPrices";
import SearchBar from "../searchBar/SearchBar";

export default function Header() {
  const { cart, getCartTotal, getTotalNumberOfItemsInCart } = useProductStore();
  // console.log({ cart });

  const [isClicked, setisClicked] = useState(false);
  const toggleNavbar = () => {
    setisClicked(!isClicked);
  };

  return (
    <header className="bg-lightModeBody h-20 top-0 sticky z-50 border-b-[1px] border-b-gray-500">
      <Container className="h-full flex flex-row items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Search bar */}
        <SearchBar />
        {/* Login Button */}
        <Link href="/login" className="hidden md:flex">
          <span className="rounded-full cursor-pointer duration-200 text-gray-500 hover:text-darkText">
            <RiUserShared2Line className="text-xl" />
            {/* <p className="text-sm ps-1">Login/Register</p> */}
          </span>
        </Link>

        {/* about page */}
        <Link className="hidden md:flex" href="/about">
          <span className="duration-200 text-gray-500 hover:text-darkText text-sm">
            About
          </span>
        </Link>
        {/* contact page */}
        <Link href="/contact" className="hidden md:flex">
          <span className="duration-200 text-gray-500 hover:text-darkText text-sm">
            Contact
          </span>
        </Link>
        {/* cart button */}
        <Link href="/checkout" className="">
          <div className="relative bg-lightModeText rounded-full text-lightText flex items-center justify-center gap-x-1 px-3 py-1.5 text-sm">
            <BsCart className="text-xl text-lightText" />
            <FormattedPrice amount={getCartTotal()} />
            <span className="bg-lightModeBody shadow-xl shadow-black text-orange-500 rounded-full text-sm font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center">
              {getTotalNumberOfItemsInCart()}
            </span>
          </div>
        </Link>
        {/* Mobile menu */}
        <div className="md:hidden items-center justify-center">
          <button className="inline-flex items-center justify-center p-2 text-lightModeText rounded-full duration-300:"
            onClick={toggleNavbar}>
            {isClicked ? (
              <RiMenuAddFill className="text-xl rotate-90 duration-300" />
            ) : (
              <RiMenuAddFill className="text-xl duration-300" />
            )}
          </button>
        </div>
        {isClicked && (
          <div className="md:hidden p-4 flex flex-row items-center justify-evenly mx-auto gap-y-4 absolute top-20 left-0 w-full bg-lightModeBody bg-opacity-60 backdrop-blur-sm shadow-xl">
            <Link href="/login" className="group p-2 w-min hover:bg-gray-100 rounded-full">
              <span className=" rounded-full cursor-pointer duration-200 text-gray-500 group-hover:text-darkText">
                <RiUserShared2Line className="text-xl" />
              </span>
            </Link>
            <Link href="/about" className="group p-2 w-min hover:bg-gray-100 rounded-full">
              <span className="group-hover:text-darkText duration-200 text-gray-500 hover:text-darkText text-sm">
                About
              </span>
            </Link>
            <Link href="/contact" className="group p-2 w-min hover:bg-gray-100 rounded-full">
              <span className="group-hover:text-darkText duration-200 text-gray-500 text-sm">
                Contact
              </span>
            </Link>
            <Link href="/checkout" className="group p-2 w-min hover:bg-gray-100 rounded-full">
              <BsCart className="text-xl text-gray-500 group-hover:text-darkText " />
            </Link>
          </div>)}
      </Container>
    </header>
  );
}
