interface Amount {
  amount: number;
}

export default function FormattedPrice({ amount }: Amount) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
  return <span className="text-sm">{formattedPrice}</span>;
}
