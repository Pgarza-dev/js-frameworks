/**
 * Calculates the percentage discount based on the original price and the discounted price.
 * @param price - The original price.
 * @param discountedPrice - The discounted price.
 * @returns The percentage discount as a string, rounded to the nearest whole number.
 * If either price or discountedPrice is not a valid number, returns 0.
 */
export default function calculateDiscountedPrice(
  price: number,
  discountedPrice: number
) {
  return !!parseFloat(price.toFixed(2)) &&
    !!parseFloat(discountedPrice.toFixed(2))
    ? (100 - (discountedPrice / price) * 100).toFixed(0)
    : 0;
}

