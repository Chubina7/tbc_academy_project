import { usePathname, useRouter } from "next/navigation";
import { detectEnviro } from "../../../../../../../lib/helpers/regular_funcs/general";
import Backdrop from "../../../../../../ui/Backdrop";
import { useContext, useState } from "react";
import { NotificationsContext as notifCtx } from "../../../../../../../context/ctx";

const domain = detectEnviro();

interface Props {
  modalHandler: () => void;
  idToDelete: string;
}

export default function ConfirmModal({ modalHandler, idToDelete }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useContext(notifCtx);
  const router = useRouter();
  const path = usePathname();
  const announcement_id = path.split("/")[3];

  const handleDeletion = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${domain}/api/dashboard/announcements/${announcement_id}/comments`,
        {
          method: "DELETE",
          body: JSON.stringify(idToDelete),
        }
      );
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      showNotification(true, "success", result.message);
      router.refresh();
    } catch (error: any) {
      console.error(error);
      showNotification(true, "error", error.message);
    } finally {
      modalHandler();
      setIsLoading(false);
    }
  };

  return (
    <>
      <Backdrop modalCloser={modalHandler} />
      <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl p-3 bg-[#FFFFFF] dark:bg-[#352F44] | w-full max-w-[80%] lg:max-w-lg flex flex-col gap-5 justify-center items-end">
        <h1 className="w-full text-xl font-bold">Confirm to delete comment.</h1>
        <div className="flex gap-1 justify-center items-center">
          <button
            className="rounded-lg px-5 py-1 font-bold text-sm border-2 border-[#603CFF] dark:border-[#5C5470] text-[#603CFF] dark:text-[#DBD8E3] transition-all duration-300 disabled:opacity-60"
            onClick={modalHandler}
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            className="border border-red-600 bg-red-600 text-[#FFFFFF] dark:text-[#DBD8E3] transition-all duration-300 rounded-lg select-none px-5 py-1 font-bold text-sm disabled:opacity-60"
            onClick={handleDeletion}
            disabled={isLoading}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
