"use client";

import React, { useEffect, useState } from "react";
import { userPrivateInfo } from "../../../data/userObj";

export default function NewEmail() {
  const [loginInfo, setLoginInfo] = useState(userPrivateInfo);
  const [isEditing, setIsEditing] = useState();
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    if (inputVal === "" || !inputVal.includes("@") || !inputVal.includes(".")) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, [inputVal]);

  const handleSave = () => {
    setLoginInfo((prev) => ({ ...prev, email: inputVal }));
    setInputVal("");
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-between">
        <i className="opacity-60">Email</i>
        <p>
          Current:{" "}
          <span className="italic">
            {loginInfo.email}{" "}
            {isEditing && (
              <button
                className="bg-slate-500 text-white rounded-full px-3"
                onClick={handleSave}
              >
                Save
              </button>
            )}
          </span>
        </p>
      </div>
      <input
        className="w-full text-base border-2 border-black rounded-md px-3 py-2"
        type="email"
        placeholder="Enter new email"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </div>
  );
}
