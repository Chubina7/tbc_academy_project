import React from "react";
import styles from "./ProductsGrid.module.css";
import ProductItem from "../ProductItem/ProductItem";
import { allProducts } from "../../../../data/products";

const ProductsGrid = ({ sortRule, keyStroke }) => {
  const data = sortRule
    ? [...allProducts].sort((a, b) => a.price - b.price)
    : [...allProducts];

  return (
    <section>
      <div className={styles.grid}>
        {data
          .filter((item) => item.title.toLowerCase().includes(keyStroke))
          .map((item) => (
            <ProductItem
              key={item.id}
              imgSrc={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              userProduct={item.userProduct}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
