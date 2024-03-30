import React, { useState } from "react";
import styles from "./Home.module.css";
import ProductsGrid from "../../components/homeComponents/products/productsGrid/ProductsGrid";
import Actions from "../../components/homeComponents/actions/Actions";

const Home = () => {
  const [sortRule, setSortRule] = useState(false);
  const [inputVal, setInputVal] = useState("");

  return (
    <div className={styles.wrapper}>
      <Actions
        sortRule={sortRule}
        setSortRule={setSortRule}
        keyStroke={inputVal}
        setKeyStroke={setInputVal}
      />
      <ProductsGrid sortRule={sortRule} keyStroke={inputVal} />
    </div>
  );
};

export default Home;
