import Resources from "../../../../../components/dashboard/resources/Resources";
import { getAllRsources } from "../../../../../lib/helpers";

export default async function ElResources() {
  const resources = await getAllRsources();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Resources data={resources} />
    </div>
  );
}
