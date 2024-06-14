"use client";

import { useState } from "react";

interface Props {
  data: string | null;
}

export default function Birthdate({ data }: Props) {
  const [value, setValue] = useState(() => data || "");

  return (
    <div className="w-full flex flex-col gap-2 justify-start items-start ">
      <label htmlFor="">Birthdate</label>
      <input
        type="date"
        className="w-full px-3 py-1 rounded-lg bg-transparent border-2 focus:outline-none"
        max={new Date().toISOString().split("T")[0]}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
