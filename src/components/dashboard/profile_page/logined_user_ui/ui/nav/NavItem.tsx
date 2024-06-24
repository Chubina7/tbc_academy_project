"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface Props {
  item: {
    title: string;
    icon: JSX.Element;
    queryValue: string;
  };
}

export default function NavItem({ item }: Props) {
  const path = usePathname();
  const searchParams = useSearchParams();

  return (
    <Link
      href={`${path}/?segment=${item.queryValue}`}
      className={`w-full flex gap-2 justify-center lg:justify-start items-center px-5 py-3 ${
        item.queryValue === "delete_acc" && "text-red-600 font-semibold"
      } | ${
        item.queryValue === searchParams.get("segment")
          ? "bg-[#603CFF] dark:bg-[#5C5470] text-[#FFFFFF] opacity-100"
          : "hover:bg-[#8BA8FF] dark:hover:bg-[#5C5470]  opacity-60"
      } transition-all duration-300`}
    >
      {item.icon}
      <h1 className={`hidden lg:block text-nowrap`}>{item.title}</h1>
    </Link>
  );
}
