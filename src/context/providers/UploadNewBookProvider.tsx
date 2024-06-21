"use client";

import { useState } from "react";
import { UploadNewBookContext } from "../ctx";

interface Props {
  children: React.ReactNode;
}
const initialValue: IUploadNewBook = {
  book: {
    name: "",
    type: "" as BookTypes,
  },
  description: "",
  room: null,
  title: "",
};

export default function UploadNewBookProvider({ children }: Props) {
  const [data, setData] = useState<IUploadNewBook>(initialValue);
  const [error, setError] = useState("");

  return (
    <UploadNewBookContext.Provider
      value={{ data, setData, error, setError, initialValue }}
    >
      {children}
    </UploadNewBookContext.Provider>
  );
}
