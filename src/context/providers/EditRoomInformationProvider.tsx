"use client";

import { useEffect, useState } from "react";
import { EditRoomInformationContext } from "../ctx";

interface Props {
  children: React.ReactNode;
  prevData: {
    title: string;
    description: string;
  };
}

export default function EditRoomInformationProvider({
  children,
  prevData,
}: Props) {
  const [details, setDetails] = useState({
    title: prevData.title,
    description: prevData.description,
  });
  const [validationMessage, setValidationMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (validationMessage !== "") {
      setTimeout(() => {
        setValidationMessage("");
      }, 5000);
    }
  }, [validationMessage]);

  return (
    <EditRoomInformationContext.Provider
      value={{
        details,
        setDetails,
        validationMessage,
        setValidationMessage,
        prevData,
        setIsLoading,
      }}
    >
      <div
        className={`relative w-full lg:max-w-[70%] ${
          isLoading ? "animate-pulse" : "animate-none"
        }`}
      >
        {isLoading && (
          <div className="absolute z-50 top-0 left-0 w-full h-full" />
        )}
        {children}
      </div>
    </EditRoomInformationContext.Provider>
  );
}
