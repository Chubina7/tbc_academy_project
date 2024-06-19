"use client";

import { useRouter } from "next/navigation";
import { detectEnviro } from "../../../../../../lib/helpers/regular_funcs/general";
import { useContext } from "react";
import { NotificationsContext as notifCtx } from "../../../../../../context/ctx";

interface Props {
  closeModal: () => void;
  loadingState: {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const domain = detectEnviro();

export default function YesBtn({ closeModal, loadingState }: Props) {
  const { showNotification } = useContext(notifCtx);
  const router = useRouter();

  const handleDeletion = async () => {
    loadingState.setIsLoading(true);
    try {
      const res = await fetch(`${domain}/api/dashboard/profile`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.message);
      }

      closeModal();
      router.replace("/");
    } catch (error: any) {
      console.error(error);
      closeModal();
      showNotification(true, "error", error.message);
    } finally {
      loadingState.setIsLoading(false);
    }

    // delete session cookie
    // ...
    // delete row from users table
    // ...
  };

  return (
    <button
      onClick={handleDeletion}
      className={`px-3 py-1 rounded-lg bg-red-600 ${
        loadingState.isLoading ? "opacity-60" : "opacity-100"
      }`}
      disabled={loadingState.isLoading}
    >
      Yes
    </button>
  );
}
