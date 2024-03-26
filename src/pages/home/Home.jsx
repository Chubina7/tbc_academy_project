import React from "react";
import styles from "./Home.module.css"
import SearchBar from "../../components/homeComponents/searchBar/SearchBar";
import ProductsGrid from "../../components/homeComponents/products/productsGrid/ProductsGrid";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <SearchBar />
      <ProductsGrid />
    </div>
  );
};

export default Home;
