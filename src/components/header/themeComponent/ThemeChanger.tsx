import React from "react";
import ThemeChangerUi from "./ThemeChangerUi";
import { readCookieForClient } from "../../../lib/actions";

async function ThemeChanger() {
  const cookie = await readCookieForClient("theme");

  return (
    <>
      <ThemeChangerUi storedTheme={cookie} />
    </>
  );
}

export default ThemeChanger;
