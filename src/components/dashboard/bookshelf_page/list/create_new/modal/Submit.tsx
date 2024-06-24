"use client";

import { useContext } from "react";
import {
  UploadNewBookContext as ctx,
  NotificationsContext as notifCtx,
} from "../../../../../../context/ctx";
import { detectEnviro } from "../../../../../../lib/helpers/regular_funcs/general";

interface Props {
  closeModal: () => void;
}

const domain = detectEnviro();

export default function Submit({ closeModal }: Props) {
  const { initialValue, data, setData, setError, setIsLoading, isLoading } =
    useContext(ctx);
  const { showNotification } = useContext(notifCtx);

  const condition =
    data.title.trim() === "" ||
    data.description.trim() === "" ||
    data.book.name.trim() === "" ||
    data.book.type.trim() === "" ||
    (data.room !== null && data.room.room_id.trim() === "") ||
    (data.room !== null && data.room.room_name.trim() === "");

  const handleNewBookUpload = async () => {
    if (condition) {
      setError("Unable to pass empty values");
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch(`${domain}/api/dashboard/bookshelf`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      showNotification(true, "success", result.message);
    } catch (error: any) {
      console.error(error);
      showNotification(true, "error", error.message);
    } finally {
      setIsLoading(false);
      closeModal();
      setData(initialValue);
      setError("");
    }
  };

  return (
    <button
      className="px-5 py-1 rounded-lg font-bold bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] transition-all duration-300 disabled:opacity-60"
      onClick={handleNewBookUpload}
      disabled={isLoading || condition}
    >
      Finish
    </button>
  );
}
