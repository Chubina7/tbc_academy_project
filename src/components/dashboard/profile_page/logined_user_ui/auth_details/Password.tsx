"use client";

import { useContext } from "react";
import { AuthDetailsChangingContext as ctx } from "../../../../../context/ctx";

export default function Password() {
  const { passVal, setPassVal } = useContext(ctx);

  return (
    <div className="flex flex-col gap-1 justify-start items-start">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        className="px-3 py-1 border-2 rounded-lg bg-transparent focus:outline-none"
        name="password"
        id="password"
        autoComplete="new-password"
        placeholder="Enter new password"
        value={passVal}
        onChange={(e) => setPassVal(e.target.value)}
      />
    </div>
  );
}
