"use client";
import React from "react";
import useFetch from "@/constants/data";
import Container from "@/components/container/Container";
import Image from "next/image";
import calculateDiscountedPrice from "@/utils/index";
import FormattedPrice from "@/components/formattedPrices/FormattedPrices";
import { IoIosStar } from "react-icons/io";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  discountedPrice: number;
  tags: string[];
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  reviews: [
    {
      id: string;
      username: string;
      rating: number;
      description: string;
    }
  ];
}

export default function Products() {
  const { data, isLoading, isError } = useFetch(
    "https://v2.api.noroff.dev/online-shop"
  );

  //   console.log(data);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>Ops something is wrong!</p>
      </div>
    );
  }

  if (!data || data.data.length === 0) {
    return (
      <div>
        <p>No products available.</p>
      </div>
    );
  }

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10 rounded-lg ">
      {data.data.map((product: Product) => (
        <div
          key={product?.id}
          className="w-72 group relative overflow-hidden rounded-lg">
          <Image
            src={product.image.url}
            alt={product.title}
            width={500}
            height={500}
            className="cursor-pointer w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out rounded-t-lg"
          />
          <p className="bg-white duration-200 absolute top-2 right-2 font-medium text-sm py-1 px-3 rounded-full group-hover:bg-lightModePrimary group-hover:text-white">
            {product?.title}
          </p>
          <div className="absolute w-full bottom-0 p-3 flex flex-col gap-y-2 rounded-b-lg border-[1px] border-t-0 bg-white group-hover:border-lightModePrimary">
            <div className="flex flex-row justify-between items-center">
              <div className=" text-sm border-lightModePrimary px-2 py-1">
                {Number(
                  calculateDiscountedPrice(
                    product?.price,
                    product?.discountedPrice
                  )
                ) > 0 && (
                  <p className="text-sm font-bold">
                    {calculateDiscountedPrice(
                      product?.price,
                      product?.discountedPrice
                    )}
                    % off
                  </p>
                )}
              </div>
              <div className="flex flex-row item-center gap-3 ">
                {product?.price !== product?.discountedPrice && (
                  <p className="text-sm text-lightModeAccent line-through">
                    <FormattedPrice amount={product?.price} />
                  </p>
                )}
                <p className="font-semibold">
                  <FormattedPrice amount={product?.discountedPrice} />
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col text-sm gap-2">
                <p className="text-sm text-gray-500 flex flex-row items-center">
                  {Array.from({ length: product?.rating }, (_, index) => (
                    <span key={index} className="text-yellow-400 text-xl">
                      <IoIosStar />
                    </span>
                  ))}
                </p>
                <p>
                  Reviews ( {product?.reviews.length} )
                </p>
              </div>

              <button className="border-[1px] px-2 py-3 border-bg-lightModePrimary text-sm hover:border-white hover:text-lightModePrimary hover:shadow-none shadow-md tracking-wide">
                Add to cart
              </button>
            </div>
            {/* <div>
              <p className=" text-gray-500 group-hover:text-primary line-clamp-2">
                {product?.description}
              </p>
            </div> */}
          </div>
        </div>
      ))}
    </Container>
  );
}
