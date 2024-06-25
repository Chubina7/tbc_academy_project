// import SortBtn from "./teacher_ui/SortBtn";
import { useTranslations } from "next-intl";

export default function Heading() {
  const t = useTranslations("dashboard.pages.rooms.singlePage.titles");

  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="w-full font-bold text-2xl">{t("grades")}</h1>
      {/* <SortBtn /> */}
    </div>
  );
}
