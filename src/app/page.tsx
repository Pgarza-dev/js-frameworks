import Banner from "@/components/banner/banner";
import Products from "@/app/products/Products";
import ProductHeroSection from "@/components/productHeroSection/ProductHeroSection";
export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <ProductHeroSection />
        <Products />
      </main>
    </>
  );
}
