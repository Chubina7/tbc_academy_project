import React from "react";
import styles from "./ProductsGrid.module.css";
import ProductItem from "../ProductItem/ProductItem";
import { allProducts } from "../../../../data/products";

const ProductsGrid = ({ sortRule, searchFilterKeyword }) => {
  const data = sortRule
    ? [...allProducts].sort((a, b) => a.price - b.price)
    : [...allProducts];

  console.log("current query is: ", searchFilterKeyword);

  return (
    <section>
      <div className={styles.grid}>
        {data
          .filter((item) =>
            item.title.toLowerCase().includes(searchFilterKeyword)
          )
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
