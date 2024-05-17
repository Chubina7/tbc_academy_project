import Products from "../../../../../components/productsComp/Products";
import { getAllProducts } from "../../../../../lib/helpers";
import { psqlGetResources } from "../../../../../lib/sqlQueries";

export default async function ElResources() {
  // დროებითი დატა
  // const data = await getAllProducts();
  const resources = await psqlGetResources();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Products data={resources} />
    </div>
  );
}
