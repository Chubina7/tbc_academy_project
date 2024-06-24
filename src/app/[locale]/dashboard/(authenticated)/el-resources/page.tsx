import { unstable_setRequestLocale } from "next-intl/server";
import Resources from "../../../../../components/dashboard/el_resources_page/Resources";
import { getResouces } from "../../../../../lib/helpers/regular_funcs/helpers";

interface Props {
  params: IParams;
}

export default async function ElResources({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const data = await getResouces();

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Resources data={data} />
    </div>
  );
}
