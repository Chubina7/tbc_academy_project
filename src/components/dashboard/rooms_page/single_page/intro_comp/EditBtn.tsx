"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoPencil } from "react-icons/io5";

export default function EditBtn() {
  const path = usePathname();
  const t = useTranslations("dashboard.pages.rooms.singlePage");

  return (
    <>
      <div className="w-full flex-1 flex flex-row justify-end items-end select-none">
        <Link
          href={`${path}/settings`}
          className="flex justify-center items-center gap-1 font-bold text-sm cursor-pointer mr-4 hover:underline"
        >
          <IoPencil size={18} /> <p>{t("edit")}</p>
        </Link>
      </div>
    </>
  );
}
