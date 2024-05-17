import React from "react";
// import ProductItem from "./ProductItem";
// import testImage from "../../../../public/test.jpg";
interface Resource {
  resource_id: string;
  title: string;
  description: string;
  thumbnail: string;
}

interface ProductListProps {
  list: Resource[];
  sortRule: boolean;
  searchFilterKeyword: string;
}

export default function ProductList({}: // list,
// searchFilterKeyword,
ProductListProps) {
  // const data = sortRule
  //   ? [...list].sort((a, b) => a.price - b.price)
  //   : [...list];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-5 gap-x-10">
      {/* {list
        .filter((item) =>
          item.title.toLowerCase().includes(searchFilterKeyword)
        )
        .map((product) => (
          <ProductItem
            key={product.resource_id}
            route={`${product.resource_id}`}
            title={product.title}
            description={product.description}
            // thumbnail={testImage}
          />
        ))} */}
    </div>
  );
}
