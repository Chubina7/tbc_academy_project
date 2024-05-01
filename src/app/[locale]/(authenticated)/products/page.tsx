import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import Products from "../../../../components/homeComp/Products";
import { getAllProducts } from "../../../../lib/helpers";

// Types
interface Props {
  params: IParams;
}

// Component
export default async function ProductsPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const data = await getAllProducts();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Products data={data} />
    </div>
  );
}
