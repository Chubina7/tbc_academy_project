"use client";

import { useContext } from "react";
import { NotificationsContext as notifCtx } from "../../../../../../../../../context/ctx";
import { detectEnviro } from "../../../../../../../../../lib/helpers/regular_funcs/general";

interface Props {
  modalHandler: () => void;
  data: { user_id: string; room_id: string };
  loadingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const domain = detectEnviro();

export default function ConfirmBtn({
  modalHandler,
  data,
  loadingState,
}: Props) {
  const { showNotification } = useContext(notifCtx);
  const [isLoading, setIsLoading] = loadingState;
  const { room_id, user_id } = data;

  const handleConfirmation = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${domain}/api/dashboard/rooms/${room_id}/members`,
        {
          method: "DELETE",
          body: JSON.stringify({ user_id, room_id }),
        }
      );
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      showNotification(true, "success", result.message);
    } catch (error: any) {
      showNotification(true, "error", error.message);
    } finally {
      setIsLoading(false);
      modalHandler();
    }
  };

  return (
    <button
      className="border border-red-700 bg-red-700 px-3 py-1 rounded-lg disabled:opacity-60"
      onClick={handleConfirmation}
      disabled={isLoading}
    >
      Confirm
    </button>
  );
}
