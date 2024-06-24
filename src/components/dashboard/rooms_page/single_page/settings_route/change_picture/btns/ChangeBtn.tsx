"use client";

import { usePathname, useRouter } from "next/navigation";
import { detectEnviro } from "../../../../../../../lib/helpers/regular_funcs/general";
import { useContext } from "react";
import { NotificationsContext as notifCtx } from "../../../../../../../context/ctx";
import { upload } from "@vercel/blob/client";
import { deleteBlobData } from "../../../../../profile_page/logined_user_ui/personal_info/btns/SaveBtn";

interface Props {
  source: File | null;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  previousImg: string;
  resetButtons: React.Dispatch<React.SetStateAction<File | null>>;
}

const domain = detectEnviro();

export default function ChangeBtn({
  source,
  setLoading,
  previousImg,
  resetButtons,
}: Props) {
  const { showNotification } = useContext(notifCtx);
  const path = usePathname();
  const router = useRouter();

  const handleCoverPictureChange = async () => {
    setLoading(true);

    try {
      if (!source) throw new Error("No picture selected for blob upload");

      const newBlob = await upload(source.name, source, {
        access: "public",
        handleUploadUrl: "/api/dashboard/blob/upload",
      });

      const res = await fetch(
        `${domain}/api/dashboard/rooms/${
          path.split("/")[3]
        }/settings/cover_picture`,
        {
          method: "PUT",
          body: JSON.stringify(newBlob.url),
        }
      );
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      router.refresh();
      showNotification(true, "success", result.message);
      if (previousImg.trim() !== "") await deleteBlobData(previousImg);
    } catch (error: any) {
      console.error(error.message);
      showNotification(true, "error", error.message);
    } finally {
      setLoading(false);
      resetButtons(null);
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
