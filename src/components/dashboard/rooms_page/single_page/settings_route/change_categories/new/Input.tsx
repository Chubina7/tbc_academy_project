"use client";

import { useContext } from "react";
import { AddNewCategoryContext as ctx } from "../../../../../../../context/ctx";

export default function Input() {
  const { inputValue, setInputValue } = useContext(ctx);

  return (
    <input
      className="w-full border rounded-lg px-3 py-1 focus:outline-none bg-transparent outline-none"
      type="search"
      placeholder="Start typing..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
