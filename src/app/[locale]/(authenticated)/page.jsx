import React from "react";
import Products from "../../../components/homeComp/Products";
import { getAllProducts } from "../../../lib/helpers";
import { getDictionary } from "../../../lib/dictionary";

export default async function Home({ params: { locale } }) {
  const data = await getAllProducts();
  const dictionary = await getDictionary(locale);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Products data={data} dict={dictionary} />
    </div>
  );
}
