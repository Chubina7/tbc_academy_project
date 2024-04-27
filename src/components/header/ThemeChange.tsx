"use client";

import React from "react";
import { setTheme } from "../../lib/helpers";
import { setThemeInCookies } from "../../lib/actions";

function ThemeChange({ action }: { action?: () => void }) {
  return (
    <div className="flex justify-center items-center gap-1">
      <p
        className="cursor-pointer"
        onClick={() => {
          setTheme("dark");
          setThemeInCookies("dark");
        }}
      >
        <span onClick={action}>
          {/* {"dict.header.navigation.themeChanger.dark"} */}
          dark
        </span>
      </p>
      <p>/</p>
      <p
        className="cursor-pointer"
        onClick={() => {
          setTheme("light");
          setThemeInCookies("light");
        }}
      >
        <span onClick={action}>
          {/* {"dict.header.navigation.themeChanger.light"} */}
          light
        </span>
      </p>
      <p>/</p>
      <p
        className="cursor-pointer"
        onClick={() => {
          setTheme("os");
          setThemeInCookies("os");
        }}
      >
        <span onClick={action}>
          {/* {"dict.header.navigation.themeChanger.os"} */}
          os
        </span>
      </p>
    </div>
  );
}

export default ThemeChange;
