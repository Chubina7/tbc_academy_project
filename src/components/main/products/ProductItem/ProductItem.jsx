import React from "react";
import styles from "./ProductItem.module.css";
import DynamicBtn from "../../../btns/DynamicBtn";

const ProductItem = ({ title, description, price, imgSrc }) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt="product_image" className={styles.image} />
      <div className={styles.cardText}>
        <div className={styles.cardTopText}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.buyBar}>
          <p>$ {price}</p>
          <DynamicBtn type={"addToCart"} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
