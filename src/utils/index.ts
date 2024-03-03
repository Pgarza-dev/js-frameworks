export default function calculateDiscountedPrice(
  price: number,
  discountedPrice: number
) {
  return !!parseFloat(price.toFixed(2)) &&
    !!parseFloat(discountedPrice.toFixed(2))
    ? (100 - (discountedPrice / price) * 100).toFixed(0)
    : 0;
}
