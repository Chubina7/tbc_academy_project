"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { navItems } from "../../../lib/lists/ListsWithComponents";
import { IoArrowUp } from "react-icons/io5";

import Link from "next/link";

export default function Navigation() {
  const t = useTranslations("landing.header.navigation");
  const path = usePathname();

  return (
    <ul className="flex flex-col sm:flex-row justify-center items-center gap-2 select-none">
      {navItems.map((navItem, idx) => (
        <li
          key={idx}
          className={`transition-all duration-300 font-bold py-1 px-2 ${
            path === navItem.whenActive
              ? "text-inherit"
              : "text-[#8697C3] hover:text-inherit"
          }`}
        >
          <Link href={navItem.href}>{t(navItem.placeholder)}</Link>
        </li>
      ))}
      <li
        className={`relative transition-all duration-300 font-bold py-1 px-2 text-[#8697C3] hover:text-inherit`}
      >
        <IoArrowUp size={12} className="absolute top-0 -right-1" />
        <Link href={"/dashboard"} target="_blank">
          {t("dashboard")}
        </Link>
      </li>
    </ul>
  );
}
