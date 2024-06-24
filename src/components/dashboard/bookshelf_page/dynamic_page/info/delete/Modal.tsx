import { useRouter } from "next/navigation";
import Backdrop from "../../../../../ui/Backdrop";
import { useContext, useState } from "react";
import { NotificationsContext as notifCtx } from "../../../../../../context/ctx";
import { detectEnviro } from "../../../../../../lib/helpers/regular_funcs/general";

interface Props {
  handleModal: () => void;
  book_id: string;
}

const domain = detectEnviro();

export default function Modal({ handleModal, book_id }: Props) {
  const { showNotification } = useContext(notifCtx);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeletion = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${domain}/api/dashboard/bookshelf/${book_id}`, {
        method: "DELETE",
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      router.refresh();
      showNotification(true, "success", result.message);
      router.replace("/dashboard/bookshelf");
    } catch (error: any) {
      console.error(error);
      showNotification(true, "success", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Backdrop />
      <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-xl p-3 bg-[#FFFFFF] dark:bg-[#352F44] | w-full max-w-[80%] lg:max-w-lg flex flex-col gap-5 justify-center items-end">
        <h1 className="w-full text-xl font-bold">
          Do you really want to remove book?
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
