"use client";

import { ReactNode, useEffect, useState } from "react";
import { AddNewCategoryContext } from "../ctx";
import useOutsideClickTrack from "../../hooks/useOutsideClickTrack";

interface Props {
  children: ReactNode;
}

const testList = [
  "marketing",
  "math",
  "web development",
  "business",
  "economics",
  "chemistry",
  "philosophy",
  "humanities",
];

export default function AddNewCategoryProvider({ children }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [suggestionList, setSuggestionList] = useState<Array<string>>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useOutsideClickTrack("add_category_suggestions", [
    showSuggestions,
    setShowSuggestions,
  ]);

  useEffect(() => {
    if (inputValue.trim() !== "") {
      setSuggestionList(testList.filter((item) => item.includes(inputValue)));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [inputValue]);

  return (
    <AddNewCategoryContext.Provider
      value={{
        inputValue,
        setInputValue,
        suggestionList,
        setSuggestionList,
        setShowSuggestions,
        showSuggestions,
      }}
    >
      {children}
    </AddNewCategoryContext.Provider>
  );
}
