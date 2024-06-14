"use client";

import { useState } from "react";

interface Props {
  data: string | null;
}

export default function Surname({ data }: Props) {
  const [value, setValue] = useState(() => data || "");

  return (
    <div className="w-full flex flex-col gap-2 justify-start items-start ">
      <label htmlFor="">Surname</label>
      <input
        type="text"
        className="w-full px-3 py-1 rounded-lg bg-transparent border-2 focus:outline-none"
        placeholder="Enter new surname"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
