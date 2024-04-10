"use client";

import React, { useState } from "react";
import ProductList from "./products/ProductList";
import HomeActions from "./homeActions/HomeActions";

function Products({ data }) {
  const [sortRule, setSortRule] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <>
      <section className="w-full">
        <HomeActions
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
