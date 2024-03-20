"use client";
import React, { useState } from "react";
import useFetch from "@/hooks/data";
import { API_PRODUCTS } from "@/shared/apis";
import Container from "../container/Container";
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

  return (
    <header className="bg-lightModeBody h-20 top-0 sticky z-50 border-b-[1px] border-b-gray-500">
      <Container className="h-full flex flex-row items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Search bar */}
        <SearchBar />
        {/* Login Button */}
        <Link href="/login">
          <span className=" rounded-full cursor-pointer duration-200 text-gray-500 hover:text-darkText">
            <RiUserShared2Line className="text-xl" />
            {/* <p className="text-sm ps-1">Login/Register</p> */}
          </span>
        </Link>

        {/* about page */}
        <Link href="/about">
          <span className="duration-200 text-gray-500 hover:text-darkText text-sm">
            About
          </span>
        </Link>
        {/* contact page */}
        <Link href="/contact">
          <span className="duration-200 text-gray-500 hover:text-darkText text-sm">
            Contact
          </span>
        </Link>
        {/* cart button */}
        <Link href="/checkout">
          <div className="relative bg-lightModeText rounded-full text-lightText flex items-center justify-center gap-x-1 px-3 py-1.5 text-sm">
            <BsCart className="text-xl text-lightText" />
            {/* <p className="text-sm ps-1">{Number(getCartTotal()).toFixed(2)}</p> */}
            <FormattedPrice amount={getCartTotal()} />
            <span className="bg-lightModeBody shadow-xl shadow-black text-orange-500 rounded-full text-sm font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center">
              {getTotalNumberOfItemsInCart()}
            </span>
          </div>
        </Link>
      </Container>
    </header>
  );
}
