import { USER } from "../../../../../../../lib/helpers/server_act_funcs/authorization_acts";

interface Props {
  data: boolean;
}

export default async function Status({ data }: Props) {
  const { role } = await USER();

  if (role !== "student") return null;

  return (
    <p className="w-fit text-xs border border-[#2B3674] dark:border-[#5C5470] rounded-full px-3 py-0.5 transition-all duration-300 text-nowrap">
      {data ? "COMPLETED" : "PENDING"}
    </p>
  );
}
