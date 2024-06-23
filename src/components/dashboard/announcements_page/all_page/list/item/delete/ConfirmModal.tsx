"use client";

import { useContext, useState } from "react";
import { detectEnviro } from "../../../../../../../lib/helpers/regular_funcs/general";
import Backdrop from "../../../../../../ui/Backdrop";
import { NotificationsContext as notifCtx } from "../../../../../../../context/ctx";
import { useRouter } from "next/navigation";

interface Props {
  handleModal: () => void;
  idToDelete: string;
  redirect: boolean;
}

const domain = detectEnviro();

export default function ConfirmModal({
  handleModal,
  idToDelete,
  redirect,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useContext(notifCtx);
  const router = useRouter();

  const handleDeletion = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${domain}/api/dashboard/announcements/${idToDelete}`,
        {
          method: "DELETE",
        }
      );
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }
      if (redirect) router.replace("/dashboard/announcements");
      showNotification(true, "success", result.message);
    } catch (error: any) {
      console.error(error.message);
      showNotification(true, "error", error.message);
    } finally {
      router.refresh();
      handleModal();
      setIsLoading(false);
    }
  };

  return (
    <>
      <Backdrop modalCloser={handleModal} />
      <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl p-3 bg-[#FFFFFF] dark:bg-[#352F44] | w-full max-w-[80%] lg:max-w-lg flex flex-col gap-5 justify-center items-end">
        <h1 className="w-full text-xl font-bold">
          Do you really want to delete announcement?
        </h1>
        <div className="flex gap-1 justify-center items-center">
          <button
            className="rounded-lg px-5 py-1 font-bold text-sm border-2 border-[#603CFF] dark:border-[#5C5470] text-[#603CFF] dark:text-[#DBD8E3] transition-all duration-300 disabled:opacity-60"
            onClick={handleModal}
            disabled={isLoading}
          >
            No
          </button>
          <button
            className="border border-red-600 bg-red-600 text-[#FFFFFF] dark:text-[#DBD8E3] transition-all duration-300 rounded-lg select-none px-5 py-1 font-bold text-sm disabled:opacity-60"
            onClick={handleDeletion}
            disabled={isLoading}
          >
            Yes
          </button>
        </div>
      </div>
    </>
  );
}
