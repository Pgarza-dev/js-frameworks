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
    <Container className="flex flex-col gap-y-2">
      <div className="hidden sm:inline-flex md:inline-flex lg:inline-flex items-center justify-between font-semibold bg-white p-2">
        <p className="w-1/3">Product</p>
        <p className="w-1/3 flex justify-center items-center ">Quantity</p>
        <p className="w-1/3 flex justify-end items-center ">Subtotal</p>
      </div>
      <div className="flex flex-col gap-2">
        {cart.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row lg:items-center lg:justify-between bg-white p-2">
              <div className="flex flex-row items-center gap-x-2 w-full">
                <div className="w-1/3">
                  <h2 className="uppercase py-1 text-gray-500">{item.title}</h2>
                  <Image
                    src={item.image.url}
                    alt="product image"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover w-20 h-20 lg:w-32 lg:h-32"
                  />
                </div>
                <div className="p-4 text-center text-pretty text-sm">
                  <p className="text-gray-500 hidden md:block">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="w-1/3 flex justify-center items-center">
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
              <div className="w-1/3 flex justify-end items-center">
                {(Number(item.price) * Number(item.quantity)).toFixed(2)}
                <button
                  onClick={() => deleteProductFromCart(item.id)}
                  className="text-lg text-gray-500 px- bg-white hover:shadow-sm  hover:text-red-500">
                  <GoTrash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <button
          onClick={clearCart}
          className="capitalize bg-primary text-base font-medium text-white py-2 px-6 hover:bg-red-500 duration-200">
          empty cart
        </button>
      </div>
    </Container>

    // <Container className="">
    //   <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
    //     <div className="flex flex-row justify-between py-4">
    //       <Link href="/">
    //         <button className="capitalize">back to products</button>
    //       </Link>
    //       <button onClick={clearCart} className="capitalize">
    //         empty cart
    //       </button>
    //     </div>

    //     <div className="flex flex-col bg-white p-6 gap-y-6">
    //       <table className="w-full">
    //         <thead>
    //           <tr className="border-b">
    //             <th className="inline-flex">Item</th>
    //             <th>Quantity</th>
    //             <th>Total</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {cart.map((item) => {
    //             return (
    //               <tr key={item.id}>
    //                 <td>
    //                   <div className="flex flex-col gap-x-6 pt-8">
    //                     <h2 className="uppercase py-1">{item.title}</h2>
    //                     <Image
    //                       src={item.image.url}
    //                       alt={item.title}
    //                       width={200}
    //                       height={200}
    //                       className="rounded-lg object-cover"
    //                     />
    //                     <div className="pt-4">
    //                       <p className="text-gray-500 hidden md:block">
    //                         {item.description}
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </td>

    //                 <td>
    //                   <div className="flex flex-row items-center justify-center">
    //                     <button
    //                       onClick={() => addSingleProductToCart(item.id)}
    //                       className=" px-1 hover:bg-lightText font-extrabold">
    //                       <BiPlus />
    //                     </button>
    //                     <span className="px-3">{item.quantity}</span>
    //                     <button
    //                       onClick={() => deleteSingleProductFromCart(item.id)}
    //                       className=" px-1 hover:bg-lightText font-extrabold">
    //                       <BiMinus />
    //                     </button>
    //                   </div>
    //                 </td>
    //                 <td className="ps-6">
    //                   {(Number(item.price) * Number(item.quantity)).toFixed(
    //                     2
    //                   )}
    //                 </td>
    //                 <td>
    //                   <button
    //                     onClick={() => deleteProductFromCart(item.id)}
    //                     className="text-lg text-gray-500 p-1 bg-white hover:shadow-sm  hover:text-red-500">
    //                     <GoTrash />
    //                   </button>
    //                 </td>
    //               </tr>
    //             );
    //           })}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </Container>
  );
}

export default Checkout;
