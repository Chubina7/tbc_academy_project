"use client";

import { useContext } from "react";
import { AddNewCategoryContext as ctx } from "../../../../../../../context/ctx";

export default function Suggestions() {
  const { showSuggestions, setShowSuggestions, suggestionList, setInputValue } =
    useContext(ctx);

  if (!showSuggestions) return null;

  return (
    <div
      className="absolute w-full top-[150%] left-0 overflow-hidden shadow-custom bg-[#FFFFFF] dark:bg-[#352F44] rounded-lg transition-colors duration-300"
      id="add_category_suggestions"
    >
      {suggestionList.map((item, idx) => (
        <h1
          key={idx}
          className="w-full p-3 hover:bg-red-300 hover:dark:bg-[#5C5470] cursor-pointer"
          onClick={() => {
            // ... add in the DB ...
            setShowSuggestions(false);
            setInputValue("");
          }}
          id="add_category_suggestions"
        >
          {item}
        </h1>
      ))}
    </div>
  );
}
