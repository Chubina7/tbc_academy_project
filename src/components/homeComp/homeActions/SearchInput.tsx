"use client";

import React, { useState } from "react";
import { inputUI } from "../../../lib/styles";

interface Props {
  setQuery: SetQueryType;
  data?: any;
}

export default function SearchInput({ setQuery, data }: Props) {
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
      placeholder={data}
      onChange={handleChange}
    />
  );
}
