"use client";

import { usePathname, useRouter } from "next/navigation";
import { detectEnviro } from "../../../../../../lib/helpers/regular_funcs/general";
import { useContext } from "react";
import { NotificationsContext as notifCtx } from "../../../../../../context/ctx";
import { useTranslations } from "next-intl";

interface Props {
  closeModal: () => void;
  loadingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const domain = detectEnviro();

export default function ConfirmBtn({ closeModal, loadingState }: Props) {
  const { showNotification } = useContext(notifCtx);
  const router = useRouter();
  const path = usePathname();
  const room_id = path.split("/")[3];
  const t = useTranslations(
    "dashboard.pages.rooms.singlePage.settingsPage.delete"
  );

  const deletionHandler = async () => {
    loadingState[1](true);

    try {
      const res = await fetch(`${domain}/api/dashboard/rooms/${room_id}`, {
        method: "DELETE",
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      router.replace("/dashboard");
      showNotification(true, "success", result.message);
    } catch (error: any) {
      showNotification(true, "error", error.message);
    } finally {
      loadingState[1](false);
      closeModal();
      router.refresh();
    }
  };

  return (
    <button
      className={`px-3 py-1 border border-red-500 bg-red-500 rounded-lg ${
        loadingState[0] ? "opacity-60" : "opacity-100"
      }`}
      onClick={deletionHandler}
      disabled={loadingState[0]}
    >
      {t("delBtn")}
    </button>
  );
}
