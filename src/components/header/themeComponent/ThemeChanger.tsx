import React from "react";
import { readCookieForClient } from "../../../lib/actions";
import ThemeChangerUi from "./ThemeChangerUi";

async function ThemeChanger() {
  const cookie = await readCookieForClient("theme");

  return (
    <>
      <ThemeChangerUi storedTheme={cookie} />
    </>
  );
}

export default ThemeChanger;
