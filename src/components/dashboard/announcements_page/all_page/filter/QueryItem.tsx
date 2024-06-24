"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface Props {
  item: string;
}

export default function QueryItem({ item }: Props) {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <button
      className={`bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] rounded-full py-0.5 px-5 text-sm hover:cursor-pointer transition-all duration-300 select-none opacity-100 text-nowrap ${
        item === searchParams.get("_announcements_made_in") ||
        (item === "all" && !searchParams.get("_announcements_made_in"))
          ? "opacity-100"
          : "opacity-60"
      }`}
      onClick={() => {
        if (item === "all") {
          router.replace(path);
          return;
        }
        router.replace(
          path + "?" + createQueryString("_announcements_made_in", item)
        );
      }}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </button>
  );
}
