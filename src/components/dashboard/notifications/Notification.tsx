"use client";

import { useContext } from "react";
import { NotificationsContext } from "../../../context/ctx";
import RtoL from "../../ui/framerMotionDivs/directions/RtoL";
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoAlertCircle,
} from "react-icons/io5";

export default function Notification() {
  const { isShown, notifTitle, notifType } = useContext(NotificationsContext);

  if (isShown) {
    return (
      <RtoL
        className={`${notifType === "success" && "bg-green-700"} ${
          notifType === "error" && "bg-red-700"
        } ${
          notifType === "loading" && "bg-yellow-700"
        } fixed | w-full md:w-fit | top-0 right-0 md:top-10 md:right-8 | flex gap-3 justify-start items-center | z-50 p-5 rounded-lg | transition-colors duration-300`}
      >
        {notifType === "success" && <IoCheckmarkCircle size={20} />}
        {notifType === "error" && <IoCloseCircle size={20} />}
        {notifType === "loading" && <IoAlertCircle size={20} />}
        <h1 className="font-bold">{notifTitle}</h1>
      </RtoL>
    );
  } else {
    return null;
  }
}
