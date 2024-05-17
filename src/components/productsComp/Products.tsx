"use client";

import React, { useState } from "react";
import ProductList from "./products/ProductList";
import ProductsActions from "./productsActions/ProductsActions";

function Products({ data }: { data: any }) {
  const [sortRule, setSortRule] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <section className="w-full">
        <ProductsActions
          sortState={{ sortRule, setSortRule }}
          queryState={setQuery}
        />
      </section>
      <section className="w-full">
        <ProductList
          list={data}
          sortRule={sortRule}
          searchFilterKeyword={query}
        />
      </section>
    </>
  );
}

export default Products;
