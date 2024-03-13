"use client";
import useProductStore from "@/store/cart";

function Checkout() {
  const { cart, clearCart } = useProductStore();

  return (
    <div>
      <h1>this is the checkout page</h1>
      <button onClick={clearCart} className="border border-black px-4 py-1">
        clear carts
      </button>
    </div>
  );
}

export default Checkout;
