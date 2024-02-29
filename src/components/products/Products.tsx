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
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
      {data.data.map((product: Product) => (
        <div key={product.id} className="">
          <h2 className="text-red-500">{product.title}</h2>
          <Image src={product.image.url} alt={product.title} width={300} height={300} />
          <p>{product.price}</p>
          <p>{product.rating}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </Container>
  );
}
