import React from "react";
import Products from "../../../components/homeComp/Products";
import { getAllProducts } from "../../../lib/helpers";
import { getDictionary } from "../../../lib/dictionary";

// Types
interface Props {
  params: IParams;
}

// Component
export default async function Home({ params: { locale } }: Props) {
  const data = await getAllProducts();
  const dictionary = await getDictionary(locale);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Products data={data} dict={dictionary} />
    </div>
  );
}
