"use client";

import React, { useState } from "react";

interface Props {
  title: string;
  data: string | undefined;
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
      firstName: string | undefined;
      lastName: string | undefined;
      image: string | undefined;
      gender: string | undefined;
    }>
  >;
  dict: string;
}

export default function EachField({ title, data, setUserInfo, dict }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const handleDataSave = () => {
    setIsEditing((prev) => !prev);
    inputVal !== "" && setUserInfo((prev) => ({ ...prev, [title]: inputVal }));
  };

  return (
    <div className="flex flex-col justify-start items-start gap-1 p-2">
      <i className="text-sm opacity-60 w-full">{"dict.userDetails[title]"}</i>
      <div className="w-full flex justify-between items-center gap-5">
        {isEditing ? (
          <input
            className="w-full text-black text-xl border-2 border-black rounded-md px-3 py-2"
            type="text"
            placeholder={data}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        ) : (
          <h1 className="text-xl px-3 py-2">{data}</h1>
        )}
        <button
          className="select-none cursor-pointer text-sm"
          onClick={handleDataSave}
        >
          {isEditing ? "dict.save" : "dict.edit"}
        </button>
      </div>
    </div>
  );
}
