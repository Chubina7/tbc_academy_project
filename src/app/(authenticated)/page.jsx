import React from "react";
import Products from "../../components/homeComp/Products";
import { getAllProducts } from "../../lib/helpers";

export default async function Home() {
  const data = await getAllProducts();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Products data={data} />
    </div>
  );
}
