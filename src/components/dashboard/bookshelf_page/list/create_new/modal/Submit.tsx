"use client";

import { useContext } from "react";
import {
  UploadNewBookContext as ctx,
  NotificationsContext as notifCtx,
} from "../../../../../../context/ctx";
import { detectEnviro } from "../../../../../../lib/helpers/regular_funcs/general";
import { upload } from "@vercel/blob/client";
import { useRouter } from "next/navigation";

interface Props {
  closeModal: () => void;
}

const domain = detectEnviro();

export default function Submit({ closeModal }: Props) {
  const { initialValue, data, setData, setError, setIsLoading, isLoading } =
    useContext(ctx);
  const { showNotification } = useContext(notifCtx);
  const router = useRouter();

  const condition =
    data.title.trim() === "" ||
    data.description.trim() === "" ||
    data.file.name.trim() === "" ||
    data.file.type.trim() === "" ||
    data.room.room_id.trim() === "" ||
    data.room.room_name.trim() === "";

  const handleNewBookUpload = async () => {
    if (condition) {
      setError("Unable to pass empty values");
      return;
    }

    try {
      setIsLoading(true);

      const newBlob = await upload(data.file.name, data.file, {
        access: "public",
        handleUploadUrl: "/api/dashboard/blob/upload",
      });

      const res = await fetch(`${domain}/api/dashboard/bookshelf`, {
        method: "POST",
        body: JSON.stringify({
          book_description: data.description,
          book_title: data.title,
          room: data.room,
          blob_download_link: newBlob.downloadUrl,
          blob_type: newBlob.contentType,
          blob_name: newBlob.pathname,
        }),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      router.refresh();
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
