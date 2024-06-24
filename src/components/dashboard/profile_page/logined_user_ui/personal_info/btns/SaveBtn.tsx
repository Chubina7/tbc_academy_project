"use client";

import { useContext } from "react";
import { detectEnviro } from "../../../../../../lib/helpers/regular_funcs/general";
import {
  ProfileLoadingStateContext as loadingCtx,
  NotificationsContext as notifCtx,
} from "../../../../../../context/ctx";
import { useRouter } from "next/navigation";
import { upload } from "@vercel/blob/client";

interface Props {
  dataToBeServed: {
    username: string;
    surname: string | null;
    birth_date: string | null;
    profile: {
      picture: string;
      file: File | null;
    };
  };
  prevProfileImage: string;
}

const domain = detectEnviro();

const deleteBlobData = async (urlToDelete: string) => {
  try {
    const res = await fetch(
      `${domain}/api/dashboard/blob/delete?url=${urlToDelete}`,
      {
        method: "DELETE",
      }
    );
    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message);
    }
  } catch (error: any) {
    console.error(error.message);
  }
};

export default function SaveBtn({ dataToBeServed, prevProfileImage }: Props) {
  const router = useRouter();
  const { setIsLoading } = useContext(loadingCtx);
  const { showNotification } = useContext(notifCtx);

  const handleSubmit = async () => {
    setIsLoading(true);

    const storingBlob = async () => {
      if (dataToBeServed.profile.file !== null) {
        const blob = await upload(
          dataToBeServed.profile.file.name,
          dataToBeServed.profile.file,
          {
            access: "public",
            handleUploadUrl: "/api/dashboard/blob/upload",
          }
        );
        return blob.url;
      } else {
        await deleteBlobData(prevProfileImage);
        return "";
      }
    };
    try {
      const res = await fetch(`${domain}/api/dashboard/profile`, {
        method: "POST",
        body: JSON.stringify({
          username: dataToBeServed.username,
          surname: dataToBeServed.surname,
          birth_date: dataToBeServed.birth_date,
          profile_picture: await storingBlob(),
        }),
      });
      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.message);
      }

      const result = await res.json();
      showNotification(true, "success", result.message);
      if (prevProfileImage !== "") await deleteBlobData(prevProfileImage);
    } catch (error: any) {
      showNotification(true, "error", error.message);
    } finally {
      router.refresh();
      setIsLoading(false);
    }
  };

  return (
    <button
      className="px-3 py-1 rounded-lg border-2 border-[#603CFF] dark:border-[#5C5470] bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] transition-all duration-300 text-sm font-bold"
      onClick={handleSubmit}
    >
      Save <span className="hidden md:inline-block">Changes</span>
    </button>
  );
}
