import Link from "next/link";
import useProductStore from "@/store/cart";

export default function CheckoutButton() {
  const { clearCart } = useProductStore();

  function handleClearCart() {
    clearCart();
  }

  return (
    <Link href={"/success"}>
      <button
        onClick={handleClearCart}
        className="text-lightText bg-primary mt-4 py-3 px-6 cursor-pointer hover:bg-green-700 duration-300">
        Proceed to checkout
      </button>
    </Link>
  );
}
