"use client";

import React from "react";
import { themeList } from "../../../lib/lists/ListsWithComponents";

interface Props {
  storedTheme: string | undefined;
}

function ThemeChangerUi({ storedTheme }: Props) {
  const handleThemeChange = () => {
    themeList[storedTheme || "os"].setTheme();
  };

  return (
    <div
      className={`flex justify-center items-center cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100`}
      onClick={handleThemeChange}
    >
      {themeList[storedTheme || "os"].icon}
    </div>
  );
}

const areEqual = (prevProps: Props, nextProps: Props) => {
  return prevProps.storedTheme === nextProps.storedTheme;
};

export default React.memo(ThemeChangerUi, areEqual);
