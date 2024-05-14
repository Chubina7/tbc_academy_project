"use client";

import { useEffect, useState } from "react";
import { themeList } from "../../../lib/componentLists";
import { setTheme } from "../../../lib/helpers";
import { storeThemeInCookies } from "../../../lib/actions";

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
  const handleThemeChange = () => {
    setIdx((prev) => (prev + 1) % 3);
  };

  useEffect(() => {
    setTheme(themeList[idx].title);
    storeThemeInCookies(themeList[idx].title);
    // show toastify messages when theme changed
  }, [idx]);

  return (
    <div className="relative flex justify-center items-center gap-1">
      <div
        className={`flex h-full justify-center items-center cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100`}
        onClick={handleThemeChange}
      >
        {themeList[idx].icon}
      </div>
    </div>
  );
}

export default ThemeChangerUi;
