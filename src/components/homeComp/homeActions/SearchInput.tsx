"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

export default function SearchInput({ setQuery }: { setQuery: SetQueryType }) {
  const t = useTranslations("Products");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      setQuery(e.target.value);
    }, 1000);

    setTimeoutId(newTimeoutId);
  };

  return (
    <input
      className="w-full px-6 py-2 bg-[#ADBADA] text-[#3D52A1] placeholder:text-[#3D52A1] rounded-full focus:outline-none"
      type="search"
      placeholder={t("searchInput")}
      onChange={handleChange}
    />
  );
}
