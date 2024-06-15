"use client";

import { useState } from "react";
import { AuthDetailsChangingContext } from "../ctx";

interface Props {
  children: React.ReactNode;
  prevData: { email: string; password: string };
}

export default function AuthDetailsChangingProvider({
  children,
  prevData,
}: Props) {
  const [emailVal, setEmailVal] = useState(prevData.email);
  const [passVal, setPassVal] = useState("");

  return (
    <AuthDetailsChangingContext.Provider
      value={{ prevData, emailVal, passVal, setEmailVal, setPassVal }}
    >
      {children}
    </AuthDetailsChangingContext.Provider>
  );
}
