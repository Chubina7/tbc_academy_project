"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LangChange({ action }: { action?: () => void }) {
  const t = useTranslations("Header.navigation.lngChanger");
  const path = usePathname();
  const route = path.substring(3);

  return (
    <div className="flex justify-center items-center gap-1">
      <Link href={`/ka${route}`} onClick={action}>
        <p className="cursor-pointer">{t("geo")}</p>
      </Link>
      <p>/</p>
      <Link href={`/en${route}`} onClick={action}>
        <p className="cursor-pointer">{t("eng")}</p>
      </Link>
    </div>
  );
}
