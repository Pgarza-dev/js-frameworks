"use client";
import React from "react";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import { BsCart } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { RiUserShared2Line } from "react-icons/ri";
import useProductStore from "@/store/cart";
import Link from "next/link";
import FormattedPrice from "../formattedPrices/FormattedPrices";

export default function Header() {
  const { cart, getCartTotal, getTotalNumberOfItemsInCart } = useProductStore();
  // console.log({ cart });

  return (
    <header className="bg-lightModeBody h-20 top-0 sticky z-50">
      <Container className="h-full flex flex-row items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Search bar */}
        <div className="group w-full border-2 hidden md:flex items-center gap-x-1 bg-white rounded-full px-4 py-1.5 focus-within:border-lightModePrimary">
          <GoSearch className="text-lightModeText group-focus-within:text-darkText duration-200 " />
          <input
            type="text"
            placeholder="Search for products"
            className="text-lightModeText placeholder:text-sm placeholder:text-gray-400 flex-1 outline-none bg-white focus:placeholder:text-darkText focus:bg-white"
          />
        </div>
        {/* Login Button */}
        <div className=" text-lightModeText border-2 hidden bg-white sm:flex items-center justify-center p-1.5 rounded-full hover:border-2 hover:border-lightModePrimary cursor-pointer hover:text-lightModeText/30 duration-200">
          <RiUserShared2Line className="text-xl text-lightModeText" />
          <p className="text-sm ps-1">Login/Register</p>
        </div>
        {/* cart button */}
        <Link href="/checkout">
          <div className="relative bg-lightModeText rounded-full text-lightText flex items-center justify-center gap-x-1 px-3 py-1.5">
            <BsCart className="text-xl text-lightText" />
            {/* <p className="text-sm ps-1">{Number(getCartTotal()).toFixed(2)}</p> */}
            <FormattedPrice amount={getCartTotal()} />
            <span className="bg-lightModeBody shadow-xl shadow-black text-orange-500 rounded-full text-sm font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          </div>
        </Link>
      </Container>
    </header>
  );
}
