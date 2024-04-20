"use client";

import { usePathname } from "next/navigation";
import { setLngInCookies } from "../../lib/actions";
import Link from "next/link";

export default function LangChange() {
  const path = usePathname();
  const route = path.substring(6);

  const lngChangeHandler = (lang) => {
    setLngInCookies(lang);
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <Link href={`/ka-GE${route}`}>
        <p
          className="cursor-pointer"
          id="ka-GE"
          onClick={(e) => lngChangeHandler(e.target.id)}
        >
          Georgian
        </p>
      </Link>
      <p>/</p>
      <Link href={`/en-US${route}`}>
        <p
          className="cursor-pointer"
          id="en-US"
          onClick={(e) => lngChangeHandler(e.target.id)}
        >
          English
        </p>
      </Link>
    </div>
  );
}
