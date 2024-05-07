"use client";

import React from "react";
import Navigation from "./navigation/Navigation";
import Logo from "../../header/Logo";

export default function AsideNav() {
  return (
    <aside className="bg-[#FFFFFF] text-inherit | h-full flex flex-col justify-start items-center rounded-xl p-3 px-8">
      <Logo />
      <Navigation />
    </aside>
  );
}
