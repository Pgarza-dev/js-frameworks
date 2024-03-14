"use client";
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

export type ProductDetailsProps = {
  params: { [key: string]: string | string[] | undefined };
};

export default function ProductDetails({ params }: ProductDetailsProps) {
  const { products, cart, fetchProducts, addToCart } = useProductStore();
  // console.log({ addToCart });

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

  // if (isLoading) {
  //   return (
  //     <div>
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div>
  //       <p>Ops something is wrong!</p>
  //     </div>
  //   );
  // }

  // if (!data || data.data.length === 0) {
  //   return (
  //     <div>
  //       <p>No products available.</p>
  //     </div>
  //   );
  // }
  const product = products.find(
    (item: Product) => item.id === params.productsId
  ) as unknown as Product;

  return (
    <div
      key={product?.id}
      className="grid lg:grid-cols-2 gap-5 bg-white rounded-lg p-4 justify-items-center items-center max-w-screen-xl m-auto">
      <Image
        src={product?.image?.url}
        alt="product image"
        width={500}
        height={500}
        className="max-h-[700px] max-w-[800px] w-full object-cover rounded-lg"
      />
      <div className="flex flex-col justify-center gap-10">
        <p className="text-4xl font-semibold">{product?.title}</p>
        <p className="text-2xl font-semibold">
          <FormattedPrice amount={product?.discountedPrice} />
        </p>
        <p className="text-gray-500 text-lg">{product?.description}</p>
        <div className="text-xs text-lightText hover:text-gray-500 flex flex-col gap-2">
          <span className="text-base text-gray-500">
            Category:
            <span className="text-lightModePrimary ps-2 capitalize">
              {product?.tags}
            </span>
          </span>
          <span>
            SKU: <span>{product?.id}</span>
          </span>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex items-center cursor-pointer group">
            <button
              onClick={handleAddToCart}
              className="text-lightText text-sm px-20 py-3 bg-lightModeText border-r-[1px] uppercase">
              Add to cart
            </button>
            <span className="bg-darkText text-xl text-lightText p-3 w-12 flex items-center justify-center group-hover:ring-1 duration-300 group-hover:ring-black group-hover:bg-slate-50 group-hover:text-darkText">
              <IoMdCart />
            </span>
          </div>
          <div>
            <Link href={`/checkout`}>
              <button className="text-sm text-darkText px-20 py-3 uppercase hover:text-darkText duration-300 cursor-pointer border  hover:border-black shadow-sm hover:shadow-lg">
                Buy now
              </button>
            </Link>
          </div>
        </div>

        <button className="flex items-center justify-center gap-2 text-sm group hover:text-darkText duration-300 cursor-pointer border hover:border-black w-40 py-4 shadow-sm hover:shadow-lg">
          <MdFavoriteBorder className="text-xl group-hover:text-red-600" />
          Add to wishlist
        </button>
        <div>
          <article>
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
      <Toaster />
    </div>
  );
}
