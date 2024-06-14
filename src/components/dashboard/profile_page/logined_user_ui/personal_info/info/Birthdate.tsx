"use client";

import { useContext, useEffect } from "react";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";

interface Props {
  data: string | null;
}

export default function Birthdate({ data }: Props) {
  const { value, setValue } = useContext(ctx);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setValue((prev) => ({ ...prev, birth_date: data })), [data]);

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
