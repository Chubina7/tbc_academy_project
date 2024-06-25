"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IoFilter } from "react-icons/io5";

export default function Sorter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const t = useTranslations("dashboard.pages.announcements.singlePage");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const changeSortRule = () => {
    if (searchParams.get("comments")) {
      router.replace(path);
    } else {
      router.replace(
        path + "?" + createQueryString("comments", "oldest_first")
      );
    }
    router.refresh();
  };

  return (
    <button
      className="flex gap-1 justify-center items-center text-nowrap text-sm"
      onClick={changeSortRule}
    >
      {t("sort")} <IoFilter size={20} />
    </button>
  );
}
