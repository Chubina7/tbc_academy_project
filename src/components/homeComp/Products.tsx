"use client";

import React, { useState } from "react";
import ProductList from "./products/ProductList";
import HomeActions from "./homeActions/HomeActions";

function Products({ data, dict }: ProductsProps) {
  const [sortRule, setSortRule] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <section className="w-full">
        <HomeActions
          sortState={{ sortRule, setSortRule }}
          queryState={setQuery}
          dict={dict}
        />
      </section>
      <section className="w-full">
        <ProductList
          list={data}
          sortRule={sortRule}
          searchFilterKeyword={query}
          dict={dict}
        />
      </section>
    </>
  );
}

export default Products;
