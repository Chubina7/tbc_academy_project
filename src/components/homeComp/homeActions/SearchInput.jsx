"use client";

import React, { useState } from "react";
import { inputUI } from "../../../lib/styles";

export default function SearchInput({ setQuery }) {
  const [timeoutId, setTimeoutId] = useState(null);

  const handleChange = (e) => {
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
      placeholder="Search by a key stroke"
      onChange={handleChange}
    />
  );
}
