"use client";
import useProductStore from "@/store/cart";
import { ProductDetailsProps } from "../products/[productsId]/page";
import { useEffect } from "react";
import { Product } from "@/app/products/Products";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";

function Checkout() {
  const {
    cart,
    addToCart,
    clearCart,
    deleteProductFromCart,
    getTotalNumberOfItemsInCart,
  } = useProductStore();

  return (
    <div>
      <h1>this is the checkout page</h1>
      <button
        onClick={clearCart}
        className="border border-black px-4 py-1 uppercase">
        empty cart
      </button>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <Image
              src={item.image.url}
              alt={item.title}
              width={100}
              height={100}
            />
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <p>{item.description}</p>
            <button>
              <BiPlus
                onClick={() => addToCart(item.id)}
                className="border border-red-500"
              />
            </button>
            <button onClick={() => deleteProductFromCart(item.id)}>
              <BiMinus className="border border-red-500" />
            </button>
            {/* <button
              onClick={() => deleteProductFromCart(item.id)}
              className="border border-black px-4 py-1 uppercase">
              remove from cart
            </button> */}
          </div>
        );
      })}
    </div>
  );
}

export default Checkout;
