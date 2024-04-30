"use client";

import { useState } from "react";
import { themeList } from "../../../lib/componentLists";
import ThemeChangerModal from "../../modals/ThemeChangerModal";

interface Props {
  storedTheme: string | undefined;
}

function ThemeChangerUi({ storedTheme }: Props) {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState(() => storedTheme);

  const handleModal = () => setisOpen((prev) => !prev);

  return (
    <div className="relative flex justify-center items-center gap-1">
      <div
        className="flex h-full justify-center items-center cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100"
        onClick={handleModal}
      >
        {activeTheme ? themeList[activeTheme].icon : themeList.os.icon}
      </div>
      {isOpen && (
        <ThemeChangerModal
          themeModalHandler={handleModal}
          activeThemeSetter={setActiveTheme}
        />
      )}
    </div>
  );
}

export default ThemeChangerUi;
