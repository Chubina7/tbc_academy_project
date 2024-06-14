"use client";

import { useState } from "react";
import { PersonalInfoChangingContext } from "../ctx";

interface Props {
  children: React.ReactNode;
}

export default function PersonalInfoChangingProvider({ children }: Props) {
  const [value, setValue] = useState({
    username: "",
    surname: ("" || null) as string | null,
    birth_date: ("" || null) as string | null,
    profile_picture: ("" || null) as string | null,
  });

  return (
    <PersonalInfoChangingContext.Provider value={{ value, setValue }}>
      {children}
    </PersonalInfoChangingContext.Provider>
  );
}
