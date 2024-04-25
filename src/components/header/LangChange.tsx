"use client";

import { usePathname } from "next/navigation";
import { setLngInCookies } from "../../lib/actions";
import Link from "next/link";

export default function LangChange({
  dict,
  action,
}: {
  dict?: any;
  action?: () => void;
}) {
  const path = usePathname();
  const route = path.substring(6);
  const lang = dict.header.navigation.lngChanger;

  const lngChangeHandler = (lang: string) => {
    setLngInCookies(lang);
  };

  return (
    <div className="flex justify-center items-center gap-1">
      <Link href={`/ka${route}`} onClick={action}>
        <p className="cursor-pointer" onClick={() => lngChangeHandler("ka")}>
          {lang.geo}
        </p>
      </Link>
      <p>/</p>
      <Link href={`/en${route}`} onClick={action}>
        <p className="cursor-pointer" onClick={() => lngChangeHandler("en")}>
          {lang.eng}
        </p>
      </Link>
    </div>
  );
}
