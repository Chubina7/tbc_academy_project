import React from "react";
import styles from "./ProductItem.module.css";

const ProductItem = () => {
  return (
    <div className={styles.card}>
      <h1>title</h1>
      <p>description</p>
      <p>price</p>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductItem;
