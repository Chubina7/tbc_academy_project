import React, { useState } from "react";
import styles from "./Home.module.css";
import ProductsGrid from "../../components/homeComponents/products/productsGrid/ProductsGrid";
import Actions from "../../components/homeComponents/actions/Actions";

const Home = () => {
  const [sortRule, setSortRule] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Actions sortRule={sortRule} setSortRule={setSortRule} />
      <ProductsGrid sortRule={sortRule} />
    </div>
  );
};

export default Home;
