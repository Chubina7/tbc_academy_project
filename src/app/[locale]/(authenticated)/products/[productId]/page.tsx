import React from "react";
import { getSingleProduct } from "../../../../../lib/helpers";
import Product from "../../../../../components/dynamicProductComp/Product";
import { getDictionary } from "../../../../../lib/dictionary";

// Types
interface Props {
  params: IParams;
}

// Static generation
export async function generateStaticParams() {
  const res = await fetch(`https://dummyjson.com/products/`);
  const data: IProducts = await res.json();

  return data.products.map((item) => ({ productId: `${item.id}` }));
}

// Component
async function ProductDetailsPage({ params: { productId, locale } }: Props) {
  const data = await getSingleProduct(productId);
  const dictionary = await getDictionary(locale);

  return (
    <div className="w-full flex justify-center items-center flex-col gap-10 ">
      <Product data={data} dict={dictionary} />
    </div>
  );
}

export default ProductDetailsPage;
