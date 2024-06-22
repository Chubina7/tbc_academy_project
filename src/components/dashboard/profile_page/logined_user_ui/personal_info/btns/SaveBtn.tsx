"use client";

import { useContext } from "react";
import { detectEnviro } from "../../../../../../lib/helpers/regular_funcs/general";
import {
  ProfileLoadingStateContext as loadingCtx,
  NotificationsContext as notifCtx,
} from "../../../../../../context/ctx";
import { useRouter } from "next/navigation";

interface Props {
  dataToBeServed: {
    username: string;
    surname: string | null;
    birth_date: string | null;
    profile_picture: string | null;
  };
}

const domain = detectEnviro();

export default function SaveBtn({ dataToBeServed }: Props) {
  const router = useRouter();
  const { setIsLoading } = useContext(loadingCtx);
  const { showNotification } = useContext(notifCtx);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`${domain}/api/dashboard/profile`, {
        method: "POST",
        body: JSON.stringify(dataToBeServed),
      });
      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.message);
      }

      const result = await res.json();
      showNotification(true, "success", result.message);
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
