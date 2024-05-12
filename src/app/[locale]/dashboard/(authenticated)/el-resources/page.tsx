import Products from "../../../../../components/productsComp/Products";
import { getAllProducts } from "../../../../../lib/helpers";

export default async function ElResources() {
  // დროებითი დატა
  const data = await getAllProducts();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Products data={data} />
    </div>
  );
}
