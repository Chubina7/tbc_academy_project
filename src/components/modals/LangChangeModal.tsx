"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { languageList } from "../../lib/lists";

function LangChangeModal({
  langModalHandler,
  activeLang,
}: {
  langModalHandler: () => void;
  activeLang: string | undefined;
}) {
  const t = useTranslations("Header.navigation.lngChanger");
  const path = usePathname();

  return (
    <div className="absolute top-12 left-0 rounded-lg py-2 bg-[#3D52A1] text-[#EEE8F6] dark:text-[#3D52A1] dark:bg-[#EEE8F6] z-50 flex flex-col gap-1 overflow-hidden">
      {languageList.map((item, idx) => (
        <div
          key={idx}
          className={`cursor-pointer flex gap-3 justify-start items-center px-4 py-2 ${
            activeLang === item.identifier
              ? "bg-[#8697C3]"
              : "hover:bg-[#ADBADA] hover:text-[#3D52A1]"
          }`}
        >
          <Link
            href={`/${item.identifier}${path}`}
            onClick={() => {
              langModalHandler();
            }}
          >
            <p className="cursor-pointer">{t(item.title)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default LangChangeModal;
