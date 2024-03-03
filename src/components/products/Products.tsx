"use client";
import React from "react";
import useFetch from "@/constants/data";
import Container from "../container/Container";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
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
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 -mt-10 overflow-hidden rounded-lg ">
      {data.data.map((product: Product) => (
        <div
          key={product?.id} // Fixed: Added type assertion to ensure product is not undefined
          className="w-96 group relative overflow-hidden rounded-lg">
          <Image
            src={product.image.url} // Fixed: Added type assertion to ensure product is not undefined
            alt={product.title} // Fixed: Added type assertion to ensure product is not undefined
            width={500}
            height={500}
            className=" w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out rounded-t-lg"
          />
          <span className="bg-white duration-200 absolute top-2 right-2 font-medium text-sm py-3 px-3 rounded-full group-hover:bg-lightModePrimary group-hover:text-white">
            {product?.title}
          </span>
          <div className="absolute w-full bottom-0 p-3 flex flex-col gap-y-2 rounded-b-lg border-[1px] border-t-0 bg-white">
            <p className="text-lg font-bold">${product?.price}</p>
            <p className=" text-gray-500">{product?.description}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}
