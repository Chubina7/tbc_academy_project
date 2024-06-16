"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  num: number;
}

export default function SeeAllBtn({ num }: Props) {
  const path = usePathname();

  return (
    <p className="w-full sm:h-9 text-center mb-1 p-3 pt-0" id="see_all_btn">
      {num > 10 && (
        <Link
          href={`${path}/members`}
          className="hover:underline cursor-pointer"
        >
          See {num - 10} more
        </Link>
      )}
    </p>
  );
}
