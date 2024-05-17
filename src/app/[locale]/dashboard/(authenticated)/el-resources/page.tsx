import Resources from "../../../../../components/dashboard/resources/Resources";
import { psqlGetResources } from "../../../../../lib/sqlQueries";

export default async function ElResources() {
  const resources = await psqlGetResources();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Resources data={resources} />
    </div>
  );
}
