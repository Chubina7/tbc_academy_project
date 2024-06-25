import { IoAlertCircleSharp } from "react-icons/io5";
import Btn from "./Btn";
import { useTranslations } from "next-intl";

export default function DeleteAcc() {
  const t = useTranslations("dashboard.pages.profile.logined.deleteAcc");

  return (
    <div className="w-full h-full bg-[#FFFFFF] dark:bg-[#352F44] shadow-custom rounded-xl p-3 transition-all duration-300 | flex flex-col justify-center items-center gap-5">
      <div className="w-full flex justify-between items-center gap-5">
        <h1 className="text-2xl font-semibold text-red-600">{t("title")}</h1>
      </div>
      <div className="w-full flex flex-col justify-start items-end">
        <div className="w-full flex gap-2 justify-start items-center">
          <IoAlertCircleSharp size={20} className="min-w-8" />
          <h1>{t("warning1")}</h1>
        </div>
        <div className="w-full flex gap-2 justify-start items-center">
          <IoAlertCircleSharp size={20} className="min-w-8" />{" "}
          <p>{t("warning2")}</p>
        </div>
        <Btn />
      </div>
    </div>
  );
}
