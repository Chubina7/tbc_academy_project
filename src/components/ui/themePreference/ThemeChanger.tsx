import React from "react";
import ThemeChangerUi from "./ThemeChangerUi";
import { cookies } from "next/headers";

async function ThemeChanger() {
  const cookie = cookies().get("theme")?.value;

  return (
    <>
      <ThemeChangerUi storedTheme={cookie} />
    </>
  );
}

export default ThemeChanger;
