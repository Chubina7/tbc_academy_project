"use client";

import { useEffect, useState } from "react";
import { langPrefList } from "../../../lib/ListsWithComponents";

interface Props {
  storedLang: string | undefined;
}

function LangChangerUi({ storedLang }: Props) {
  const [idx, setIdx] = useState(() => {
    switch (storedLang) {
      case "ka":
        return 0;
      case "en":
        return 1;
      default:
        return 0;
    }
  });

  useEffect(() => {
    console.log("changing language..");
  }, []);

  return (
    <div
      className={`flex h-full justify-center items-center gap-1 cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100`}
      onClick={() => setIdx((prev) => (prev + 1) % 2)}
    >
      {langPrefList[idx].icon}
    </div>
  );
}

export default LangChangerUi;
