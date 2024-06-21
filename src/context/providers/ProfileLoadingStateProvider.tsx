"use client";

import { useState } from "react";
import { ProfileLoadingStateContext } from "../ctx";

interface Props {
  children: React.ReactNode;
}

export default function ProfileLoadingStateProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ProfileLoadingStateContext.Provider value={{ setIsLoading }}>
      <div className={`relative ${isLoading ? "opacity-60" : "opacity-100"}`}>
        {isLoading && (
          <div className="absolute z-50 top-0 left-0 w-full h-full" />
        )}
        {children}
      </div>
    </ProfileLoadingStateContext.Provider>
  );
}
