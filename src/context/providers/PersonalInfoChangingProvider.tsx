"use client";

import { useState } from "react";
import { PersonalInfoChangingContext } from "../ctx";

interface Props {
  children: React.ReactNode;
  prevValues: any;
}

export default function PersonalInfoChangingProvider({
  children,
  prevValues,
}: Props) {
  const [value, setValue] = useState(prevValues);

  return (
    <PersonalInfoChangingContext.Provider
      value={{ value, setValue, prevValues }}
    >
      {children}
    </PersonalInfoChangingContext.Provider>
  );
}
