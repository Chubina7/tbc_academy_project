"use client";

import { useContext } from "react";
import { NotificationsContext } from "../../../context/ctx";
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoAlertCircle,
} from "react-icons/io5";
import TopToDown from "../../ui/framerMotionDivs/directions/TopToDown";

export default function Notification() {
  const { isShown, notifTitle, notifType } = useContext(NotificationsContext);

  if (isShown) {
    return (
      <TopToDown
        className={`${notifType === "success" && "bg-green-700"} ${
          notifType === "error" && "bg-red-700"
        } ${
          notifType === "loading" && "bg-yellow-700"
        } fixed | w-full md:w-fit | top-0 right-0 md:top-10 md:left-[50%] md:transform md:translate-x-[-50%] | flex gap-3 justify-start items-center | z-50 p-5 rounded-lg | transition-colors duration-300 text-[#FFFFFF]`}
      >
        {notifType === "success" && <IoCheckmarkCircle size={20} />}
        {notifType === "error" && <IoCloseCircle size={20} />}
        {notifType === "loading" && <IoAlertCircle size={20} />}
        <h1 className="font-bold">{notifTitle}</h1>
      </TopToDown>
    );
  } else {
    return null;
  }
}
