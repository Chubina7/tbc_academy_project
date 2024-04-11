"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { buttonUI } from "../../lib/styles";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
  { title: "Profile", href: "/profile" },
];

export default function Navigation({ closeBurgerModal }) {
  const path = usePathname();

  return (
    <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 select-none">
      {navItems.map((navItem, idx) => (
        <li
          key={idx}
          className={`text-inherit font-bold px-5 py-1 ${
            path === navItem.href ? buttonUI : "opacity-60"
          }`}
        >
          <Link href={navItem.href} onClick={closeBurgerModal}>
            {navItem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
