"use client";
import { Product } from "@/app/products/Products";
import Container from "@/components/container/Container";
import FormattedPrice from "@/components/formattedPrices/FormattedPrices";
import useFetch from "@/hooks/data";
import calculateDiscountedPrice from "@/utils";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";

type ProductDetailsProps = {
  params: { [key: string]: string | string[] | undefined };
};

export default function ProductDetails({ params }: ProductDetailsProps) {
  const { data, isLoading, isError } = useFetch(
    "https://v2.api.noroff.dev/online-shop"
  );

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
  const product = data.data.find(
    (item: Product) => item.id === params.productsId
  ) as unknown as Product;

  return (
    <div>
      <div
        key={product?.id}
        className="grid lg:grid-cols-2 gap-5 bg-white rounded-lg p-4 justify-items-center items-center">
        <Image
          src={product?.image?.url}
          alt={product?.title}
          width={500}
          height={500}
          loading="lazy"
          className="max-h-[700px] max-w-[800px] object-cover rounded-lg"
        />
        <div className="flex flex-col justify-center gap-10">
          <p className="text-4xl font-semibold">{product?.title}</p>
          <div className="flex flex-row gap-4">
            <p className="text-red-500 font-semibold animate-bounce">
              {Number(
                calculateDiscountedPrice(
                  product?.price,
                  product?.discountedPrice
                )
              ) > 0 && (
                <span className="text-lg font-bold">
                  {calculateDiscountedPrice(
                    product?.price,
                    product?.discountedPrice
                  )}
                  % off
                </span>
              )}
            </p>
          </div>

          <p className="text-2xl font-semibold">
            <FormattedPrice amount={product?.price} />
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
          <div className="flex items-center cursor-pointer group">
            <button className="text-lightText text-sm px-20 py-3 bg-lightModeText border-r-[1px] uppercase ">
              Add to cart
            </button>
            <span className="bg-darkText text-xl text-lightText p-3 w-12 flex items-center justify-center group-hover:ring-1 duration-300 group-hover:ring-black group-hover:bg-slate-50 group-hover:text-darkText">
              <IoMdCart />
            </span>
          </div>
          <p className="flex items-center gap-2 text-sm  group hover:text-darkText duration-300 cursor-pointer ">
            <MdFavoriteBorder className="text-xl group-hover:text-red-600" />
            Add to wishlist
          </p>
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
        {/* <p className="bg-white duration-200 absolute top-2 right-2 font-medium text-sm py-1 px-3 rounded-full group-hover:bg-lightModePrimary group-hover:text-white">
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
              <p>Reviews ( {product?.reviews?.length} )</p>
            </div>

            <button className="border-[1px] px-2 py-3 border-bg-lightModePrimary text-sm hover:border-white hover:text-lightModePrimary hover:shadow-none shadow-md tracking-wide">
              Add to cart
            </button>
          </div>
          <div>
            <p className=" text-gray-500 group-hover:text-primary line-clamp-2">
              {product?.description}
            </p>
          </div>
        </div>*/}
      </div>
    </div>
  );
}
