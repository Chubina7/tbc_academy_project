import React from "react";
import ThemeChangerUi from "./ThemeChangerUi";
import { cookies } from "next/headers";

export default async function ThemeChanger() {
  const cookie = cookies().get("theme")?.value;

  return (
    <>
      <ThemeChangerUi storedTheme={cookie} />
    </>
  );
}
