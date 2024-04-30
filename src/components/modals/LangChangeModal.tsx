"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { languageList } from "../../lib/lists";

function LangChangeModal({
  langModalHandler,
}: {
  langModalHandler: () => void;
}) {
  const t = useTranslations("Header.navigation.lngChanger");
  const path = usePathname();
  const route = path.substring(3);

  return (
    <div className="bg-red-400 absolute top-11 right-0 z-50">
      {languageList.map((item, idx) => (
        <Link
          key={idx}
          href={`/${item.identifier}${route}`}
          onClick={() => {
            langModalHandler();
          }}
        >
          <p className="cursor-pointer">{t(item.title)}</p>
        </Link>
      ))}
    </div>
  );
}

export default LangChangeModal;
