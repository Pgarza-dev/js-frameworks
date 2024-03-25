"use client";
import useProductStore from "@/store/cart";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import Link from "next/link";
import Container from "@/components/container/container";
import { GoTrash } from "react-icons/go";
import PaymentForm from "@/components/paymentForm/PaymentForm";
import CheckoutButton from "@/components/buttons/CheckoutButton";
import EmptyCartButton from "@/components/buttons/EmptyCartButton";
import HomeButton from "@/components/backButton/HomeButton";
import PreviousProduct from "@/components/previousProduct/PreviousProductButton";

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
      <div className="flex flex-row gap-2">
        <HomeButton />
        <PreviousProduct />
      </div>

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
              className="flex flex-col md:flex-row lg:items-center lg:justify-between bg-white p-3 group drop-shadow-xl hover:drop-shadow-none  pb-4">
              <div className="flex flex-row items-center gap-x-2 w-full">
                <div className="w-1/3">
                  <h2 className="uppercase py-1 text-gray-500 text-wrap text-sm sm:text-nowrap">
                    {item.title}
                  </h2>
                  <Link href={`/products/${item.id}`}>
                    <Image
                      src={item.image.url}
                      alt="Purchased product image"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover w-20 h-20 lg:w-32 lg:h-32 shadow-md drop-shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </Link>
                </div>
                <div className="p-4 text-center text-pretty text-sm">
                  <p className="text-gray-500 ">{item.description}</p>
                </div>
              </div>
              <div className="w-1/3 flex justify-start  items-center pt-4 sm:justify-center md:pt-0 ">
                <button
                  onClick={() => deleteSingleProductFromCart(item.id)}
                  className=" px-1 hover:border-[1px] border rounded-full hover:bg-white text-gray-500 hover:text-secondary">
                  <BiMinus />
                </button>

                <span className="px-3 text-sm">{item.quantity}</span>
                <button
                  onClick={() => addSingleProductToCart(item.id)}
                  className=" px-1 hover:border-[1px] border rounded-full hover:bg-white text-gray-500 hover:text-secondary">
                  <BiPlus />
                </button>
              </div>
              <div className="w-1/3 flex justify-start pt-4 items-center gap-4 text-sm md:justify-center md:pt-0">
                {(Number(item.price) * Number(item.quantity)).toFixed(2)}
                <button
                  onClick={() => deleteProductFromCart(item.id)}
                  className="text-lg text-gray-500 duration-300 rounded-full hover:text-red-700 hover:font-extrabold p-1 hover:bg-red-100 hover:bg-opacity-35 hover:animate-pulse">
                  <GoTrash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <EmptyCartButton clearCart={clearCart} />
      </div>
      <PaymentForm />
      <CheckoutButton />
    </Container>
  );
}

export default Checkout;
