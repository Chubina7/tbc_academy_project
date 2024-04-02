"use client";

import React, { useState } from "react";
import ProductList from "../components/homeComp/products/ProductList";
import HomeActions from "../components/homeComp/homeActions/HomeActions";

export default function Home() {
  const [sortRule, setSortRule] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <section className="w-full">
        <HomeActions
          sortState={{ sortRule, setSortRule }}
          queryState={setQuery}
        />
      </section>
      <section className="w-full">
        <ProductList sortRule={sortRule} searchFilterKeyword={query} />
      </section>
    </div>
  );
}
