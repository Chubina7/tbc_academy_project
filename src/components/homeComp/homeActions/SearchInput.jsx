"use client";
import React, { useState } from "react";

const SearchInput = ({ setQuery }) => {
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
      className="w-full px-6 py-2 border-2 border-black rounded-full"
      type="search"
      placeholder="Search by a key stroke"
      onChange={handleChange}
    />
  );
};

export default SearchInput;
