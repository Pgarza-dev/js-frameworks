import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import useFetch from "@/hooks/data";
import { API_PRODUCTS } from "@/shared/apis";
import Link from "next/link";

export default function SearchBar() {
  const { data = { data: [] } } = useFetch(API_PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;

    if (searchTerm.length > 0) {
      const results = data.data.filter((product: { title: string }) => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
      });

      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleLinkClick = () => {
    setFilteredProducts([]);
  };

  return (
    <form className="relative group w-full border-2 hidden md:flex items-center gap-x-1 bg-white rounded-full px-4 py-1.5 focus-within:border-lightModePrimary">
      <div className="flex flex-row w-full">
        <button type="submit" className="relative">
          <GoSearch className="text-lightModeText group-focus-within:text-darkText duration-200 " />
        </button>
        <input
          onChange={handleSearch}
          id="searchInput"
          autoComplete="on"
          type="search"
          placeholder="Search for products"
          className="| text-lightModeText placeholder:text-sm placeholder:text-gray-400 flex-1 outline-none bg-white focus:placeholder:text-darkText focus:bg-white
                "
        />
      </div>
      {filteredProducts.length > 0 && (
        <div className="absolute border top-10 p-4 bg-white w-full rounded left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {filteredProducts.map((product: { id: string; title: string }) => (
            <div className="border-b-2 text-gray-500 hover:text-black">
              <Link href={`/products/${product.id}`} key={product.id}>
                <p onClick={handleLinkClick}>{product.title}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </form>
  );
}
