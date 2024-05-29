"use client";

import { useEffect, useState } from "react";
import { themeList } from "../../../lib/lists/ListsWithComponents";
import { setTheme } from "../../../lib/helpers/regular_funcs/helpers";
import { storeThemeInCookies } from "../../../lib/helpers/server_act_funcs/actions";

interface Props {
  storedTheme: string | undefined;
}

function ThemeChangerUi({ storedTheme }: Props) {
  const [idx, setIdx] = useState(() => {
    switch (storedTheme) {
      case "os":
        return 0;
      case "light":
        return 1;
      case "dark":
        return 2;
      default:
        return 0;
    }
  });

  useEffect(() => {
    setTheme(themeList[idx].title);
    storeThemeInCookies(themeList[idx].title);
    // show toastify messages when theme changed
  }, [idx]);

  return (
    <div
      className={`flex justify-center items-center cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100`}
      onClick={() => setIdx((prev) => (prev + 1) % 3)}
    >
      {themeList[idx].icon}
    </div>
  );
}

export default ThemeChangerUi;
