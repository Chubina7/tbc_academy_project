"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LangChange({ action }: { action?: () => void }) {
  const path = usePathname();
  const route = path.substring(3);

  return (
    <div className="flex justify-center items-center gap-1">
      <Link href={`/ka${route}`} onClick={action}>
        <p className="cursor-pointer">
          {/* {"dict.header.navigation.lngChanger.geo"} */}
          ქართ
        </p>
      </Link>
      <p>/</p>
      <Link href={`/en${route}`} onClick={action}>
        <p className="cursor-pointer">
          {/* {"dict.header.navigation.lngChanger.eng"} */}
          ინგლ
        </p>
      </Link>
    </div>
  );
}
