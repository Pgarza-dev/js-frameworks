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
import { GoTrash } from "react-icons/go";

function Checkout() {
  const {
    cart,
    addToCart,
    clearCart,
    deleteProductFromCart,
    getTotalNumberOfItemsInCart,
    deleteSingleProductFromCart,
    addSingleProductToCart,
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
                <tr className="border-b">
                  <th className="inline-flex">Item</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <div className="flex flex-col gap-x-6 pt-8">
                          <h2 className="uppercase py-1">{item.title}</h2>
                          <Image
                            src={item.image.url}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="rounded-lg object-cover"
                          />
                          <div className="pt-4">
                            <p className="text-gray-500 hidden md:block">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="flex flex-row items-center justify-center">
                          <button
                            onClick={() => addSingleProductToCart(item.id)}
                            className=" px-1 hover:bg-lightText font-extrabold">
                            <BiPlus />
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button
                            onClick={() => deleteSingleProductFromCart(item.id)}
                            className=" px-1 hover:bg-lightText font-extrabold">
                            <BiMinus />
                          </button>
                        </div>
                      </td>
                      <td className="ps-6">
                        {(Number(item.price) * Number(item.quantity)).toFixed(
                          2
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => deleteProductFromCart(item.id)}
                          className="text-lg text-gray-500 p-1 bg-white hover:shadow-sm  hover:text-red-500">
                          <GoTrash />
                        </button>
                      </td>
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
