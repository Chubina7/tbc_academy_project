"use client";

import React from "react";
import { setTheme } from "../../lib/helpers";
import { setThemeInCookies } from "../../lib/actions";

function ThemeChange({ dict, action }) {
  // const { dark, light, os } = dict.header.navigation.themeChanger;

  return (
    <div className="flex justify-center items-center gap-1">
      <p
        className="cursor-pointer"
        onClick={() => {
          setTheme("dark");
          setThemeInCookies("dark");
        }}
      >
        <span onClick={action}>dark</span>
      </p>
      <p>/</p>
      <p
        className="cursor-pointer"
        onClick={() => {
          setTheme("light");
          setThemeInCookies("light");
        }}
      >
        <span onClick={action}>light</span>
      </p>
      <p>/</p>
      <p
        className="cursor-pointer"
        onClick={() => {
          setTheme("os");
          setThemeInCookies("os");
        }}
      >
        <span onClick={action}>os</span>
      </p>
    </div>
  );
}

export default ThemeChange;
