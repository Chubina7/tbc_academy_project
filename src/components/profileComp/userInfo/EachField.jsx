"use client"

import React, { useState } from "react";

export default function EachField({ title, data, setUserInfo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const handleDataSave = () => {
    setIsEditing((prev) => !prev);
    inputVal !== "" && setUserInfo((prev) => ({ ...prev, [title]: inputVal }));
  };

  return (
    <div className="flex flex-col justify-start items-start gap-1 p-2">
      <i className="text-sm opacity-60 w-full">{title.toUpperCase()}</i>
      <div className="w-full flex justify-between items-center gap-5">
        {isEditing ? (
          <input
            className="w-full text-xl border-2 border-black rounded-md px-3 py-2"
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
          {isEditing ? "SAVE" : "EDIT"}
        </button>
      </div>
    </div>
  );
}
