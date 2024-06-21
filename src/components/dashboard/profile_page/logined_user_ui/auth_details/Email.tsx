"use client";

import { useContext } from "react";
import { AuthDetailsChangingContext as ctx } from "../../../../../context/ctx";

export default function Email() {
  const { emailVal, setEmailVal } = useContext(ctx);

  return (
    <div className="flex flex-col gap-1 justify-start items-start">
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        className="px-3 py-1 border-2 rounded-lg bg-transparent focus:outline-none"
        name="email"
        id="email"
        placeholder="Enter new email"
        value={emailVal}
        onChange={(e) => setEmailVal(e.target.value)}
      />
    </div>
  );
}
