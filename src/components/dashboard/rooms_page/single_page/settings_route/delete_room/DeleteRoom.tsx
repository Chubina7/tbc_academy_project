import { useTranslations } from "next-intl";
import DeleteBtn from "./DeleteBtn";

export default function DeleteRoom() {
  const t = useTranslations(
    "dashboard.pages.rooms.singlePage.settingsPage.delete"
  );

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#352F44] rounded-xl transition-all duration-300 shadow-custom p-3 | w-full lg:max-w-[70%] flex flex-col gap-3">
      <h1 className="w-full font-bold text-2xl select-none">{t("title")}</h1>
      <div className="relative z-50 w-full flex justify-between items-end gap-5">
        <p> {t("warning")}</p>
        <DeleteBtn />
      </div>
    </div>
  );
}
