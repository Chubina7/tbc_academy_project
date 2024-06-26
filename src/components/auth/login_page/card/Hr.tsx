import { useTranslations } from "next-intl";

export default function Hr() {
  const t = useTranslations("dashboard.authorization.login");
  return (
    <div className="w-full flex justify-center items-center mt-1 mb-5">
      <hr className="w-full border-1 rounded-full border-[#2A2438] dark:border-[#DBD8E3] | transition-all duration-300" />
      <p className="mx-3 transition-all duration-300">{t("or")}</p>
      <hr className="w-full border-1 rounded-full border-[#2A2438] dark:border-[#DBD8E3] | transition-all duration-300" />
    </div>
  );
}
