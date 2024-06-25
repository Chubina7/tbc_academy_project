"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const t = useTranslations("notFound");

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-8xl">404</h1>
      <p className="opacity-60 text-2xl font-bold">{t("title1")}</p>
      <p className="opacity-60">{t("title2")}</p>
      <div className="flex justify-center items-center gap-5">
        <button
          className="px-3 py-1 rounded-lg border-2 border-[#603CFF] dark:border-[#5C5470] text-[#603CFF] dark:text-[#DBD8E3] transition-all duration-300"
          onClick={() => router.back()}
        >
          {t("back")}
        </button>
        <button
          className="px-3 py-1 border border-[#603CFF] dark:border-[#5C5470] bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] transition-all duration-300 rounded-lg"
          onClick={() => router.push("/dashboard")}
        >
          {t("dashboard")}
        </button>
      </div>
    </div>
  );
}
