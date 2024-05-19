import Resources from "../../../../../components/dashboard/resourcesPage/Resources";
import { getResouces } from "../../../../../lib/helpers";

export default async function ElResources() {
  const data = await getResouces();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Resources data={data} />
    </div>
  );
}
