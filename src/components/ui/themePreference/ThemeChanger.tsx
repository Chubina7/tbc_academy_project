import React from "react";
import ThemeChangerUi from "./ThemeChangerUi";
import { readCookieForClient } from "../../../lib/helpers/server_act_funcs/actions";

async function ThemeChanger() {
  const cookie = await readCookieForClient("theme");

  return (
    <>
      <ThemeChangerUi storedTheme={cookie} />
    </>
  );
}

export default ThemeChanger;
