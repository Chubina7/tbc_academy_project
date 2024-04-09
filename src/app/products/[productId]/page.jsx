import React from "react";
import { getSingleProduct } from "../../../lib/helpers";
import Product from "../../../components/dynamicProductComp/Product";

async function ProductDetailsPage({ params }) {
  const data = await getSingleProduct(params.productId);

  return (
    <div className="w-full flex justify-center items-center flex-col gap-10 ">
      <Product data={data} />
    </div>
  );
}

export default ProductDetailsPage;
