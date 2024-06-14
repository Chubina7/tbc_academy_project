"use client";

import { useContext } from "react";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";

export default function Surname() {
  const { value, setValue } = useContext(ctx);

  return (
    <div className="w-full flex flex-col gap-2 justify-start items-start ">
      <label htmlFor="surname">Surname</label>
      <input
        id="surname"
        type="text"
        className="w-full px-3 py-1 rounded-lg bg-transparent border-2 focus:outline-none"
        placeholder="Enter new surname"
        value={value.surname || ""}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, surname: e.target.value }))
        }
      />
    </div>
  );
}
