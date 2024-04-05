"use client";
import React from "react";
import useProductStore from "@/store/cart";
import { Product } from "@/app/products/Products";
import { useEffect } from "react";
import FormattedPrice from "@/components/formattedPrices/FormattedPrices";
import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import Container from "@/components/container/container";
import HomeButton from "@/components/backButton/HomeButton";

export type ProductDetailsProps = {
  params: { [key: string]: string | string[] | undefined };
};

export default function ProductDetails({ params }: ProductDetailsProps) {
  const { products, cart, fetchProducts, addToCart } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  function handleAddToCart() {
    const isProductInCart = cart.some(
      (item: Product) => item.id === product?.id
    );
    if (!isProductInCart) {
      addToCart(product?.id);
      toast.success(`${product?.title} added to cart`);
    }
    if (isProductInCart) {
      toast.error(
        `${product?.title} already in cart! Go to checkout to add more`
      );
    }
  }

  const product = products?.find(
    (item: Product) => item.id === params?.productsId
  ) as Product;

  return (
    <div>
      <Container className="poppins-thin">
        <HomeButton />
        <div
          key={product?.id}
          className="grid lg:grid-cols-2 gap-5 bg-white rounded-lg p-4 justify-items-center items-center max-w-screen-xl  w-full m-auto"
          aria-label="Product details">
          {product?.image?.url && (
            <Image
              src={product.image.url}
              alt="Your specific product image"
              width={400}
              height={400}
              className="max-h-[700px] max-w-[800px] w-auto h-auto object-cover rounded-lg shadow-xl drop-shadow-xl"
              priority={true}
            />
          )}
          <div className="flex flex-col justify-center gap-3">
            <p className="text-4xl  underline underline-offset-8 pb-2">
              {product?.title}
            </p>
            <p className="text-lg ">
              <FormattedPrice amount={product?.discountedPrice} />
            </p>
            <p className="text-gray-500 text-base">{product?.description}</p>
            <div className="text-xs text-lightText hover:text-gray-500 flex flex-col gap-2">
              <span className="text-base text-gray-500">
                Category:
                <span className="text-lightModePrimary ps-2 capitalize"></span>
                {product?.tags}
              </span>

              <span>
                SKU: <span>{product?.id}</span>
              </span>
            </div>
            <div className="flex flex-row flex-wrap gap-4 sm:justify-start justify-center">
              <div className="flex items-center cursor-pointer group">
                <button
                  onClick={handleAddToCart}
                  className="text-lightText text-sm px-20 py-3 bg-lightModeText border-r-[1px] uppercase ">
                  Add to cart
                </button>
                <span className="bg-darkText text-xl hidden sm:flex text-lightText p-3 w-12 items-center justify-center group-hover:ring-1 duration-300 group-hover:ring-black group-hover:bg-slate-50 group-hover:text-darkText">
                  <IoMdCart />
                </span>
              </div>
              <div>
                <Link href={`/checkout`}>
                  <button className="text-sm text-darkText px-20 py-3 uppercase w-64 hover:text-darkText duration-300 cursor-pointer border  hover:border-black shadow-sm hover:shadow-lg">
                    Buy now
                  </button>
                </Link>
              </div>
            </div>

            {/* <button className="flex items-center justify-center gap-2 text-sm group hover:text-darkText duration-300 cursor-pointer border hover:border-black w-40 py-4 shadow-sm hover:shadow-lg">
              <MdFavoriteBorder className="text-xl group-hover:text-red-600" />
              Add to wishlist
            </button> */}
            <div>
              <article className="text-base flex  gap-4">
                <span className="text-sm text-gray-500 flex flex-row items-center">
                  {Array.from({ length: product?.rating }, (_, index) => (
                    <span key={index} className="text-yellow-400 text-xl">
                      <IoIosStar />
                    </span>
                  ))}
                </span>
                <span>Reviews ( {product?.reviews?.length} )</span>
              </article>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg mt-6 grid grid-cols-1 gap-6 ">
          <h2 className="poppins-thin">Product Reviews</h2>
          {product?.reviews?.map((review, index) => (
            <div key={index} className="border-b-[1px] border-b-textLight pb-4">
              <p className="text-sm font-light">{review?.username}</p>
              <p className="text-sm text-gray-500 flex flex-row gap-2 items-center">
                {Array.from({ length: review?.rating }, (_, rating) => (
                  <span key={rating} className="text-yellow-400 text-sm">
                    <IoIosStar />
                  </span>
                ))}
                <span>{review?.rating}</span>
              </p>
              <p className="text-sm text-gray-500 poppins-thin-italic ">
                {review?.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-white p-4">
          <div className="pb-4 text-base text-lightModeText">
            <h2>Recommended by customers who also purchased this product</h2>
          </div>
          <article className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-dense rounded-lg justify-items-center">
            {products
              ?.filter((item: Product) =>
                item.tags.some((tag) => product?.tags.includes(tag))
              )
              .filter((item: Product) => item.id !== product?.id)
              .map((item: Product) => (
                <div key={item.id} className="group text-gray-500 ">
                  {item.image?.url && (
                    <Link href={`/products/${item.id}`}>
                      <Image
                        src={item.image.url}
                        alt="Recommended product images"
                        width={200}
                        height={200}
                        className="w-60 h-40 object-cover rounded-lg shadow-md drop-shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                      />
                    </Link>
                  )}
                  <div className="py-3 px-2 text-sm group-hover:text-lightModeText">
                    <p className="">{item.title}</p>
                    <p>
                      <FormattedPrice amount={item.discountedPrice} />
                    </p>
                  </div>
                </div>
              ))}
          </article>
        </div>
        <Toaster />
      </Container>
    </div>
  );
}
