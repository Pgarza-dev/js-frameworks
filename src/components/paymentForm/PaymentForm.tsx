"use client";
import useProductStore from "@/store/cart";
import useShippingTotal from "@/lib/hooks/shippingTotal";
import useGrandTotal from "@/lib/hooks/grandTotal";
import FormattedPrice from "../formattedPrices/FormattedPrices";

const PaymentForm = () => {
  const { cart, getCartTotal } = useProductStore();
  return (
    <div className="w-full bg-white p-4 text-sm">
      <h2 className=" text-xl">Cart Total</h2>
      <div className="border-b-[1px] border-b-textLight py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className=" uppercase font-medium">Subtotal</p>
          <p>
            <FormattedPrice amount={getCartTotal()} />
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-textLight py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className=" uppercase font-medium">Shipping</p>
          <p>
            <FormattedPrice amount={useShippingTotal()} />
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-textLight py-2">
        <div className="max-w-lg flex items-center justify-between">
          <p className=" uppercase font-medium">Total</p>
          <p>
            <FormattedPrice amount={useGrandTotal()} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
