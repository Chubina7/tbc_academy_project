"use client";

import { useContext } from "react";
import {
  AddNewRoomContext as roomCtx,
  NotificationsContext as notifCtx,
} from "../../../../../../context/ctx";
import { useRouter } from "next/navigation";
import { detectEnviro } from "../../../../../../lib/helpers/regular_funcs/general";
import { upload } from "@vercel/blob/client";

interface Props {
  closeModal: () => void;
}

const domain = detectEnviro();

export default function FinishBtn({ closeModal }: Props) {
  const { steps, data, isLoading, setIsLoading } = useContext(roomCtx);
  const { showNotification } = useContext(notifCtx);
  const router = useRouter();

  if (steps.activeIdx !== 3) return null;

  // getting data
  const { categories, members } = data;
  const description = data.description.trim();
  const title = data.title.trim();
  const coverPicture = data.coverPicture;

  const condition =
    categories.length < 3 ||
    !coverPicture ||
    description === "" ||
    members.length < 1 ||
    title === "";

  const handleSubmition = async () => {
    setIsLoading(true);
    if (condition) {
      console.error("Empty values detected!");
      return;
    }

    const newBlob = await upload(coverPicture.name, coverPicture, {
      access: "public",
      handleUploadUrl: "/api/dashboard/blob/upload",
    });

    const dataToBeStored = {
      room: {
        room_name: data.title,
        room_description: data.description,
        category: data.categories,
        cover_picture: newBlob.url,
      },
      members: data.members,
    };

    try {
      const res = await fetch(`${domain}/api/dashboard/rooms`, {
        method: "POST",
        body: JSON.stringify(dataToBeStored),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result);
      }
      router.push(`/dashboard/rooms/${result.room_id}`);
      showNotification(true, "success", result.message);
    } catch (error: any) {
      console.error(error.message);
      showNotification(true, "error", error.message);
    } finally {
      router.refresh();
      closeModal();
      setIsLoading(false);
    }
  };

  return (
    <button
      className="w-full px-12 py-1 rounded-xl bg-[#2B3674] text-[#F4F7FF] dark:bg-[#5C5470] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      onClick={handleSubmition}
      disabled={condition || isLoading}
    >
      FINISH
    </button>
  );
}
