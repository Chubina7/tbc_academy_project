"use client";

import { useState } from "react";
import ThemeChangerModal from "../../modals/ThemeChangerModal";
import { themeList } from "../../../lib/componentLists";

interface Props {
  storedTheme: string | undefined;
}

function ThemeChangerUi({ storedTheme }: Props) {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState(() => storedTheme || "os");

  const handleModal = () => setisOpen((prev) => !prev);

  return (
    <div className="relative flex justify-center items-center gap-1">
      <div
        className={`flex h-full justify-center items-center cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100 ${
          isOpen ? "opacity-100" : ""
        }`}
        onClick={handleModal}
      >
        {activeTheme && themeList[activeTheme].icon}
      </div>
      {isOpen && (
        <ThemeChangerModal
          themeModalHandler={handleModal}
          activeState={{ activeTheme, setActiveTheme }}
        />
      )}
    </div>
  );
}

export default ThemeChangerUi;
