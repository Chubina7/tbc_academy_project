"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { navItems } from "../../lib/lists";

import Link from "next/link";

export default function Navigation() {
  const t = useTranslations("Header.navigation.navItems");
  const path = usePathname();

  return (
    <ul className="flex flex-col sm:flex-row justify-center items-center gap-2 select-none">
      {navItems.map((navItem, idx) => (
        <li
          key={idx}
          className={`transition-all duration-300 font-bold py-1 px-2 ${
            path.substring(3) === navItem.whenActive
              ? "text-inherit"
              : "text-[#8697C3] hover:text-inherit"
          }`}
        >
          <Link href={navItem.href}>{t(navItem.placeholder)}</Link>
        </li>
      ))}
    </ul>
  );
}
