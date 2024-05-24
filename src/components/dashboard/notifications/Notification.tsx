"use client";

import { useContext } from "react";
import { NotificationsContext } from "../../../context/ctx";

export default function Notification() {
  const { isShown, notifTitle, notifType } = useContext(NotificationsContext);

  if (isShown) {
    return (
      <div
        className={`${notifType === "success" && "bg-green-700"} ${
          notifType === "error" && "bg-red-700"
        } ${
          notifType === "loading" && "bg-yellow-700"
        } fixed top-10 right-8 z-50 p-5 rounded-lg transition-all duration-300`}
      >
        <h1>{notifTitle}</h1>
      </div>
    );
  } else {
    return null;
  }
}
