"use client";

import React from "react";
import Navigation from "./navigation/Navigation";
import Logo from "../../header/Logo";
import Box from "../../ui/Box";

export default function AsideNav() {
  return (
    <Box>
      <aside className="h-full flex flex-col justify-start items-center rounded-xl p-5">
        <Logo />
        <hr className="w-full border rounded-full my-10" />
        <Navigation />
      </aside>
    </Box>
  );
}
