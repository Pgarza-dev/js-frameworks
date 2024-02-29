import Banner from "@/components/banner/banner";
import Image from "next/image";
// import { useFetch } from "@/constants/data";
import Products from "@/components/products/Products";

export default function Home() {

  return (
    <main>
      <Banner />
      <Products />
    </main>
  );
}
