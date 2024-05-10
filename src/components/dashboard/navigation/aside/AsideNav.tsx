"use client";

import React from "react";
import Logo from "./Logo";
import NavList from "./navList/NavList";

export default function AsideNav() {
  return (
    <aside className="relative h-full flex flex-col justify-start items-start gap-10 rounded-xl p-5 pt-10 bg-[#FFFFFF] text-inherit">
      <Logo />
      <NavList />
    </aside>
  );
}
