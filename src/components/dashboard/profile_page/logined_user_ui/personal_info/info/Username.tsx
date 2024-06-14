"use client";

import { useState } from "react";

interface Props {
  data: string;
}

export default function Username({ data }: Props) {
  const [value, setValue] = useState(() => data || "");

  return (
    <div className="w-full flex flex-col gap-2 justify-start items-start ">
      <label htmlFor="">Username</label>
      <input
        type="text"
        className="w-full px-3 py-1 rounded-lg bg-transparent border-2 focus:outline-none"
        placeholder="Enter new username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
