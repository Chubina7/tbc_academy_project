"use client";

import { useContext } from "react";
import {
  UploadNewBookContext as ctx,
  NotificationsContext as notifCtx,
} from "../../../../../../context/ctx";

interface Props {
  closeModal: () => void;
}

export default function Submit({ closeModal }: Props) {
  const { initialValue, data, setData, setError } = useContext(ctx);
  const { showNotification } = useContext(notifCtx);

  const condition =
    data.title.trim() === "" ||
    data.description.trim() === "" ||
    data.book.name.trim() === "" ||
    data.book.type.trim() === "" ||
    (data.room !== null && data.room.room_id.trim() === "") ||
    (data.room !== null && data.room.room_name.trim() === "");

  const handleNewBookUpload = () => {
    if (condition) {
      setError("Unable to pass empty values");
      return;
    }
    closeModal();
    console.log(data);
    setData(initialValue);
    setError("");
    showNotification(true, "loading", "loading...");
  };

  return (
    <button
      className="px-5 py-1 rounded-lg font-bold bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300"
      onClick={handleNewBookUpload}
    >
      Finish
    </button>
  );
}
