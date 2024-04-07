import Link from "next/link";

export default function CheckoutButton() {
  return (
    <Link href={"/success"}>
      <button className="text-lightText bg-primary mt-4 py-3 px-6 cursor-pointer hover:bg-green-700 duration-300">
        Proceed to checkout
      </button>
    </Link>
  );
}
