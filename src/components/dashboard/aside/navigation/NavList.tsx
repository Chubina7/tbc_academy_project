"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { dashboardNavigationList } from "../../../../lib/componentLists";

export default function NavList() {
  const path = usePathname();

  return (
    <ul className="w-56 flex flex-col gap-3">
      {dashboardNavigationList.map((route, idx) => {
        const isActive = path.substring(10) === route.href;
        return (
          <Link key={idx} href={`/dashboard${route.href}`}>
            <li
              className={`flex justify-start items-center gap-7 p-2 transition-all duration-300 ${
                isActive ? "opacity-100 font-bold" : "opacity-40"
              }`}
            >
              {isActive ? route.onActive : route.icon}
              {route.title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
