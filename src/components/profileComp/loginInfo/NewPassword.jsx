"use client";

import React, { useEffect, useState } from "react";
import { userPrivateInfo } from "../../../data/userObj";

export default function NewPassword() {
  const [loginInfo, setLoginInfo] = useState(userPrivateInfo);
  const [isEditing, setIsEditing] = useState();
  const [confirmInputVal, setConfirmInputVal] = useState("");
  const [newInputVal, setNewInputVal] = useState("");
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (confirmInputVal === "" || confirmInputVal !== newInputVal) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, [confirmInputVal, newInputVal, setIsEditing]);

  const handleSave = () => {
    setLoginInfo((prev) => ({ ...prev, password: confirmInputVal }));
    setConfirmInputVal("");
    setNewInputVal("");
    setUpdated(true);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-between">
        <i className="opacity-60">Password</i>
        {updated && <p>Password updated</p>}
      </div>
      <div className="w-full flex flex-col gap-3">
        <input
          className="w-full text-base border-2 border-black rounded-md px-3 py-2"
          type="password"
          placeholder="Enter new password"
          value={newInputVal}
          onChange={(e) => setNewInputVal(e.target.value)}
        />
        <input
          className="w-full text-base border-2 border-black rounded-md px-3 py-2"
          type="password"
          placeholder="Confirm new pasword"
          value={confirmInputVal}
          onChange={(e) => setConfirmInputVal(e.target.value)}
        />
        {isEditing && (
          <button
            className="bg-slate-500 text-white rounded-full px-3"
            onClick={handleSave}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}
