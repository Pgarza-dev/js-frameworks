import Banner from "@/components/banner/banner";
import Products from "@/app/products/Products";
import Login from "@/components/sessionProvider/Login";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      {/* <SessionProvider>
        <Login />
      </SessionProvider> */}
      <main>
      <Banner />
        <Products />
      </main>
    </>
  );
}
