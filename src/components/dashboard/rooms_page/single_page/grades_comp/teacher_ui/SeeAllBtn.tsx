"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function SeeAllBtn() {
  const path = usePathname();
  const t = useTranslations("dashboard.pages.rooms.singlePage");

  return (
    <p className="w-full mt-auto sm:h-9 text-center mb-1">
      <Link href={`${path}/grades`} className="hover:underline cursor-pointer">
        {t("seeMore")}
      </Link>
    </p>
  );
}
