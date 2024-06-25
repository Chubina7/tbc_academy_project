"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  num: number;
}

export default function SeeAllBtn({ num }: Props) {
  const path = usePathname();
  const t = useTranslations("dashboard.pages.rooms.singlePage");
  
  return (
    <p className="w-full sm:h-9 text-center mb-1 p-3 pt-0" id="see_all_btn">
      {num > 10 && (
        <Link
          href={`${path}/members`}
          className="hover:underline cursor-pointer"
        >
          {t("seeMore")} {num - 10}
        </Link>
      )}
    </p>
  );
}
