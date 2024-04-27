"use client";

import React, { useState } from "react";
import { inputUI } from "../../../lib/styles";

export default function SearchInput({ setQuery }: { setQuery: SetQueryType }) {
  const [timeoutId, setTimeoutId] = useState<null | number>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      setQuery(e.target.value);
    }, 1000);

    setTimeoutId(newTimeoutId);
  };

  return (
    <input
      className={`w-full px-6 py-2 border-[#343A40] ${inputUI}`}
      type="search"
      placeholder={"products.searchInput"}
      onChange={handleChange}
    />
  );
}
