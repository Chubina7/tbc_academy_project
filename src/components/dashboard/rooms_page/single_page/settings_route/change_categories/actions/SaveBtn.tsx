"use client";

import { useContext } from "react";
import {
  AddNewCategoryContext as ctx,
  NotificationsContext as notifCtx,
} from "../../../../../../../context/ctx";
import { detectEnviro } from "../../../../../../../lib/helpers/regular_funcs/general";
import { usePathname } from "next/navigation";

const domain = detectEnviro();

export default function SaveBtn() {
  const { categories, setIsLoading } = useContext(ctx);
  const { showNotification } = useContext(notifCtx);
  const path = usePathname();
  const room_id = path.split("/")[3];

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${domain}/api/dashboard/rooms/${room_id}`, {
        method: "PUT",
        body: JSON.stringify({ categories }),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      showNotification(true, "success", result.message);
    } catch (error: any) {
      console.error(error.message);
      showNotification(true, "error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button className="px-3 py-1 bg-red-400 rounded-lg" onClick={handleSubmit}>
      SaveBtn
    </button>
  );
}
