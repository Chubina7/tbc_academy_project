"use client";

import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { AddNewRoomContext as ctx } from "../../../../../../../context/ctx";

export default function List() {
  const { data, setters } = useContext(ctx);

  return (
    <ul className="w-full sm:w-[70%] text-center">
      {data.categories.length > 0 ? (
        data.categories.map((item) => (
          <li
            key={item}
            className="w-fit inline-block border border-[#2B3674] dark:border-[#5C5470] rounded-full px-3 py-0.5 m-1.5 transition-all duration-300"
          >
            <div className="flex justify-center items-center gap-2 select-none">
              <p className="text-base text-nowrap">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
              <IoClose
                size={18}
                className="cursor-pointer"
                onClick={() => {
                  setters.setCategories((prev) =>
                    prev.filter((i) => i !== item)
                  );
                }}
              />
            </div>
          </li>
        ))
      ) : (
        <p>Empty list. Add minimum 3 relevant category to continue</p>
      )}
    </ul>
  );
}
