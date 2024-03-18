import Link from "next/link";

export default function HomeButton() {
  return (
    <Link href="/" className="text-xs flex items-center text-gray-500 hover:text-black w-min hover:underline hover:underline-offset-4">
      Home{">"}
    </Link>
  );
}
