"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
  { title: "Profile", href: "/profile" },
];

const Navigation = ({ closeBurgerModal }) => {
  const path = usePathname();

  return (
    <ul className="flex flex-col gap-4 sm:flex-row select-none">
      {navItems.map((navItem, idx) => (
        <li
          key={idx}
          className={path === navItem.href ? "text-white" : "text-black"}
        >
          <Link href={navItem.href} onClick={closeBurgerModal}>
            {navItem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
