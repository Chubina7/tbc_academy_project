"use client";

import { IoPencil } from "react-icons/io5";

export default function EditBtn() {
  return (
    <div className="w-full flex-1 flex flex-row justify-end items-end select-none">
      <div
        className="flex justify-center items-center gap-1 font-bold text-sm cursor-pointer mr-4 hover:underline"
        onClick={() => console.log("log from edit btn")}
      >
        <IoPencil size={18} /> <p>edit</p>
      </div>
    </div>
  );
}
