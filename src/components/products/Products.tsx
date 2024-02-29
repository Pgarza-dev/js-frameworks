"use client";
import React from "react";
import useFetch from "@/constants/data";
import Container from "../container/container";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
}

export default function Products() {
  const { data, isLoading, isError } = useFetch(
    "https://v2.api.noroff.dev/online-shop"
  );

  console.log(data);

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
    <Container>
      {data.data.map((product: Product) => (
        <div key={product.id} className="border border-black">
          <h2 className="">{product.title}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </Container>
  );
}
