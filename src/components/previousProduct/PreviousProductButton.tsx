import Link from "next/link";
import useProductStore from "@/store/cart";

export default function PreviousProduct() {
  const { cart } = useProductStore();

  const hasProductLink = cart.length > 0;
  const lastAddedProduct = cart[cart.length - 1];

  return (
    <div>
      {hasProductLink && (
        <Link
          href={`/products/${lastAddedProduct.id}`}
          className="text-xs flex items-center text-gray-500 hover:text-black hover:underline hover:underline-offset-4">
          Previous Product
          {">"}
        </Link>
      )}
    </div>
  );
}
