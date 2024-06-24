"use client";

import { useState } from "react";
import { UploadNewBookContext } from "../ctx";

interface Props {
  children: React.ReactNode;
  suggestions: Array<{
    room_id: string;
    room_name: string;
  }> | null;
}
const initialValue: IUploadNewBook = {
  file: {} as File,
  description: "",
  room: null,
  title: "",
};

export default function UploadNewBookProvider({
  children,
  suggestions,
}: Props) {
  const [data, setData] = useState<IUploadNewBook>(initialValue);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <UploadNewBookContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        initialValue,
        isLoading,
        setIsLoading,
        roomSuggestions: suggestions,
      }}
    >
      {children}
    </UploadNewBookContext.Provider>
  );
}
