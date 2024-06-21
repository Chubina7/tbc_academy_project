"use client";

import { useContext } from "react";
import { AddNewCategoryContext as ctgCtx } from "../../../../../../../context/ctx";
import RemoveCtg from "./RemoveCtg";

export default function List() {
  const { categories } = useContext(ctgCtx);

  return (
    <ul>
      {categories.map((item, idx) => (
        <li
          key={idx}
          className="w-fit inline-block border border-[#2B3674] dark:border-[#5C5470] rounded-full px-3 py-0.5 m-1.5 transition-all duration-300"
        >
          <div className="flex justify-center items-center gap-2 select-none">
            <p className="text-sm text-nowrap">{item}</p>
            {categories.length > 3 && <RemoveCtg excitingCtg={item} />}
          </div>
        </li>
      ))}
    </ul>
  );
}
