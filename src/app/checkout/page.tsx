"use client";
import useProductStore from "@/store/cart";
import { ProductDetailsProps } from "../products/[productsId]/page";
import { useEffect } from "react";
import { Product } from "@/app/products/Products";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import Link from "next/link";
import Container from "@/components/container/Container";

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
      <Container className="">
        <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
          <div className="flex flex-row justify-between py-4">
            <Link href="/">
              <button className="capitalize">back to products</button>
            </Link>
            <button onClick={clearCart} className="capitalize">
              empty cart
            </button>
          </div>

          <div className="flex flex-col bg-white p-6 gap-y-6">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <div className="flex gap-4">
                          <Image
                            src={item.image.url}
                            alt={item.title}
                            width={100}
                            height={100}
                          />
                          <div>
                            <h2 className="uppercase">{item.title}</h2>
                            <p className="text-gray-500">{item.description}</p>
                          </div>
                        </div>
                      </td>
                      <td>{item.price}</td>
                      <td>
                        <div className="flex flex-row items-center justify-center">
                          <button
                            onClick={() => addToCart(item.id)}
                            className=" px-3 hover:bg-lightText font-extrabold">
                            <BiPlus />
                          </button>
                          <span className="px-6">{item.quantity}</span>
                          <button
                            onClick={() => deleteProductFromCart(item.id)}
                            className=" px-3 hover:bg-lightText font-extrabold">
                            <BiMinus />
                          </button>
                        </div>
                      </td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Checkout;
