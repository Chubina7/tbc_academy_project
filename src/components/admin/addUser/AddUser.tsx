"use client";

import React from "react";
import { addUser } from "../../../lib/helpers";

export default function AddUser() {
  return (
    <div
      className="flex gap-3 justify-center items-center bg-[#2B3674] text-[#F4F7FF] opacity-60 hover:opacity-100 rounded-full px-3 cursor-pointer"
      onClick={() => addUser}
    >
      <p className="font-bold text-3xl">+</p>
      <p>Add user</p>
    </div>
  );
}
