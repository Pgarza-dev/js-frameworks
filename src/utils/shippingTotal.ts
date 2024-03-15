import useProductStore from "@/store/cart";

const shippingTotal = () => {
  const { getCartTotal } = useProductStore();
  const shipping = getCartTotal() / 100;

  return shipping;
};

export default shippingTotal;
