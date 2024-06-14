"use client";

import { useContext } from "react";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";

export default function Birthdate() {
  const { value, setValue } = useContext(ctx);

  return (
    <div className="w-full flex flex-col gap-2 justify-start items-start ">
      <label htmlFor="birthdate">Birthdate</label>
      <input
        id="birthdate"
        type="date"
        className="w-full px-3 py-1 rounded-lg bg-transparent border-2 focus:outline-none"
        max={new Date().toISOString().split("T")[0]}
        value={value.birth_date || ""}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, birth_date: e.target.value }))
        }
      />
    </div>
  );
}
