import Link from "next/link";
import useProductStore from "@/store/cart";
import { Button } from "../ui/button";

export default function CheckoutButton() {
  const { clearCart, getTotalNumberOfItemsInCart } = useProductStore();

  function handleClearCart() {
    clearCart();
  }

  return (
    <>
      {getTotalNumberOfItemsInCart() === 0 && (
        <Button
          variant="default"
          className=" mt-4 py-3 px-6 duration-300 uppercase"
          disabled>
          Cart Is Empty
        </Button>
      )}
      {getTotalNumberOfItemsInCart() !== 0 && (
        <Link href={"/success"}>
          <Button
            onClick={handleClearCart}
            className="text-lightText uppercase bg-primary mt-4 py-3 px-6 cursor-pointer hover:bg-green-700 duration-300">
            Proceed to checkout
          </Button>
        </Link>
      )}
    </>
  );
}
