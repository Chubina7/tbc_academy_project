"use client";

import { useContext, useEffect } from "react";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";

interface Props {
  data: string | null;
}

export default function Surname({ data }: Props) {
  const { value, setValue } = useContext(ctx);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setValue((prev) => ({ ...prev, surname: data })), [data]);

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
