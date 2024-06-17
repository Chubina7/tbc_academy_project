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
      <div className={`relative animate-none ${isLoading && "animate-pulse"}`}>
        {isLoading && (
          <div className="absolute z-50 top-0 left-0 w-full h-full" />
        )}
        {children}
      </div>
    </ProfileLoadingStateContext.Provider>
  );
}
