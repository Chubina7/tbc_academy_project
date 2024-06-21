"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { langPrefList } from "../../../lib/lists/ListsWithComponents";

interface Props {
  storedLang: string;
}

function LangChangerUi({ storedLang }: Props) {
  const router = useRouter();

  const handleLangChange = () => {
    langPrefList[storedLang].setLng();
    router.refresh();
  };

  return (
    <div className="flex flex-col justify-center items-center cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100">
      <div onClick={handleLangChange}>{langPrefList[storedLang].icon}</div>
    </div>
  );
}

const areEqual = (prevProps: Props, nextProps: Props) => {
  return prevProps.storedLang === nextProps.storedLang;
};

export default React.memo(LangChangerUi, areEqual);
