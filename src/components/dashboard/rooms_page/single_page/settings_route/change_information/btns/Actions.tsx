"use client";

import { usePathname, useRouter } from "next/navigation";
import { detectEnviro } from "../../../../../../../lib/helpers/regular_funcs/general";
import ChangeBtn from "./ChangeBtn";
import ResetBtn from "./ResetBtn";
import { useContext } from "react";
import {
  EditRoomInformationContext as editCtx,
  NotificationsContext as notifCtx,
} from "../../../../../../../context/ctx";

const domain = detectEnviro();

export default function Actions() {
  const { showNotification } = useContext(notifCtx);
  const { details, setValidationMessage, prevData, setDetails, setIsLoading } =
    useContext(editCtx);
  const router = useRouter();
  const path = usePathname();
  const room_id = path.split("/")[3];

  const resetAction = () => {
    setDetails({ title: prevData.title, description: prevData.description });
  };

  const submitAction = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (details.description.trim() === "" || details.title.trim() === "") {
      setValidationMessage("Unable to pass empty values.");
      return;
    }

    const dataToBeStored = {
      room_name: details.title,
      room_description: details.description,
    };

    try {
      const res = await fetch(
        `${domain}/api/dashboard/rooms/${room_id}/settings/information`,
        {
          method: "PUT",
          body: JSON.stringify(dataToBeStored),
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

  if (
    details.description.trim() !== prevData.description ||
    details.title.trim() !== prevData.title
  ) {
    return (
      <div className="w-full flex justify-end items-center gap-4">
        <ResetBtn action={resetAction} />
        <ChangeBtn action={submitAction} />
      </div>
    );
  }

  return null;
}
