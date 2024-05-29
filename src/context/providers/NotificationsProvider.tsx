"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { NotificationsContext } from "../ctx";

interface Props {
  children: ReactNode;
}

export default function NotificationsProvider({ children }: Props) {
  const [notifShown, setNotifShown] = useState(false);
  const [type, setType] = useState<"success" | "error" | "loading">("loading");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(3000);

  useEffect(() => {
    if (notifShown) {
      const timeoutId = setTimeout(() => {
        setNotifShown(false);
      }, duration);
      return () => clearTimeout(timeoutId);
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifShown]);

  return (
    <NotificationsContext.Provider
      value={{
        showNotification: (
          isShown: boolean,
          type: "success" | "error" | "loading",
          title: string,
          duration?: number
        ) => {
          setNotifShown(isShown);
          setType(type);
          setTitle(title);
          if (duration) setDuration(duration);
        },
        isShown: notifShown,
        notifType: type,
        notifTitle: title,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}
