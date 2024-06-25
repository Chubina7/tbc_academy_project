import { useTranslations } from "next-intl";
import Link from "next/link";

export default function JoinNotAct() {
  const t = useTranslations("landing.header");

  return (
    <Link
      href="/dashboard/login"
      className="px-5 py-1 rounded-lg font-bold bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] transition-all duration-300 disabled:opacity-60"
    >
      {t("btn")}
    </Link>
  );
}
