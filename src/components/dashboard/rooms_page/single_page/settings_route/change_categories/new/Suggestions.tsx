"use client";

import { useContext } from "react";
import { AddNewCategoryContext as ctx } from "../../../../../../../context/ctx";

const suggestionList = ["test1", "test2", "test3", "test4"];

export default function Suggestions() {
  const { showSuggestions, handleCtgAdd, inputValue } = useContext(ctx);

  if (!showSuggestions) return null;

  return (
    <div
      className="absolute w-full top-[150%] left-0 overflow-hidden shadow-custom bg-[#FFFFFF] dark:bg-[#352F44] rounded-lg transition-colors duration-300"
      id="add_category_suggestions"
    >
      {suggestionList
        .filter((item) => item.includes(inputValue))
        .map((item, idx) => (
          <h1
            key={idx}
            className="w-full p-3 hover:bg-red-300 hover:dark:bg-[#5C5470] cursor-pointer"
            onClick={() => handleCtgAdd(item)}
            id="add_category_suggestions"
          >
            {item}
          </h1>
        ))}
    </div>
  );
}
