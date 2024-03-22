import useProductStore from "@/store/cart";
import shippingTotal from "./shippingTotal";

const grandTotal = () => {
  const { getCartTotal } = useProductStore();
  const grandTotal = getCartTotal() + shippingTotal();

  return grandTotal;
};

export default grandTotal;
