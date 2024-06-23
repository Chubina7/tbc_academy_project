"use client";

import { useContext } from "react";
import {
  AddNewAnnouncementContext as newAnnCtx,
  NotificationsContext as notifCtx,
} from "../../../../../context/ctx";
import { detectEnviro } from "../../../../../lib/helpers/regular_funcs/general";
import { useRouter } from "next/navigation";

const domain = detectEnviro();

export default function Btn() {
  const { showNotification } = useContext(notifCtx);
  const router = useRouter();
  const {
    announcement,
    roomId,
    title,
    setAnnouncement,
    setRoomId,
    setTitle,
    error,
    setError,
    setIsLoading,
  } = useContext(newAnnCtx);

  const handleSubmition = async () => {
    setIsLoading(true);
    if (
      announcement.trim() === "" ||
      roomId.trim() === "" ||
      title.trim() === ""
    ) {
      setError(true);
      setIsLoading(false);
      return;
    }

    const dataToBeStored = {
      announcement_title: title,
      announcement,
      room_id: roomId,
    };

    try {
      const res = await fetch(`${domain}/api/dashboard/announcements`, {
        method: "POST",
        body: JSON.stringify(dataToBeStored),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      router.refresh();
      showNotification(true, "success", result.message);
    } catch (error: any) {
      showNotification(true, "error", error.message);
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }

    // reset values
    setAnnouncement("");
    setRoomId("default");
    setTitle("");
  };

  return (
    <div className="w-full flex justify-end items-center gap-5">
      {error && (
        <p className="text-red-600">Passing empty values is not permited</p>
      )}
      <button
        className="px-3 py-1 bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] transition-all duration-300 rounded-lg hover:scale-105"
        onClick={handleSubmition}
      >
        Announce
      </button>
    </div>
  );
}
