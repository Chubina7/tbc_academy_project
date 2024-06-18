"use client";

import { ReactNode, useEffect, useState } from "react";
import { AddNewCategoryContext } from "../ctx";
import useOutsideClickTrack from "../../hooks/useOutsideClickTrack";

interface Props {
  children: ReactNode;
  prevList: Array<string>;
}

export default function AddNewCategoryProvider({ children, prevList }: Props) {
  const [categories, setCategories] = useState(prevList);
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useOutsideClickTrack("add_category_suggestions", [
    showSuggestions,
    setShowSuggestions,
  ]);

  useEffect(() => {
    if (inputValue.trim() !== "") {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [inputValue]);

  const handleCtgAdd = (item: string) => {
    if (item.trim() === "") {
      setError("Unable to add empty value");
      return;
    }
    if (categories.includes(item)) {
      setError("Category already exist in the list");
      return;
    }
    if (item.length < 3) {
      setError("Word should be minimum three characters long");
      return;
    }

    setCategories((prev) => [...prev, item]);
    setError("");
    setShowSuggestions(false);
    setInputValue("");
  };
  const handleCtgRemove = (excitingCtg: string) => {
    setCategories((prev) => prev.filter((item) => item !== excitingCtg));
  };
  const handleReset = () => {
    setInputValue("");
    setCategories(prevList);
  };

  return (
    <AddNewCategoryContext.Provider
      value={{
        inputValue,
        setInputValue,
        setShowSuggestions,
        showSuggestions,
        categories,
        handleCtgAdd,
        handleCtgRemove,
        errorMsg: error,
        handleReset,
        setIsLoading,
      }}
    >
      <div
        className={`relative w-full lg:max-w-[70%] ${
          isLoading ? "animate-pulse" : "animate-none"
        }`}
      >
        {isLoading && (
          <div className="absolute z-50 top-0 left-0 w-full h-full" />
        )}
        {children}
      </div>
    </AddNewCategoryContext.Provider>
  );
}
