"use client";
import React from "react";
import useFetch from "@/lib/hooks/data";
import Container from "@/components/container/container";
import Image from "next/image";
import calculateDiscountedPrice from "@/lib/utils/index";
import FormattedPrice from "@/components/formattedPrices/FormattedPrices";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { API_PRODUCTS } from "@/shared/apis";

export interface Product {
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
  productsId: string;
}

export default function Products() {
  const { data, isLoading, isError } = useFetch(API_PRODUCTS);

  if (isLoading) {
    return (
      <div>
        <span className="loader"></span>
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
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <Container className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 -mt-10 rounded-lg gap-4 justify-items-center">
      {data.data.map((product: Product) => (
        <div
          id="productCard"
          key={product?.id}
          className="min-w-full h-full group relative overflow-hidden rounded-lg">
          <Link href={`/products/${product?.id}`}>
            <Image
              src={product.image.url}
              alt={`Product image of a specific product ${product?.title}`}
              width={300}
              height={300}
              priority={true}
              className="cursor-pointer w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out rounded-t-lg"
              sizes="(min-width: 320px) 280px, (min-width: 640px) 640px, (min-width: 1024px) 1024px, (min-width: 1280px) 1280px, (min-width: 1536px) 1536px, 100vw"
            />
          </Link>
          <p className="bg-white duration-200 absolute top-2 right-2 font-medium text-sm py-1 px-3 rounded-full group-hover:bg-lightModePrimary group-hover:text-white">
            {product?.title}
          </p>
          <div className="absolute w-full bottom-0 p-3 flex flex-col gap-y-2 rounded-b-lg border-[1px] border-t-0 bg-white group-hover:border-lightModePrimary">
            <div className="flex flex-row justify-between items-center">
              <div className="text-sm border-lightModePrimary px-2 py-1 animate-pulse text-red-700">
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
              <div className="flex flex-row item-center gap-3 text-xs">
                {product?.price !== product?.discountedPrice && (
                  <p className="text-sm text-lightModeAccent line-through">
                    <FormattedPrice amount={product?.price} />
                  </p>
                )}
                <p className="text-base font-semibold">
                  <FormattedPrice amount={product?.discountedPrice} />
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <p>Reviews ( {product?.reviews.length} )</p>
              <div className="flex flex-row text-sm gap-2">
                <p className="text-sm text-gray-500 flex flex-row items-center">
                  {Array.from({ length: product?.rating }, (_, stars) => (
                    <span key={stars} className="text-yellow-400 text-xl">
                      <IoIosStar />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}
