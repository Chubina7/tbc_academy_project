"use client";

import { useState } from "react";
import { AddNewAnnouncementContext } from "../ctx";

interface Props {
  children: React.ReactNode;
}

export default function AddNewAnnouncementProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const [roomId, setRoomId] = useState("");

  return (
    <AddNewAnnouncementContext.Provider
      value={{
        announcement,
        roomId,
        setAnnouncement,
        setRoomId,
        setTitle,
        title,
        setIsLoading,
        error,
        setError,
      }}
    >
      <div
        className={`relative w-full max-w-4xl ${
          isLoading ? "animate-pulse" : "animate-none"
        }`}
      >
        {isLoading && (
          <div className="absolute z-50 top-0 left-0 w-full h-full" />
        )}
        {children}
      </div>
    </AddNewAnnouncementContext.Provider>
  );
}
