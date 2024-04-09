import React from "react";
import { allProducts } from "../../../data/products";
import ProductItem from "./ProductItem";

const ProductList = ({ list, sortRule, searchFilterKeyword }) => {
  const data = sortRule
    ? [...list].sort((a, b) => a.price - b.price)
    : [...list];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {data
        .filter((item) =>
          item.title.toLowerCase().includes(searchFilterKeyword)
        )
        .map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            description={product.description}
            imgSrc={product.thumbnail}
            price={product.price}
          />
        ))}
    </div>
  );
};

export default ProductList;
