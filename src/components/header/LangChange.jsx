"use client";

import { usePathname } from "next/navigation";
import { setLngInCookies } from "../../lib/actions";
import Link from "next/link";

export default function LangChange({ dict, action }) {
  const path = usePathname();
  const route = path.substring(6);
  const lang = dict.header.navigation.lngChanger;

  const lngChangeHandler = (lang) => {
    setLngInCookies(lang);
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <Link href={`/ka-GE${route}`} onClick={action}>
        <p className="cursor-pointer" onClick={() => lngChangeHandler("ka-GE")}>
          {lang.geo}
        </p>
      </Link>
      <p>/</p>
      <Link href={`/en-US${route}`} onClick={action}>
        <p className="cursor-pointer" onClick={() => lngChangeHandler("en-US")}>
          {lang.eng}
        </p>
      </Link>
    </div>
  );
}
