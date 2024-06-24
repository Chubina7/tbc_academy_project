"use client";

import { useContext } from "react";
import {
  AddNewCategoryContext as ctx,
  NotificationsContext as notifCtx,
} from "../../../../../../../context/ctx";
import { detectEnviro } from "../../../../../../../lib/helpers/regular_funcs/general";
import { usePathname, useRouter } from "next/navigation";

const domain = detectEnviro();

export default function SaveBtn() {
  const { categories, setIsLoading } = useContext(ctx);
  const { showNotification } = useContext(notifCtx);
  const path = usePathname();
  const router = useRouter();
  const room_id = path.split("/")[3];

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${domain}/api/dashboard/rooms/${room_id}/settings/categories`,
        {
          method: "PUT",
          body: JSON.stringify({ categories }),
        }
      );
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }
      router.refresh();
      showNotification(true, "success", result.message);
    } catch (error: any) {
      console.error(error.message);
      showNotification(true, "error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className="px-3 py-1 border border-[#603CFF] dark:border-[#5C5470] bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] transition-all duration-300 rounded-lg"
      onClick={handleSubmit}
    >
      Save
    </button>
  );
}
