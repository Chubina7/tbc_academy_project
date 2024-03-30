import React from "react";
import styles from "./ProductItem.module.css";
import DynamicBtn from "../../../btns/DynamicBtn";

const ProductItem = ({ title, description, price, imgSrc, userProduct }) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt="product_image" className={styles.image} />
      <div className={styles.cardText}>
        <div className={styles.cardTopText}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.buyBar}>
          <strong>$ {price}</strong>
          <DynamicBtn type={"addToCart"} />
        </div>
        {userProduct && <button className={styles.editItem}>Edit item</button>}
      </div>
    </div>
  );
};

export default ProductItem;
