"use client";

import { useState } from "react";
import { IoFilter } from "react-icons/io5";

const sortRules = [
  {
    title: "Newest first",
    func: () => {},
  },
  {
    title: "Oldest first",
    func: () => {},
  },
  {
    title: "Most liked",
    func: () => {},
  },
];

export default function Sorter() {
  const [ruleIdx, setRuleIdx] = useState(0);

  const changeSortRule = () => setRuleIdx((prev) => (prev + 1) % 3);

  return (
    <button
      className="flex gap-1 justify-center items-center text-nowrap text-sm"
      onClick={changeSortRule}
    >
      {sortRules[ruleIdx].title} <IoFilter size={20} />
    </button>
  );
}
