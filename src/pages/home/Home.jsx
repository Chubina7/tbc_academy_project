import React from "react";
import SearchBar from "../../components/homeComponents/searchBar/SearchBar";
import ProductsGrid from "../../components/homeComponents/products/productsGrid/ProductsGrid";

const Home = () => {
  return (
    <>
      <SearchBar />
      <ProductsGrid />
    </>
  );
};

export default Home;
