"use client";

import { useContext, useEffect } from "react";
import { PersonalInfoChangingContext as ctx } from "../../../../../../context/ctx";

interface Props {
  data: string;
}

export default function Username({ data }: Props) {
  const { value, setValue } = useContext(ctx);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setValue((prev) => ({ ...prev, username: data })), [data]);

  return (
    <div className="w-full flex flex-col gap-2 justify-start items-start ">
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        className="w-full px-3 py-1 rounded-lg bg-transparent border-2 focus:outline-none"
        placeholder="Enter new username"
        value={value.username}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, username: e.target.value }))
        }
      />
    </div>
  );
}
