import React from "react";
import { getSingleProduct } from "../../../../lib/helpers";
import Product from "../../../../components/dynamicProductComp/Product";

export async function generateStaticParams() {
  const res = await fetch(`https://dummyjson.com/products/`);
  const data = await res.json();

  return data.products.map((item) => ({ productId: `${item.id}` }));
}

async function ProductDetailsPage({ params }) {
  const data = await getSingleProduct(params.productId);

  return (
    <div className="w-full flex justify-center items-center flex-col gap-10 ">
      <Product data={data} />
    </div>
  );
}

export default ProductDetailsPage;
