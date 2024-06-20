"use client";

import { useRouter } from "next/navigation";
import { langPrefList } from "../../../lib/lists/ListsWithComponents";

interface Props {
  storedLang: string;
}

export default function LangChangerUi({ storedLang }: Props) {
  const router = useRouter();

  return (
    <div
      className={`flex  flex-col justify-center items-center cursor-pointer transition-all duration-300 opacity-70 hover:opacity-100`}
    >
      <div
        onClick={() => {
          langPrefList[storedLang].setLng();
          router.refresh();
        }}
      >
        {langPrefList[storedLang].icon}
      </div>
    </div>
  );
}
