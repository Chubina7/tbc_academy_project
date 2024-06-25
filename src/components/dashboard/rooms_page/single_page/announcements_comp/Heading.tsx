import { getTranslations } from "next-intl/server";
import { USER } from "../../../../../lib/helpers/server_act_funcs/authorization_acts";
import Btn from "./add_new_act/Btn";

interface Props {
  room_id: string;
}

export default async function Heading({ room_id }: Props) {
  const { role } = await USER();
  const t = await getTranslations("dashboard.pages.rooms.singlePage.titles");

  return (
    <div className="w-full flex justify-between items-center p-3">
      <h1 className="w-full font-bold text-2xl">{t("announcements")}</h1>
      {role !== "student" && <Btn room_id={room_id} />}
    </div>
  );
}
