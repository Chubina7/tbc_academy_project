"use client";

import Link from "next/link";
import React from "react";
import { navItems } from "../../lib/lists";
import { usePathname } from "next/navigation";
import { buttonUI } from "../../lib/styles";

function NavItems({ action, lng, dict }) {
  const path = usePathname();
  const navLink = dict.header.navigation.navItems;

  return (
    <>
      {navItems.map((navItem, idx) => (
        <li
          key={idx}
          className={`text-inherit font-bold px-5 py-1 ${
            path === `/${lng}${navItem.href}`
              ? `${buttonUI} bg-[#F25050]`
              : "opacity-60"
          }`}
        >
          <Link href={`/${lng}/${navItem.href}`} onClick={action}>
            {navLink[navItem.placeholder]}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavItems;
