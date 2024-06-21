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
    <button className="px-3 py-1 rounded-lg bg-red-400" onClick={handleSubmit}>
      Save <span className="hidden md:inline-block">Changes</span>
    </button>
  );
}
