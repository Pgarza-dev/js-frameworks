"use client";
import React from "react";
import { Product } from "@/app/products/Products";
import useFetch from "@/lib/hooks/data";
import Container from "@/components/container/container";
import Image from "next/image";
import { API_PRODUCTS } from "@/shared/apis";
import { motion } from "framer-motion";
import Link from "next/link";

function ProductHeroSection() {
  const { data } = useFetch(API_PRODUCTS);
  return (
    <Container className="flex flex-col text-darkText max-w-max drop-shadow-xl  my-8 bg-darkText rounded-3xl  mx-auto">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-7xl font-extrabold text-white drop-shadow-xl p-4">
        New Fashion
      </motion.h2>
      <article className="flex flex-row p-4">
        {data.data
          .filter((product: Product) => product.tags.includes("shoes"))
          .slice(2, 10)
          .reverse()
          .map((product: Product) => (
            <div key={product.id} className="">
              <div className="p-3">
                <motion.span
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}>
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={product.image.url}
                      alt={product.image.alt}
                      width={500}
                      height={500}
                      className="rounded-xl w-auto h-auto hover:scale-105 transition-transform duration-500 ease-in-out"
                      sizes=""
                    />
                  </Link>
                </motion.span>
              </div>
            </div>
          ))}
      </article>
      <article className="flex flex-row justify-center p-4">
        {data.data
          .filter((product: Product) => product.tags.includes("headphones"))
          .slice(0, 6)
          .map((product: Product) => (
            <div key={product.id} className="">
              <div className="p-3">
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}>
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={product.image.url}
                      alt={product.image.alt}
                      width={300}
                      height={300}
                      className="rounded-xl w-auto h-auto hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </Link>
                </motion.span>
              </div>
            </div>
          ))}
        <div className="flex flex-col justify-center items-center p-4">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white drop-shadow-xl p-0 md:p-4">
            UrbanFinds
          </motion.h2>
        </div>
      </article>
    </Container>
  );
}

export default ProductHeroSection;
