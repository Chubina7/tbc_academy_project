import { useTranslations } from "next-intl";

interface Props {
  action: () => void;
}

export default function CancelBtn({ action }: Props) {
  const t = useTranslations("dashboard.pages.profile.logined.pers.btns");

  return (
    <button
      className="px-3 py-1 rounded-lg border-2 border-[#603CFF] text-[#603CFF] dark:border-[#5C5470] dark:text-[#DBD8E3] transition-all duration-300 font-bold text-sm"
      onClick={() => action()}
    >
      {t("cancel")}
    </button>
  );
}
