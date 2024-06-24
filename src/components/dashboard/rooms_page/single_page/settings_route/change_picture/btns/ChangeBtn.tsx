"use client";

import { usePathname, useRouter } from "next/navigation";
import { detectEnviro } from "../../../../../../../lib/helpers/regular_funcs/general";
import { useContext } from "react";
import { NotificationsContext as notifCtx } from "../../../../../../../context/ctx";

interface Props {
  source: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const domain = detectEnviro();

export default function ChangeBtn({ source, setLoading }: Props) {
  const { showNotification } = useContext(notifCtx);
  const path = usePathname();
  const router = useRouter();

  const handleCoverPictureChange = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${domain}/api/dashboard/rooms/${
          path.split("/")[3]
        }/settings/cover_picture`,
        {
          method: "PUT",
          body: JSON.stringify(source),
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
      setLoading(false);
    }
  };

  return (
    <button
      className="text-nowrap px-3 py-1 border border-[#603CFF] dark:border-[#5C5470] bg-[#603CFF] text-[#FFFFFF] dark:bg-[#5C5470] dark:text-[#DBD8E3] transition-all duration-300 rounded-lg select-none"
      onClick={handleCoverPictureChange}
    >
      Save
    </button>
  );
}
