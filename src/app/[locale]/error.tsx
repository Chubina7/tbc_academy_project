"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  const router = useRouter();
  const t = useTranslations("error");

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-8xl">400</h1>
      <p className="opacity-60 text-2xl">Something went wrong!</p>
      <div className="flex justify-center items-center gap-5">
        <button
          className="px-3 py-1 rounded-lg border-2 border-[#603CFF] dark:border-[#5C5470] text-[#603CFF] dark:text-[#DBD8E3] transition-all duration-300"
          onClick={() => router.replace("/dashboard")}
        >
          {t("goBack")}
        </button>
        <button
          className="px-3 py-1 border border-[#603CFF] dark:border-[#5C5470] bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] transition-all duration-300 rounded-lg"
          onClick={() => reset()}
        >
          {t("tryAgain")}
        </button>
      </div>
    </div>
  );
}
