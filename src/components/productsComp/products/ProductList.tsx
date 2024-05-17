import React from "react";
import ProductItem from "./ProductItem";
import testImage from "../../../../public/test.jpg";

interface ProductListProps {
  list: Array<IProduct>;
  sortRule: boolean;
  searchFilterKeyword: string;
}

export default function ProductList({
  list,
  sortRule,
  searchFilterKeyword,
}: ProductListProps) {
  const data = sortRule
    ? [...list].sort((a, b) => a.price - b.price)
    : [...list];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-5 gap-x-10">
      {data
        .filter((item) =>
          item.title.toLowerCase().includes(searchFilterKeyword)
        )
        .map((product) => (
          <ProductItem
            key={product.resource_id}
            route={`${product.id}`}
            title={product.title}
            description={product.description}
            thumbnail={testImage}
            price={product.price}
          />
        ))}
    </div>
  );
}
